#!/usr/bin/env python3
"""
Polish mct_webinar_toy_sim.pptx layout (OOXML). Preserves fill/stroke colors.
- Remove decorative corner arcs; fix zero-height footer rule; widen thin accent bar
- Resolve graphicFrame vs shape id collisions
- Fix table vs left-column text overlap (slides 3,4,6,12)
- Fix table vertical overlap with bullets (slides 8,12)
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

GRID = 45720
LEFT_TEXT_X = 960120
RIGHT_COL_X = 8183880
GAP = 91440


def snap(v: int) -> int:
    return int(round(v / GRID) * GRID)


def fix_sp_tree(sp_tree: ET.Element) -> None:
    # Remove decorative arcs
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

    # Footer line extent
    for sp in sp_tree.findall(f"{{{P_NS}}}sp"):
        prst = sp.find(f".//{{{A_NS}}}prstGeom")
        if prst is None or prst.get("prst") != "line":
            continue
        ext = sp.find(f".//{{{A_NS}}}ext")
        if ext is not None and ext.get("cy") == "0":
            ext.set("cy", "9525")

    # Left accent bar
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

    # Unique graphicFrame ids
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


def fix_text17_and_table(
    sp_tree: ET.Element, vertical_clear: bool, force_below_text: bool = False
) -> None:
    """Place table to the right of Text 17 with a real gap; shrink text width until it fits, else stack below."""
    t17 = None
    gf = None
    for sp in sp_tree.findall(f"{{{P_NS}}}sp"):
        cnv = sp.find(f"{{{P_NS}}}nvSpPr/{{{P_NS}}}cNvPr")
        if cnv is not None and (cnv.get("name") or "").startswith("Text 17"):
            t17 = sp
            break
    frames = sp_tree.findall(f"{{{P_NS}}}graphicFrame")
    if len(frames) == 1:
        gf = frames[0]
    elif frames:
        gf = frames[0]

    if t17 is None or gf is None:
        return

    t_xfrm = t17.find(f"{{{P_NS}}}spPr/{{{A_NS}}}xfrm")
    g_xfrm = gf.find(f"{{{P_NS}}}xfrm")
    if t_xfrm is None or g_xfrm is None:
        return

    t_off = t_xfrm.find(f"{{{A_NS}}}off")
    t_ext = t_xfrm.find(f"{{{A_NS}}}ext")
    g_off = g_xfrm.find(f"{{{A_NS}}}off")
    g_ext = g_xfrm.find(f"{{{A_NS}}}ext")
    if any(x is None for x in (t_off, t_ext, g_off, g_ext)):
        return

    t_x = int(t_off.get("x", "0"))
    t_y = int(t_off.get("y", "0"))
    t_cx = int(t_ext.get("cx", "0"))
    t_cy = int(t_ext.get("cy", "0"))
    g_y = int(g_off.get("y", "0"))
    g_cx = int(g_ext.get("cx", "0"))
    g_cy = int(g_ext.get("cy", "0"))

    margin_right = 45720
    room_for_row = RIGHT_COL_X - t_x - GAP - g_cx - margin_right
    min_text_cx = 2514600

    if room_for_row < min_text_cx:
        vertical_clear = True

    new_t_cx = snap(min(t_cx, max(room_for_row, min_text_cx)))

    placed = False
    while new_t_cx >= min_text_cx:
        tbl_x = snap(t_x + new_t_cx + GAP)
        if tbl_x + g_cx <= RIGHT_COL_X - margin_right:
            t_ext.set("cx", str(new_t_cx))
            g_off.set("x", str(tbl_x))
            placed = True
            break
        new_t_cx -= GRID

    if not placed:
        vertical_clear = True
        t_ext.set("cx", str(min_text_cx))
        g_off.set("x", str(snap(t_x)))

    if vertical_clear or force_below_text:
        t_cx_final = int(t_ext.get("cx", "0"))
        t_cy_final = int(t_ext.get("cy", str(t_cy)))
        text_bottom = t_y + t_cy_final
        g_off.set("y", str(snap(text_bottom + GAP)))
        gx = int(g_off.get("x", "0"))
        if gx + g_cx > RIGHT_COL_X - margin_right:
            g_off.set(
                "x",
                str(snap(max(LEFT_TEXT_X, RIGHT_COL_X - margin_right - g_cx))),
            )


def process_slide_xml(data: bytes, slide_name: str) -> bytes:
    root = ET.fromstring(data)
    sp_tree = root.find(f".//{{{P_NS}}}spTree")
    if sp_tree is None:
        return data

    fix_sp_tree(sp_tree)

    if slide_name == "slide3.xml":
        fix_text17_and_table(sp_tree, vertical_clear=False)
    elif slide_name in ("slide4.xml", "slide6.xml"):
        fix_text17_and_table(sp_tree, vertical_clear=False)
    elif slide_name == "slide8.xml":
        fix_text17_and_table(sp_tree, vertical_clear=False, force_below_text=True)
    elif slide_name == "slide12.xml":
        fix_text17_and_table(sp_tree, vertical_clear=True)

    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def polish_pptx(src: Path, dst: Path) -> None:
    with zipfile.ZipFile(src, "r") as zin, zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
        for info in zin.infolist():
            data = zin.read(info.filename)
            if info.filename.startswith("ppt/slides/slide") and info.filename.endswith(
                ".xml"
            ):
                if "/_rels/" in info.filename:
                    pass
                else:
                    slide_name = info.filename.rsplit("/", 1)[-1]
                    data = process_slide_xml(data, slide_name)
            zout.writestr(info, data)


def main() -> int:
    repo = Path(__file__).resolve().parents[1]
    src = repo / "mct_webinar_toy_sim.pptx"
    if not src.is_file():
        print(f"Missing {src}", file=sys.stderr)
        return 1
    tmp = repo / "mct_webinar_toy_sim.pptx.tmp"
    polish_pptx(src, tmp)
    tmp.replace(src)
    print(f"Polished {src}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
