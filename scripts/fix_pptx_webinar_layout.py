#!/usr/bin/env python3
"""
Post-process mct_webinar_toy_sim.pptx for cleaner Zoom delivery:
- Footer rule: non-zero height (was cy=0, unreliable rendering)
- Remove duplicate shape IDs (graphicFrame vs shapes on table slides)
- Drop decorative corner arcs (Shape 0–2) for calmer slides
- Slightly widen left brand accent bar
"""
from __future__ import annotations

import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

P_NS = "http://schemas.openxmlformats.org/presentationml/2006/main"
A_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"

R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
ET.register_namespace("a", A_NS)
ET.register_namespace("p", P_NS)
ET.register_namespace("r", R_NS)


def _fix_slide(root: ET.Element) -> None:
    sp_tree = root.find(f".//{{{P_NS}}}spTree")
    if sp_tree is None:
        return

    # 1) Remove decorative arcs (Shape 0, 1, 2)
    to_remove: list[ET.Element] = []
    for sp in list(sp_tree.findall(f"{{{P_NS}}}sp")):
        nv = sp.find(f"{{{P_NS}}}nvSpPr")
        if nv is None:
            continue
        cnv = nv.find(f"{{{P_NS}}}cNvPr")
        name = (cnv.get("name") or "") if cnv is not None else ""
        sp_pr = sp.find(f"{{{P_NS}}}spPr")
        if sp_pr is None:
            continue
        prst = sp_pr.find(f"{{{A_NS}}}prstGeom")
        if prst is not None and prst.get("prst") == "arc" and name in (
            "Shape 0",
            "Shape 1",
            "Shape 2",
        ):
            to_remove.append(sp)
    for sp in to_remove:
        sp_tree.remove(sp)

    # 2) Footer horizontal rule: cy 0 -> thin box height (EMU)
    for sp in sp_tree.findall(f"{{{P_NS}}}sp"):
        prst = sp.find(f".//{{{A_NS}}}prstGeom")
        if prst is None or prst.get("prst") != "line":
            continue
        ext = sp.find(f".//{{{A_NS}}}ext")
        if ext is not None and ext.get("cy") == "0":
            ext.set("cy", "9525")

    # 3) Widen left accent bar (Shape 3 at x=0, narrow rect)
    for sp in sp_tree.findall(f"{{{P_NS}}}sp"):
        nv = sp.find(f"{{{P_NS}}}nvSpPr")
        if nv is None:
            continue
        cnv = nv.find(f"{{{P_NS}}}cNvPr")
        if cnv is None or cnv.get("name") != "Shape 3":
            continue
        xfrm = sp.find(f"{{{P_NS}}}spPr/{{{A_NS}}}xfrm")
        if xfrm is None:
            continue
        off = xfrm.find(f"{{{A_NS}}}off")
        ext = xfrm.find(f"{{{A_NS}}}ext")
        if off is None or ext is None:
            continue
        if off.get("x") == "0":
            cx = int(ext.get("cx", "0"))
            if cx < 150000:
                ext.set("cx", "182880")

    # 4) Unique IDs: graphicFrame must not share id with a shape
    shape_ids: set[int] = set()
    for sp in sp_tree.findall(f"{{{P_NS}}}sp"):
        cnv = sp.find(f"{{{P_NS}}}nvSpPr/{{{P_NS}}}cNvPr")
        if cnv is not None and cnv.get("id"):
            shape_ids.add(int(cnv.get("id", "0")))
    max_id = max(shape_ids) if shape_ids else 2

    for gf in sp_tree.findall(f"{{{P_NS}}}graphicFrame"):
        cnv = gf.find(f"{{{P_NS}}}nvGraphicFramePr/{{{P_NS}}}cNvPr")
        if cnv is None:
            continue
        gid = cnv.get("id")
        if not gid:
            continue
        if int(gid) in shape_ids:
            max_id += 1
            cnv.set("id", str(max_id))


def process_pptx(src: Path, dst: Path) -> None:
    buf = src.read_bytes()
    out = zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED)
    with zipfile.ZipFile(src, "r") as zin:
        for info in zin.infolist():
            data = zin.read(info.filename)
            if info.filename.startswith("ppt/slides/slide") and info.filename.endswith(
                ".xml"
            ):
                root = ET.fromstring(data)
                _fix_slide(root)
                data = ET.tostring(root, encoding="utf-8", xml_declaration=True)
            out.writestr(info, data)
    out.close()
    # Verify non-empty
    if not dst.stat().st_size:
        raise RuntimeError("Output PPTX is empty")


def main() -> int:
    repo = Path(__file__).resolve().parents[1]
    src = repo / "mct_webinar_toy_sim.pptx"
    if not src.is_file():
        print(f"Missing {src}", file=sys.stderr)
        return 1
    tmp = repo / "mct_webinar_toy_sim.pptx.tmp"
    process_pptx(src, tmp)
    tmp.replace(src)
    print(f"Updated {src}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
