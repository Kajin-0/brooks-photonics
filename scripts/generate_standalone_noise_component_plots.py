from __future__ import annotations

from pathlib import Path
import html
import math

import numpy as np


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1000, 650
LEFT, TOP, RIGHT, BOTTOM = 95, 70, 970, 575
PW, PH = RIGHT - LEFT, BOTTOM - TOP
FMIN, FMAX = 1e2, 1e7
BLUE = "#1736d1"
MAGENTA = "#c300ff"
GRID_MAJOR = "#d7dbe2"
GRID_MINOR = "#eceef2"
TEXT = "#202124"
TICK = "#5f6368"


def xpix(f: np.ndarray | float) -> np.ndarray | float:
    return LEFT + (np.log10(f) - 2.0) / 5.0 * PW


def ypix(y: np.ndarray | float, ymin: float, ymax: float) -> np.ndarray | float:
    lo, hi = math.log10(ymin), math.log10(ymax)
    return BOTTOM - (np.log10(y) - lo) / (hi - lo) * PH


def measured_like(
    ideal: np.ndarray,
    seed: int,
    sigma: float,
    low_boost: float = 0.0,
) -> np.ndarray:
    """Add deterministic coarse and fine multiplicative scatter."""
    rng = np.random.default_rng(seed)
    n = ideal.size

    coarse = rng.normal(size=n)
    x = np.linspace(-3.0, 3.0, 61)
    kernel = np.exp(-0.5 * x**2)
    kernel /= kernel.sum()
    coarse = np.convolve(coarse, kernel, mode="same")
    coarse /= max(np.std(coarse), 1e-12)

    fine = rng.normal(size=n)
    fine = np.convolve(fine, np.array([0.16, 0.68, 0.16]), mode="same")
    fine /= max(np.std(fine), 1e-12)

    position = np.linspace(0.0, 1.0, n)
    weight = 1.0 + low_boost * (1.0 - position)
    high_density_texture = 0.85 + 0.35 * position
    perturb = sigma * weight * coarse + 0.38 * sigma * high_density_texture * fine
    return ideal * np.exp(perturb)


def points(xs: np.ndarray, ys: np.ndarray) -> str:
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in zip(xs, ys))


def decimate_linear_trace(
    frequency: np.ndarray,
    trace: np.ndarray,
    ymin: float,
    ymax: float,
) -> tuple[np.ndarray, np.ndarray]:
    """Preserve linear-bin density while limiting SVG size.

    The underlying spectrum is sampled uniformly in frequency. On a logarithmic
    x-axis, many more FFT bins therefore occupy each high-frequency pixel column.
    For each pixel column, retain the first, last, minimum, and maximum samples
    in their original frequency order.
    """
    xs = np.asarray(xpix(frequency))
    ys = np.asarray(ypix(trace, ymin, ymax))
    columns = np.clip(np.floor(xs).astype(np.int32), LEFT, RIGHT)

    kept: list[int] = []
    starts = np.flatnonzero(np.r_[True, columns[1:] != columns[:-1]])
    ends = np.r_[starts[1:], len(columns)]

    for start, end in zip(starts, ends):
        segment = ys[start:end]
        candidates = {
            start,
            end - 1,
            start + int(np.argmin(segment)),
            start + int(np.argmax(segment)),
        }
        kept.extend(sorted(candidates))

    indices = np.asarray(kept, dtype=np.int64)
    return xs[indices], ys[indices]


def grid_and_ticks(ymin: float, ymax: float) -> str:
    parts: list[str] = []
    for decade in range(2, 8):
        x = float(xpix(10**decade))
        parts.append(
            f'<line x1="{x:.1f}" y1="{TOP}" x2="{x:.1f}" y2="{BOTTOM}" '
            f'stroke="{GRID_MAJOR}" stroke-width="1" stroke-dasharray="5 5"/>'
        )
        parts.append(
            f'<text class="tick" x="{x:.1f}" y="604" text-anchor="middle">'
            f'10<tspan baseline-shift="super" font-size="12">{decade}</tspan></text>'
        )
        if decade < 7:
            for multiplier in range(2, 10):
                xm = float(xpix(multiplier * 10**decade))
                parts.append(
                    f'<line x1="{xm:.1f}" y1="{TOP}" x2="{xm:.1f}" y2="{BOTTOM}" '
                    f'stroke="{GRID_MINOR}" stroke-width="0.8"/>'
                )

    emin = math.floor(math.log10(ymin))
    emax = math.ceil(math.log10(ymax))
    for exponent in range(emin, emax + 1):
        value = 10.0**exponent
        if ymin <= value <= ymax:
            y = float(ypix(value, ymin, ymax))
            exponent_label = str(exponent).replace("-", "−")
            parts.append(
                f'<line x1="{LEFT}" y1="{y:.1f}" x2="{RIGHT}" y2="{y:.1f}" '
                f'stroke="{GRID_MAJOR}" stroke-width="1" stroke-dasharray="5 5"/>'
            )
            parts.append(
                f'<text class="tick" x="82" y="{y + 6:.1f}" text-anchor="end">'
                f'10<tspan baseline-shift="super" font-size="12">{html.escape(exponent_label)}</tspan></text>'
            )
    return "".join(parts)


def legend(
    entries: list[tuple[str, str, str]],
    x: int = 620,
    y: int = 82,
    width: int = 330,
) -> str:
    height = 26 + 31 * len(entries)
    parts = [
        f'<rect x="{x}" y="{y}" width="{width}" height="{height}" rx="5" '
        'fill="#fff" fill-opacity="0.96" stroke="#c6c9cf"/>'
    ]
    for index, (color, dash, label) in enumerate(entries):
        yy = y + 24 + index * 31
        dash_attribute = f' stroke-dasharray="{dash}"' if dash else ""
        parts.append(
            f'<line x1="{x + 16}" y1="{yy}" x2="{x + 66}" y2="{yy}" '
            f'stroke="{color}" stroke-width="3"{dash_attribute}/>'
        )
        parts.append(f'<text class="legend" x="{x + 78}" y="{yy + 6}">{label}</text>')
    return "".join(parts)


def render(
    name: str,
    title: str,
    description: str,
    frequency: np.ndarray,
    ideal: np.ndarray,
    trace: np.ndarray,
    ymin: float,
    ymax: float,
    ideal_label: str,
    extra: str = "",
    legend_xy: tuple[int, int] = (620, 82),
) -> None:
    trace_x, trace_y = decimate_linear_trace(frequency, trace, ymin, ymax)

    smooth_frequency = np.geomspace(FMIN, FMAX, 1200)
    smooth_ideal = np.interp(smooth_frequency, frequency, ideal)
    ideal_x = xpix(smooth_frequency)
    ideal_y = ypix(smooth_ideal, ymin, ymax)

    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        'role="img" aria-labelledby="title desc">',
        f'<title id="title">{html.escape(title)}</title>'
        f'<desc id="desc">{html.escape(description)}</desc>',
        f'<rect width="{W}" height="{H}" fill="#fff"/>',
        f'<style>text{{font-family:Arial,Helvetica,sans-serif;fill:{TEXT}}}'
        f'.tick{{font-size:18px;fill:{TICK}}}.axis{{font-size:21px}}'
        '.title{font-size:28px;font-weight:700}.legend{font-size:17px}</style>',
        f'<text class="title" x="500" y="38" text-anchor="middle">{html.escape(title)}</text>',
        f'<rect x="{LEFT}" y="{TOP}" width="{PW}" height="{PH}" fill="#fff" '
        'stroke="#222" stroke-width="1.5"/>',
        grid_and_ticks(ymin, ymax),
        f'<polyline points="{points(trace_x, trace_y)}" fill="none" stroke="{BLUE}" '
        'stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>',
        f'<polyline points="{points(np.asarray(ideal_x), np.asarray(ideal_y))}" '
        f'fill="none" stroke="{MAGENTA}" stroke-width="2.8" '
        'stroke-dasharray="9 7" stroke-linejoin="round" stroke-linecap="round"/>',
    ]
    if extra:
        svg.append(extra)
    svg.extend(
        [
            legend(
                [(BLUE, "", "Simulated measured-like trace"), (MAGENTA, "9 7", ideal_label)],
                x=legend_xy[0],
                y=legend_xy[1],
            ),
            '<text class="axis" x="532" y="638" text-anchor="middle">Frequency (Hz)</text>',
            '<text class="axis" transform="translate(27 322) rotate(-90)" '
            'text-anchor="middle">Noise amplitude spectral density (V/√Hz)</text>',
            "</svg>",
        ]
    )
    (OUT / name).write_text("\n".join(svg), encoding="utf-8")


def main() -> None:
    # Uniform-frequency sampling reproduces the increasing FFT-bin density per
    # logarithmic display decade. Pixel-column envelope decimation keeps the SVG
    # compact without reverting to artificial log-spaced sampling.
    count = 500_000
    frequency = np.linspace(FMIN, FMAX, count)

    a_1f, beta = 4.29e-5, 0.95
    ideal_1f = a_1f * frequency ** (-beta)
    trace_1f = measured_like(ideal_1f, seed=101, sigma=0.075, low_boost=0.45)
    render(
        "mct-noise-standalone-1f.svg",
        "Standalone 1/f Noise",
        "Illustrative one-over-f noise ASD generated from uniformly spaced frequency bins, with simulated measurement scatter and an ideal power-law trend.",
        frequency,
        ideal_1f,
        trace_1f,
        1e-12,
        1e-6,
        "Ideal power-law trend",
    )

    e_gr0, f_3db = 2.0e-7, 1.7e5
    ideal_gr = e_gr0 / np.sqrt(1.0 + (frequency / f_3db) ** 2)
    trace_gr = measured_like(ideal_gr, seed=202, sigma=0.060)
    x_3db = float(xpix(f_3db))
    y_3db = float(ypix(e_gr0 / np.sqrt(2.0), 1e-9, 6e-7))
    extra_gr = (
        f'<line x1="{x_3db:.1f}" y1="{TOP}" x2="{x_3db:.1f}" y2="{BOTTOM}" '
        'stroke="#333" stroke-width="1.2" stroke-dasharray="3 4"/>'
        f'<circle cx="{x_3db:.1f}" cy="{y_3db:.1f}" r="5" fill="#222"/>'
        f'<text class="legend" x="{x_3db + 12:.1f}" y="{y_3db - 10:.1f}">'
        'f<tspan baseline-shift="sub" font-size="12">−3 dB</tspan></text>'
    )
    render(
        "mct-noise-standalone-gr.svg",
        "Standalone GR Noise",
        "Illustrative generation-recombination Lorentzian ASD generated from uniformly spaced frequency bins, with a low-frequency plateau, minus-three-decibel rolloff, and simulated measurement scatter.",
        frequency,
        ideal_gr,
        trace_gr,
        1e-9,
        6e-7,
        "Ideal single Lorentzian",
        extra_gr,
        legend_xy=(120, 425),
    )

    e_j = 2.0e-8
    ideal_johnson = np.full_like(frequency, e_j)
    trace_johnson = measured_like(ideal_johnson, seed=303, sigma=0.060)
    render(
        "mct-noise-standalone-johnson.svg",
        "Standalone Johnson Noise",
        "Illustrative Johnson white-noise ASD generated from uniformly spaced frequency bins, with simulated measurement scatter around a flat ideal floor.",
        frequency,
        ideal_johnson,
        trace_johnson,
        6e-9,
        7e-8,
        "Ideal white-noise floor",
    )


if __name__ == "__main__":
    main()
