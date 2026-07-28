from __future__ import annotations

from pathlib import Path
import re

import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import LogFormatterMathtext, LogLocator


ARTICLE = Path("posts/how-to-read-photodetector-noise-spectrum.html")
FIGURE = Path("assets/images/mct-noise-spectrum.svg")


def sub_one(text: str, pattern: str, replacement: str, flags: int = 0) -> str:
    updated, count = re.subn(
        pattern,
        lambda _match: replacement,
        text,
        count=1,
        flags=flags,
    )
    if count != 1:
        raise RuntimeError(f"Expected one replacement, found {count}: {pattern[:120]}")
    return updated


def replace_one(text: str, old: str, new: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Expected one exact replacement, found {count}: {old[:120]}")
    return text.replace(old, new, 1)


def update_article() -> None:
    text = ARTICLE.read_text(encoding="utf-8")

    text = sub_one(
        text,
        r'<p class="definition-line">.*?</p>',
        r'<p class="definition-line"><strong>Core idea:</strong> An ideal MCT spectrum can be organized into \(1/f\), generation-recombination, and Johnson contributions. Independent noise powers add, so their amplitude spectral densities combine in quadrature.</p>',
        re.S,
    )

    text = sub_one(
        text,
        r'<section class="quick-reference" id="model".*?</section>',
        r'''<section class="quick-reference" id="model" aria-labelledby="quick-reference-title"><h2 id="quick-reference-title">Three-region MCT noise model</h2><div class="math-display">\[
\begin{aligned}
e_n(f)&=\sqrt{e_{1/f}^2(f)+e_{\mathrm{GR}}^2(f)+e_J^2}\\[4pt]
&=\left\{\left[A_{1/f}\left(\frac{f}{f_0}\right)^{-\beta}\right]^2+\left[\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_c\right)^2}}\right]^2+e_J^2\right\}^{1/2}.
\end{aligned}
\]</div><p class="scope-note"><strong>Notation:</strong> \(A_{1/f}\) is the low-frequency ASD at reference frequency \(f_0\), \(e_{\mathrm{GR},0}\) is the GR plateau ASD, \(e_J=\sqrt{4k_{\mathrm B}TR}\), and \(\beta=\alpha/2\) when \(\alpha\) denotes the PSD slope.</p><p class="scope-note"><strong>Scope:</strong> This reference focuses primarily on biased HgCdTe photoconductors. Photovoltaic MCT diodes may require additional shot, diffusion, tunneling, shunt, and readout-noise terms that are not represented by this three-component model.</p></section>''',
        re.S,
    )

    text = sub_one(
        text,
        r'<p>The distinction matters when reading slopes\..*?</p>',
        r'<p>The distinction matters when reading slopes. If \(S_V\propto 1/f^\alpha\), then \(e_n\propto 1/f^\beta\) with \(\beta=\alpha/2\). The direct NASD model above squares each component, adds the resulting noise powers, and then takes the square root.</p>',
        re.S,
    )

    text = sub_one(
        text,
        r'<p>The three-term equation above describes.*?</p>',
        r'<p>The direct NASD equation above combines a low-frequency power-law amplitude, one generation-recombination amplitude with corner frequency \(f_c\), and the Johnson-Nyquist amplitude of the MCT resistance at temperature \(T\). It is an interpretive model, not a guarantee that every measured spectrum contains exactly one of each contribution.</p>',
        re.S,
    )

    text = sub_one(
        text,
        r'<figure class="noise-figure">.*?</figure>',
        r'<figure class="noise-figure"><img src="../assets/images/mct-noise-spectrum.svg" alt="Representative HgCdTe photoconductor noise amplitude spectral density with 1/f, generation-recombination, and Johnson regions combined in quadrature"/><figcaption class="figure-caption">Representative MCT noise amplitude spectral density using an idealized three-region model. The component NASDs are squared, added, and square-rooted to obtain the total. The parameters shown in the plot reproduce the curve. The shaded 1–10 kHz band shows a common practical test range. The curve is illustrative—not measured data from a specific detector.</figcaption></figure>',
        re.S,
    )

    text = sub_one(
        text,
        r'<h2 id="flicker">.*?(?=<h2 id="gr">)',
        r'''<h2 id="flicker">The low-frequency \(1/f\) region</h2>
<div class="math-display">\[
e_{1/f}(f)=A_{1/f}\left(\frac{f}{f_0}\right)^{-\beta}.
\]</div>
<p>The exponent \(\beta\) describes the ASD slope. The corresponding PSD term is \(S_{1/f}=e_{1/f}^2\propto 1/f^{2\beta}\), so the common PSD notation \(S_{1/f}\propto1/f^\alpha\) uses \(\alpha=2\beta\). In MCT photoconductors, a broad distribution of trap and relaxation times can produce approximate power-law behavior. Contacts, surfaces, passivation, carrier-number fluctuations, mobility fluctuations, nonuniform current flow, bias instability, and slow thermal drift can produce similar low-frequency excess.</p>
<p>The reference-frequency amplitude \(A_{1/f}\) becomes more physically useful when tracked against bias, current, resistance, area, temperature, contact geometry, processing history, and passivation state. One spectrum at one operating point rarely identifies a unique cause.</p>
<div class="observation"><p><strong>Practical interpretation:</strong> treat \(A_{1/f}\) and \(\beta\) as measured descriptors first. Assign a microscopic mechanism only after their scaling with operating condition and device geometry has been tested.</p></div>
''',
        re.S,
    )

    text = sub_one(
        text,
        r'<h2 id="gr">.*?(?=<p>The word <em>effective</em>)',
        r'''<h2 id="gr">The generation-recombination region</h2>
<div class="math-display">\[
e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_c\right)^2}}.
\]</div>
<p>A single relaxation process gives a Lorentzian PSD. In ASD form, \(e_{\mathrm{GR},0}\) is the low-frequency plateau and the amplitude rolls off as \(1/f\) above \(f_c\). Squaring this expression recovers the Lorentzian PSD. For a genuine first-order relaxation,</p>
<div class="math-display">\[
\tau_{\mathrm{eff}}=\frac{1}{2\pi f_c}.
\]</div>
''',
        re.S,
    )

    text = replace_one(
        text,
        r'<li><strong>Check the Johnson prediction.</strong> Calculate \(4k_{\mathrm B}TR\) from the measured detector resistance and temperature, then compare it with the high-frequency plateau.</li>',
        r'<li><strong>Check the Johnson prediction.</strong> Calculate \(e_J=\sqrt{4k_{\mathrm B}TR}\) from the measured detector resistance and temperature, then compare it with the high-frequency ASD plateau.</li>',
    )
    text = replace_one(
        text,
        r'<li><strong>Fit Lorentzian structure.</strong> Estimate \(B\) and \(f_c\), then inspect residuals for additional corners or broadening.</li>',
        r'<li><strong>Fit Lorentzian structure.</strong> Estimate \(e_{\mathrm{GR},0}\) and \(f_c\), then inspect residuals for additional corners or broadening.</li>',
    )
    text = replace_one(
        text,
        r'<li><strong>Fit the low-frequency term last.</strong> Estimate \(A\) and \(\alpha\) only after the GR and high-frequency contributions are constrained.</li>',
        r'<li><strong>Fit the low-frequency term last.</strong> Estimate \(A_{1/f}\) and \(\beta\) only after the GR and high-frequency contributions are constrained.</li>',
    )

    text = sub_one(
        text,
        r'<div class="article-table-wrap"><table class="article-table fit-table">.*?</table></div>',
        r'<div class="article-table-wrap"><table class="article-table fit-table"><thead><tr><th>Quantity</th><th>Direct meaning</th><th>What it does not prove by itself</th></tr></thead><tbody><tr><td>\(A_{1/f}\)</td><td>Fitted low-frequency ASD at the reference frequency \(f_0\)</td><td>A unique trap density, surface, or contact mechanism</td></tr><tr><td>\(\beta\)</td><td>Log-log ASD slope magnitude of the power-law term; \(\alpha=2\beta\) in PSD notation</td><td>That one microscopic \(1/f\) model is correct</td></tr><tr><td>\(e_{\mathrm{GR},0}\)</td><td>Low-frequency ASD plateau of the fitted GR contribution</td><td>Which MCT recombination channel produced it</td></tr><tr><td>\(f_c\)</td><td>Corner frequency of the fitted relaxation</td><td>Bulk minority-carrier lifetime without transfer-function checks</td></tr><tr><td>\(e_J\)</td><td>Ideal Johnson ASD \(\sqrt{4k_{\mathrm B}TR}\) for the measured MCT resistance and temperature</td><td>That the measured high-frequency floor is detector-limited</td></tr></tbody></table></div>',
        re.S,
    )

    ARTICLE.write_text(text, encoding="utf-8")


def render_figure() -> None:
    mpl.rcParams.update(
        {
            "font.family": "DejaVu Sans",
            "mathtext.fontset": "stix",
            "svg.fonttype": "path",
        }
    )

    f = np.logspace(2, 8, 1600)
    f0 = 1.0
    a_1f = np.sqrt(1.84e-9)
    beta = 0.95
    e_gr0 = 2.00e-7
    fc = 1.7e5
    e_j = 2.00e-8

    e_1f = a_1f * (f / f0) ** (-beta)
    e_gr = e_gr0 / np.sqrt(1.0 + (f / fc) ** 2)
    e_total = np.sqrt(e_1f**2 + e_gr**2 + e_j**2)
    yfc = np.sqrt(
        (a_1f * (fc / f0) ** (-beta)) ** 2
        + (e_gr0 / np.sqrt(2.0)) ** 2
        + e_j**2
    )

    fig, ax = plt.subplots(figsize=(12, 7.2), dpi=180)
    ax.set_xscale("log")
    ax.set_yscale("log")
    ax.set_xlim(1e2, 1e8)
    ax.set_ylim(1e-8, 1e-6)

    ax.xaxis.set_major_locator(LogLocator(base=10, numticks=8))
    ax.xaxis.set_minor_locator(LogLocator(base=10, subs=np.arange(2, 10) * 0.1, numticks=100))
    ax.yaxis.set_major_locator(LogLocator(base=10, numticks=4))
    ax.yaxis.set_minor_locator(LogLocator(base=10, subs=np.arange(2, 10) * 0.1, numticks=100))
    ax.xaxis.set_major_formatter(LogFormatterMathtext())
    ax.yaxis.set_major_formatter(LogFormatterMathtext())
    ax.grid(which="major", linestyle="--", linewidth=0.85, alpha=0.52)
    ax.grid(which="minor", linestyle="--", linewidth=0.52, alpha=0.30)

    band = (f >= 1e3) & (f <= 1e4)
    ax.fill_between(
        f[band],
        1e-8,
        e_total[band],
        facecolor="#8ed08f",
        alpha=0.34,
        hatch="//",
        edgecolor="#5aaa61",
        linewidth=0.0,
        zorder=1,
    )
    ax.plot(f, e_total, color="#1a32d8", linewidth=2.8, label="Total Noise", zorder=4)
    ax.plot([1e2, fc], [yfc, yfc], color="#ff00ff", linestyle=(0, (5, 4)), linewidth=1.5, zorder=2)
    ax.plot([fc, fc], [1e-8, yfc], color="#ff00ff", linestyle=(0, (5, 4)), linewidth=1.5, zorder=2)
    ax.scatter([fc], [yfc], s=56, color="#ff00ff", zorder=5)

    ax.set_title("Photodetector Noise Model", fontsize=16, fontweight="semibold", pad=16)
    ax.set_xlabel("Frequency (Hz)", fontsize=11.5, labelpad=9)
    ax.set_ylabel(r"Noise amplitude spectral density (V/$\sqrt{\mathrm{Hz}}$)", fontsize=11.5, labelpad=8)

    box = {"facecolor": "white", "edgecolor": "none", "alpha": 0.88, "pad": 1.6}
    ax.text(
        1.25e2,
        8.6e-7,
        r"$e_n(f)=\sqrt{e_{1/f}^2(f)+e_{\mathrm{GR}}^2(f)+e_J^2}$",
        fontsize=11.5,
        ha="left",
        va="top",
        bbox=box,
    )
    ax.text(
        1.25e2,
        7.25e-7,
        r"$A_{1/f}=4.29\times10^{-5},\ \beta=0.95,\ e_{\mathrm{GR},0}=2.00\times10^{-7},\ f_c=1.7\times10^5,\ e_J=2.00\times10^{-8}$",
        fontsize=9.8,
        ha="left",
        va="top",
        bbox=box,
    )
    ax.text(
        1.25e2,
        6.35e-7,
        r"$(f_0=1\ \mathrm{Hz};\ \mathrm{ASD\ amplitudes\ in\ V}/\sqrt{\mathrm{Hz}})$",
        fontsize=8.8,
        color="#555555",
        ha="left",
        va="top",
    )

    ax.text(7.0e2, 3.55e-7, "1/f Region", fontsize=14, fontweight="bold", ha="left")
    ax.text(
        7.0e2,
        2.70e-7,
        r"$e_{1/f}(f)=A_{1/f}\left(\frac{f}{f_0}\right)^{-\beta}$",
        fontsize=12.2,
        ha="left",
        bbox=box,
    )

    ax.text(4.2e5, 2.05e-7, "GR Region", fontsize=14, fontweight="bold", ha="left")
    ax.text(
        4.2e5,
        1.52e-7,
        r"$e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+(f/f_c)^2}}$",
        fontsize=12.2,
        ha="left",
        bbox=box,
    )
    ax.text(
        2.15e5,
        1.06e-7,
        r"$f_c=1.7\times10^5\ \mathrm{Hz}$",
        fontsize=11.3,
        ha="left",
        bbox=box,
    )
    ax.text(
        5.0e4,
        6.7e-8,
        r"$\tau_{\mathrm{eff}}=\frac{1}{2\pi f_c}$",
        fontsize=11.5,
        ha="left",
        color="#ff00ff",
        bbox=box,
    )

    ax.text(6.0e6, 3.35e-8, "Johnson Region", fontsize=14, fontweight="bold", ha="left")
    ax.text(
        7.2e6,
        2.65e-8,
        r"$e_J=\sqrt{4k_{\mathrm B}TR}$",
        fontsize=12.5,
        ha="left",
        bbox=box,
    )

    ax.text(3.16e3, 1.17e-8, "typical 1–10 kHz test band", fontsize=10.8, fontweight="bold", ha="center", va="bottom")
    ax.text(1.28e2, 1.045e-8, "Illustrative parameters only.", fontsize=8.4, color="#6f6f6f", ha="left", va="bottom")

    legend = ax.legend(loc="upper right", frameon=True, framealpha=1.0, fontsize=10.5)
    legend.get_frame().set_facecolor("white")
    legend.get_frame().set_edgecolor("#c6c9cc")
    for spine in ax.spines.values():
        spine.set_linewidth(1.0)
    ax.tick_params(axis="both", which="both", labelsize=9.5)
    fig.subplots_adjust(left=0.115, right=0.975, top=0.90, bottom=0.15)
    fig.savefig(FIGURE, bbox_inches="tight")
    plt.close(fig)


def clean_temporary_files() -> None:
    for path in (
        Path("tools/direct_nasd_update.py"),
        Path(".github/direct-nasd-quadrature.trigger"),
        Path(".github/repair-direct-nasd-workflow.trigger"),
        Path(".github/workflows/direct-nasd-quadrature.yml"),
        Path(".github/workflows/repair-direct-nasd-workflow.yml"),
    ):
        path.unlink(missing_ok=True)


if __name__ == "__main__":
    update_article()
    render_figure()
    clean_temporary_files()
