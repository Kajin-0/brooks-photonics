from __future__ import annotations

from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np


# Illustrative noise amplitude spectral density (NASD/ASD) parameters.
A_1F = 4.29e-5          # V/sqrt(Hz) at f0
F0 = 1.0                # Hz
BETA = 0.95             # ASD exponent; PSD exponent alpha = 2*beta
E_GR0 = 2.00e-7         # V/sqrt(Hz), low-frequency GR plateau
F_3DB = 1.70e5          # Hz, GR -3 dB rolloff
E_J = 2.00e-8           # V/sqrt(Hz), Johnson floor


def noise_components(f: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    """Return 1/f, GR, Johnson, and quadrature-summed NASD components."""
    e_1f = A_1F * (f / F0) ** (-BETA)
    e_gr = E_GR0 / np.sqrt(1.0 + (f / F_3DB) ** 2)
    e_j = np.full_like(f, E_J)
    e_total = np.sqrt(e_1f**2 + e_gr**2 + e_j**2)
    return e_1f, e_gr, e_j, e_total


def render(output_path: Path) -> None:
    plt.rcParams.update(
        {
            "font.family": "DejaVu Sans",
            "mathtext.fontset": "stix",
            "svg.hashsalt": "brooks-photonics-mct-noise-spectrum",
            "axes.labelsize": 14,
            "xtick.labelsize": 11,
            "ytick.labelsize": 11,
        }
    )

    f = np.logspace(2, 8, 2200)
    _, _, _, e_total = noise_components(f)
    e_corner = noise_components(np.array([F_3DB]))[-1][0]

    fig, ax = plt.subplots(figsize=(13.5, 7.7), dpi=150)
    # Keep the model equation outside the axes so it cannot overlap the curve.
    fig.subplots_adjust(left=0.085, right=0.985, bottom=0.135, top=0.78)

    fig.suptitle("Photodetector Noise Model", y=0.975, fontsize=21, fontweight="bold")
    fig.text(
        0.5,
        0.905,
        r"$e_n(f)=\left[e_{1/f}^{2}(f)+e_{\mathrm{GR}}^{2}(f)+e_J^2\right]^{1/2}$",
        ha="center",
        va="center",
        fontsize=16.0,
    )
    fig.text(
        0.5,
        0.850,
        r"$S_V(f)=e_n^2(f)$  -  square the NASD to obtain the PSD",
        ha="center",
        va="center",
        fontsize=11.5,
    )

    ax.set_xscale("log")
    ax.set_yscale("log")
    ax.set_xlim(1e2, 1e8)
    ax.set_ylim(1e-8, 1e-6)

    ax.plot(f, e_total, color="#1736d1", linewidth=3.0, label="Total Noise")

    band = (f >= 1e3) & (f <= 1e4)
    ax.fill_between(
        f[band],
        1e-8,
        e_total[band],
        facecolor="#dcefd8",
        edgecolor="#bddcb8",
        hatch="//",
        linewidth=0.0,
        alpha=0.82,
        zorder=0,
    )

    ax.hlines(e_corner, 1e2, F_3DB, color="#ff00ff", linestyle=(0, (5, 4)), linewidth=1.7)
    ax.vlines(F_3DB, 1e-8, e_corner, color="#ff00ff", linestyle=(0, (5, 4)), linewidth=1.7)
    ax.scatter([F_3DB], [e_corner], s=62, color="#ff00ff", zorder=5)

    ax.grid(which="major", linestyle="--", linewidth=0.8, alpha=0.42)
    ax.grid(which="minor", linestyle=":", linewidth=0.55, alpha=0.28)
    ax.set_xlabel("Frequency (Hz)")
    ax.set_ylabel(r"Noise amplitude spectral density (V/$\sqrt{\mathrm{Hz}}$)")
    ax.legend(loc="upper right", frameon=True, framealpha=0.95, fontsize=11)

    ax.text(7.0e2, 3.55e-7, "1/f Region", fontsize=17, fontweight="bold")
    ax.text(
        7.0e2,
        2.55e-7,
        r"$e_{1/f}(f)=A_{1/f}\left(\frac{f}{f_0}\right)^{-\beta}$",
        fontsize=14,
    )

    ax.text(4.2e5, 2.00e-7, "GR Region", fontsize=17, fontweight="bold")
    ax.text(
        4.2e5,
        1.38e-7,
        r"$e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+(f/f_{-3\mathrm{dB}})^2}}$",
        fontsize=14,
    )

    ax.text(6.0e6, 3.35e-8, "Johnson Region", fontsize=17, fontweight="bold")
    ax.text(7.1e6, 2.55e-8, r"$e_J=\sqrt{4k_{\rm B}TR}$", fontsize=14)

    ax.text(2.15e5, 1.05e-7, r"$f_{-3\mathrm{dB}}=1.7\times10^5\ \mathrm{Hz}$", fontsize=12.5)
    ax.text(5.0e4, 6.5e-8, r"$\tau_{\mathrm{eff}}=\frac{1}{2\pi f_{-3\mathrm{dB}}}$", color="#ff00ff", fontsize=12.5)

    ax.text(
        3.15e3,
        1.17e-8,
        "typical 1-10 kHz test band",
        ha="center",
        va="bottom",
        fontsize=13,
        fontweight="bold",
    )

    # Preserve reproducibility without crowding the equation band.
    fig.text(
        0.5,
        0.025,
        r"Illustrative parameters: $A_{1/f}=4.29\times10^{-5}$ at $f_0=1$ Hz; "
        r"$\beta=0.95$; $e_{\mathrm{GR},0}=2.00\times10^{-7}$; "
        r"$f_{-3\mathrm{dB}}=1.7\times10^5$ Hz; $e_J=2.00\times10^{-8}$ "
        r"(ASD amplitudes in V/$\sqrt{\mathrm{Hz}}$).",
        color="#737373",
        fontsize=8.6,
        ha="center",
        va="bottom",
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(
        output_path,
        format="svg",
        bbox_inches="tight",
        facecolor="white",
        metadata={"Date": None},
    )
    plt.close(fig)


if __name__ == "__main__":
    repository_root = Path(__file__).resolve().parents[1]
    render(repository_root / "assets" / "images" / "mct-noise-spectrum.svg")
