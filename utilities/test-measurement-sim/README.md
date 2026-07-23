# MCT Test-Bench Simulator

Browser-based engineering model for an HgCdTe photoconductor test bench.

## Model scope

The simulator estimates:

- HgCdTe bandgap and cutoff wavelength using the Hansen relation
- dark resistance, electric field, current density, and thermal power density
- photoconductive gain from lifetime and transit time
- single-pole frequency response
- Johnson, shot, 1/f, generation-recombination, and preamplifier noise
- signal-to-noise ratio, NEP, and D*

The calculations are deterministic and intended for engineering estimates and training. They do not replace measured detector data or calibrated system analysis.

## Operation

Open `index.html` through the Brooks Photonics site. No passcode, account, server process, or external JavaScript dependency is required.

Settings can be stored in browser local storage. Reports export as CSV.
