from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "assets" / "images"
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"

# Match the illustrative parameters used in the composite figure.
A_1F = 4.29e-5
F0 = 1.0
BETA = 0.95
E_GR0 = 2.00e-7
F_3DB = 1.70e5
E_J = 2.00e-8

BLUE = "#1736d1"
ORANGE = "#e87516"
GRID = "#8f96a3"


def measured_like(ideal: np.ndarray, seed: int, base_sigma: float, low_frequency_boost: float = 0.0) -> np.ndarray:
    """Add deterministic, correlated multiplicative scatter to an ideal ASD curve."""
    rng = np.random.default_rng(seed)
    white = rng.normal(0.0, 1.0, ideal.size)
    x = np.linspace(-3.0, 3.0, 31)
    kernel = np.exp(-0.5 * x**2)
    kernel /= kernel.sum()
    correlated = np.convolve(white, kernel, mode="same")
    correlated /= max(np.std(correlated), 1e-12)

    if low_frequency_boost:
        weight = 1.0 + low_frequency_boost * np.linspace(1.0, 0.0, ideal.size)
    else:
        weight = 1.0

    return ideal * np.exp(base_sigma * weight * correlated)


def configure_axes(ax: plt.Axes, title: str, ylim: tuple[float, float]) -> None:
    ax.set_xscale("log")
    ax.set_yscale("log")
    ax.set_xlim(1e2, 1e7)
    ax.set_ylim(*ylim)
    ax.set_title(title, fontsize=19, fontweight="bold", pad=15)
    ax.set_xlabel("Frequency (Hz)", fontsize=13)
    ax.set_ylabel(r"Noise amplitude spectral density (V/$\sqrt{\mathrm{Hz}}$)", fontsize=13)
    ax.tick_params(axis="both", which="major", labelsize=11)
    ax.grid(which="major", linestyle="--", linewidth=0.8, color=GRID, alpha=0.35)
    ax.grid(which="minor", linestyle=":", linewidth=0.55, color=GRID, alpha=0.22)


def save_figure(fig: plt.Figure, filename: str) -> None:
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    fig.savefig(
        IMAGE_DIR / filename,
        format="svg",
        bbox_inches="tight",
        facecolor="white",
        metadata={"Date": None},
    )
    plt.close(fig)


def render_one_over_f() -> None:
    f = np.logspace(2, 7, 700)
    ideal = A_1F * (f / F0) ** (-BETA)
    trace = measured_like(ideal, seed=101, base_sigma=0.075, low_frequency_boost=0.45)

    fig, ax = plt.subplots(figsize=(10.2, 6.7), dpi=150)
    configure_axes(ax, "Standalone 1/f Noise", (4e-12, 2e-6))
    ax.plot(f, trace, color=BLUE, linewidth=1.8, label="Simulated measured-like trace")
    ax.plot(
        f,
        ideal,
        color=ORANGE,
        linewidth=2.1,
        linestyle=(0, (6, 4)),
        label=r"Ideal power law: $e_{1/f}\propto f^{-\beta}$",
    )
    ax.legend(loc="upper right", frameon=True, framealpha=0.96, fontsize=10)
    fig.tight_layout()
    save_figure(fig, "mct-noise-standalone-1f.svg")


def render_gr() -> None:
    f = np.logspace(2, 7, 700)
    ideal = E_GR0 / np.sqrt(1.0 + (f / F_3DB) ** 2)
    trace = measured_like(ideal, seed=202, base_sigma=0.060)
    at_3db = E_GR0 / np.sqrt(2.0)

    fig, ax = plt.subplots(figsize=(10.2, 6.7), dpi=150)
    configure_axes(ax, "Standalone GR Noise", (1e-9, 6e-7))
    ax.plot(f, trace, color=BLUE, linewidth=1.8, label="Simulated measured-like trace")
    ax.plot(
        f,
        ideal,
        color=ORANGE,
        linewidth=2.1,
        linestyle=(0, (6, 4)),
        label="Ideal single Lorentzian",
    )
    ax.axvline(F_3DB, color="#333333", linewidth=1.25, linestyle=":")
    ax.scatter([F_3DB], [at_3db], color="#222222", s=38, zorder=5)
    ax.annotate(
        r"$f_{-3\mathrm{dB}}$",
        xy=(F_3DB, at_3db),
        xytext=(12, 10),
        textcoords="offset points",
        fontsize=12,
    )
    ax.legend(loc="upper right", frameon=True, framealpha=0.96, fontsize=10)
    fig.tight_layout()
    save_figure(fig, "mct-noise-standalone-gr.svg")


def render_johnson() -> None:
    f = np.logspace(2, 7, 700)
    ideal = np.full_like(f, E_J)
    trace = measured_like(ideal, seed=303, base_sigma=0.060)

    fig, ax = plt.subplots(figsize=(10.2, 6.7), dpi=150)
    configure_axes(ax, "Standalone Johnson Noise", (6e-9, 7e-8))
    ax.plot(f, trace, color=BLUE, linewidth=1.8, label="Simulated measured-like trace")
    ax.plot(
        f,
        ideal,
        color=ORANGE,
        linewidth=2.1,
        linestyle=(0, (6, 4)),
        label=r"Ideal white-noise floor: $e_J=\sqrt{4k_{\mathrm B}TR}$",
    )
    ax.legend(loc="upper right", frameon=True, framealpha=0.96, fontsize=10)
    fig.tight_layout()
    save_figure(fig, "mct-noise-standalone-johnson.svg")


def insert_after_once(text: str, anchor: str, addition: str) -> str:
    if addition.strip() in text:
        return text
    count = text.count(anchor)
    if count != 1:
        raise RuntimeError(f"Expected one article anchor, found {count}: {anchor[:90]!r}")
    return text.replace(anchor, anchor + "\n" + addition, 1)


def update_article() -> None:
    text = ARTICLE.read_text(encoding="utf-8")

    flicker_anchor = (
        '<p>The exponent \\(\\beta\\) describes the ASD slope. The corresponding PSD term is '
        '\\(S_{1/f}=e_{1/f}^2\\propto 1/f^{2\\beta}\\), so the common PSD notation '
        '\\(S_{1/f}\\propto1/f^\\alpha\\) uses \\(\\alpha=2\\beta\\). In MCT photoconductors, '
        'a broad distribution of trap and relaxation times can produce approximate power-law behavior. '
        'Contacts, surfaces, passivation, carrier-number fluctuations, mobility fluctuations, nonuniform '
        'current flow, bias instability, and slow thermal drift can produce similar low-frequency excess.</p>'
    )
    flicker_figure = (
        '<figure class="noise-figure"><img src="../assets/images/mct-noise-standalone-1f.svg" '
        'alt="Illustrative standalone one-over-f noise amplitude spectral density with a simulated measured-like trace and ideal power-law trend"/>'
        '<figcaption class="figure-caption">Illustrative standalone \\(1/f\\) contribution in ASD form. '
        'The blue curve adds finite-record scatter to the ideal power law so the shape resembles a practical '
        'measurement. It is simulated—not detector data.</figcaption></figure>'
    )
    text = insert_after_once(text, flicker_anchor, flicker_figure)

    gr_anchor = (
        '<p>A single relaxation process gives a Lorentzian PSD. In ASD form, the amplitude equals '
        '\\(e_{\\mathrm{GR},0}/\\sqrt{2}\\) at \\(f_{-3\\mathrm{dB}}\\). This is distinct from the '
        'lower-frequency \\(1/f\\)-to-GR crossover. For a genuine first-order relaxation,</p>'
    )
    gr_figure = (
        '<figure class="noise-figure"><img src="../assets/images/mct-noise-standalone-gr.svg" '
        'alt="Illustrative standalone generation-recombination noise amplitude spectral density with a simulated measured-like trace, Lorentzian plateau, and minus-three-decibel rolloff"/>'
        '<figcaption class="figure-caption">Illustrative standalone GR contribution. A single Lorentzian is '
        'nearly flat below \\(f_{-3\\mathrm{dB}}\\) and approaches a \\(-20\\ \\mathrm{dB/decade}\\) '
        'ASD slope above the rolloff. The blue curve is simulated measured-like scatter around the ideal model.</figcaption></figure>'
    )
    text = insert_after_once(text, gr_anchor, gr_figure)

    johnson_anchor = (
        "<p>The Johnson region is frequency independent over the classical measurement band. Its level changes "
        "with the detector's operating temperature and resistance, so both values must be recorded at the same "
        "bias point used for the noise sweep.</p>"
    )
    johnson_figure = (
        '<figure class="noise-figure"><img src="../assets/images/mct-noise-standalone-johnson.svg" '
        'alt="Illustrative standalone Johnson noise amplitude spectral density with a simulated measured-like trace around a flat white-noise floor"/>'
        '<figcaption class="figure-caption">Illustrative standalone Johnson contribution. The ideal ASD is flat '
        'with frequency; the blue curve shows finite-estimate scatter around the white-noise floor. It is '
        'simulated—not detector data.</figcaption></figure>'
    )
    text = insert_after_once(text, johnson_anchor, johnson_figure)

    ARTICLE.write_text(text, encoding="utf-8")


def main() -> None:
    plt.rcParams.update(
        {
            "font.family": "DejaVu Sans",
            "mathtext.fontset": "stix",
            "svg.hashsalt": "brooks-photonics-standalone-noise-components",
        }
    )
    render_one_over_f()
    render_gr()
    render_johnson()
    update_article()


if __name__ == "__main__":
    main()
