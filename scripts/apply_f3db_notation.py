from __future__ import annotations

from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"
RENDERER = ROOT / "scripts" / "generate_mct_noise_spectrum.py"


def replace_exact(path: Path, replacements: list[tuple[str, str]]) -> None:
    text = path.read_text(encoding="utf-8")
    for old, new in replacements:
        count = text.count(old)
        if count != 1:
            raise RuntimeError(f"Expected exactly one match in {path}: {old!r}; found {count}")
        text = text.replace(old, new)
    path.write_text(text, encoding="utf-8")


replace_exact(
    ARTICLE,
    [
        (
            r"\left[\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_c\right)^2}}\right]^2",
            r"\left[\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_{-3\mathrm{dB}}\right)^2}}\right]^2",
        ),
        (
            r"In this model, \(f_c=f_{-3\mathrm{dB,GR}}\): it is the GR rolloff, not the lower-frequency \(1/f\)-to-GR crossover.",
            r"In this model, \(f_{-3\mathrm{dB}}\) is the GR rolloff, not the lower-frequency \(1/f\)-to-GR crossover.",
        ),
        (
            r"while \(f_c=f_{-3\mathrm{dB,GR}}\) is the GR component's own rolloff.",
            r"while \(f_{-3\mathrm{dB}}\) is the GR component's own rolloff.",
        ),
        (
            r"The plotted \(f_c\) marker is the GR \(-3\ \mathrm{dB}\) frequency, not the \(1/f\)-to-GR crossover.",
            r"The plotted \(f_{-3\mathrm{dB}}\) marker is not the \(1/f\)-to-GR crossover.",
        ),
        (
            r"A plateau rolls off at \(f_c=f_{-3\mathrm{dB,GR}}\) when one effective relaxation time dominates.",
            r"A plateau rolls off at \(f_{-3\mathrm{dB}}\) when one effective relaxation time dominates.",
        ),
        (
            r"e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_c\right)^2}}.",
            r"e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+\left(f/f_{-3\mathrm{dB}}\right)^2}}.",
        ),
        (
            r"In ASD form, the amplitude equals \(e_{\mathrm{GR},0}/\sqrt{2}\) at \(f_c\), so here \(f_c=f_{-3\mathrm{dB,GR}}\). The symbol is conventional but can be ambiguous because “corner frequency” is also used for the \(1/f\) crossover.",
            r"In ASD form, the amplitude equals \(e_{\mathrm{GR},0}/\sqrt{2}\) at \(f_{-3\mathrm{dB}}\). This is distinct from the lower-frequency \(1/f\)-to-GR crossover.",
        ),
        (
            r"\tau_{\mathrm{eff}}=\frac{1}{2\pi f_c}.",
            r"\tau_{\mathrm{eff}}=\frac{1}{2\pi f_{-3\mathrm{dB}}}.",
        ),
        (
            r"so the observed corner need not equal one uncomplicated bulk minority-carrier lifetime.",
            r"so the observed rolloff need not equal one uncomplicated bulk minority-carrier lifetime.",
        ),
        (
            r"The equation \(\tau=1/(2\pi f_c)\) is correct for a first-order relaxation.",
            r"The equation \(\tau_{\mathrm{eff}}=1/(2\pi f_{-3\mathrm{dB}})\) is correct for a first-order relaxation.",
        ),
        (
            r"Before calling \(f_c\) a carrier-lifetime corner, exclude:",
            r"Before interpreting \(f_{-3\mathrm{dB}}\) as a carrier-lifetime rolloff, exclude:",
        ),
        (
            r"The noise corner, modulated-responsivity rolloff, and time-domain rise or decay",
            r"The noise rolloff, modulated-responsivity rolloff, and time-domain rise or decay",
        ),
        (
            r"A detector with a lower GR corner, different lifetime, different bias, or significant instrumentation limits",
            r"A detector with a lower GR rolloff, different lifetime, different bias, or significant instrumentation limits",
        ),
        (
            r"Estimate \(e_{\mathrm{GR},0}\) and \(f_c\), then inspect residuals",
            r"Estimate \(e_{\mathrm{GR},0}\) and \(f_{-3\mathrm{dB}}\), then inspect residuals",
        ),
        (
            r"<tr><td>\(f_c\)</td><td>GR-component \(-3\ \mathrm{dB}\) rolloff</td>",
            r"<tr><td>\(f_{-3\mathrm{dB}}\)</td><td>GR-component \(-3\ \mathrm{dB}\) rolloff</td>",
        ),
    ],
)

replace_exact(
    RENDERER,
    [
        ("F_C = 1.70e5            # Hz", "F_3DB = 1.70e5          # Hz, GR -3 dB rolloff"),
        ("(f / F_C) ** 2", "(f / F_3DB) ** 2"),
        ("noise_components(np.array([F_C]))", "noise_components(np.array([F_3DB]))"),
        ("ax.hlines(e_corner, 1e2, F_C,", "ax.hlines(e_corner, 1e2, F_3DB,"),
        ("ax.vlines(F_C, 1e-8, e_corner,", "ax.vlines(F_3DB, 1e-8, e_corner,"),
        ("ax.scatter([F_C], [e_corner],", "ax.scatter([F_3DB], [e_corner],"),
        (
            r"$e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+(f/f_c)^2}}$",
            r"$e_{\mathrm{GR}}(f)=\frac{e_{\mathrm{GR},0}}{\sqrt{1+(f/f_{-3\mathrm{dB}})^2}}$",
        ),
        (
            r"$f_c=1.7\times10^5\ \mathrm{Hz}$",
            r"$f_{-3\mathrm{dB}}=1.7\times10^5\ \mathrm{Hz}$",
        ),
        (
            r"$\tau_{\mathrm{eff}}=\frac{1}{2\pi f_c}$",
            r"$\tau_{\mathrm{eff}}=\frac{1}{2\pi f_{-3\mathrm{dB}}}$",
        ),
        (
            r"$f_c=1.7\times10^5$ Hz; $e_J=2.00\times10^{-8}$",
            r"$f_{-3\mathrm{dB}}=1.7\times10^5$ Hz; $e_J=2.00\times10^{-8}$",
        ),
    ],
)

subprocess.run([sys.executable, str(RENDERER)], cwd=ROOT, check=True)
