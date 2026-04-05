/**
 * MCT photoconductor test-bench physics (webinar-grade).
 * Source of truth for utilities/test-measurement-sim/assets/physics.worker-4rB9ZqiI.js
 * (keep filename stable for Vite bundle).
 *
 * Benchmarks (qualitative): 77 K R_dark ≈ 24.6 Ω; 298 K R_dark ≈ 15.5 Ω;
 * P_incident = 4.315e-7 W; L_eff = 1 mm.
 */
(function () {
  "use strict";

  const KB = 1.38e-23;
  const L_EFF = 1e-3;
  const R_DARK_77 = 24.6;
  const R_DARK_298 = 15.5;
  const T_REF_77 = 77;
  const T_REF_298 = 298;
  const GAMMA_T =
    Math.log(R_DARK_298 / R_DARK_77) / Math.log(T_REF_77 / T_REF_298);
  /** Mild high-field roll-off; ~5.5 kV/m centers 1.5 V dark R in webinar acceptance band. */
  const E_SAT = 5500;
  const BETA_E = 2;
  const P_INCIDENT = 4.315e-7;
  const RI_MAX_77 = 100;
  const V_PHOTO_SCALE = 1.5;
  const BURNOUT_V = 3.5;

  /**
   * Noise (current-referred spectral density, A^2/Hz) — webinar log-log friendly.
   * Johnson: S_J = 4 k_B T / R_dyn (unchanged concept).
   * 1/f: S_1f(f) = S_1f_ref * (f_ref / max(f, f_min))^gamma_1f (mild; subdominant by ~1 kHz).
   * GR: Lorentzian plateau with corner above midband: S_GR(f) = S_GR0 / (1 + (f/f_c)^2).
   */
  const F_REF_1F = 100;
  const F_MIN_1F = 1;
  const GAMMA_1F = 1;
  /** S_1f_ref = ALPHA_1F_REF * S_flat so at 100 Hz 1/f is visible but S_1f(1 kHz) <= ~0.1 * S_flat. */
  const ALPHA_1F_REF = 0.85;
  const F_C_GR = 2.5e4;
  /** GR plateau scales with total current (qualitative). */
  const K_GR0 = 6e-17;
  /** Multiplicative “grass” on spectrum trace (±half this). */
  const JITTER_AMP = 0.03;
  /** Legacy wideband scale for scope time-domain noise (kept for continuity). */
  const SCOPE_NOISE_BW = 5e5;

  function getDarkResistance(T) {
    return R_DARK_77 * Math.pow(T_REF_77 / T, GAMMA_T);
  }

  function getFieldFactor(V) {
    const E = Math.abs(V) / L_EFF;
    const r = E / E_SAT;
    return 1 / Math.pow(1 + Math.pow(r, BETA_E), 1 / BETA_E);
  }

  function getDarkCurrent(V, T, isBurnedOut) {
    if (isBurnedOut) return 0;
    const R0 = getDarkResistance(T);
    return (V / R0) * getFieldFactor(V);
  }

  function getPhotoCurrent(V, T, isUncovered, isBurnedOut) {
    if (!isUncovered || isBurnedOut) return 0;
    const tempPhoto = Math.exp(-(T - T_REF_77) / 150);
    const RiEff =
      RI_MAX_77 * Math.tanh(V / V_PHOTO_SCALE) * tempPhoto;
    return P_INCIDENT * RiEff;
  }

  /** Current-referred 1/f (A^2/Hz). */
  function spectralDensity1f(fHz, s1fRef) {
    const fm = Math.max(fHz, F_MIN_1F);
    return s1fRef * Math.pow(F_REF_1F / fm, GAMMA_1F);
  }

  /** Current-referred GR Lorentzian (A^2/Hz); flat well below f_c. */
  function spectralDensityGR(fHz, sGr0) {
    return sGr0 / (1 + Math.pow(fHz / F_C_GR, 2));
  }

  let prevState = {};
  let cache = {
    spectrumData: new Float32Array(0),
    ivData: new Float32Array(0),
  };

  self.onmessage = (e) => {
    const { type, payload: t } = e.data;
    if (type !== "CALCULATE_ALL") return;

    const out = {};
    const R0 = getDarkResistance(t.temp);
    const ff = getFieldFactor(t.bias);
    const R_dyn = R0 / Math.max(ff, 0.25);

    const U = getDarkCurrent(t.bias, t.temp, t.isBurnedOut);
    const c = getPhotoCurrent(t.bias, t.temp, t.isUncovered, t.isBurnedOut);
    const f = U + c;

    const sJohnson = (4 * KB * t.temp) / R_dyn;
    const sGr0 = K_GR0 * Math.max(f, 1e-12);
    const sFlat = sJohnson + sGr0;
    const s1fRef = ALPHA_1F_REF * sFlat;

    const toNV = R_dyn * 1e9;

    out.physics = { darkCurrent: U, photoCurrent: c, totalCurrent: f };

    const recalcSpectrum =
      t.bias !== prevState.bias ||
      t.temp !== prevState.temp ||
      t.isUncovered !== prevState.isUncovered ||
      t.isChopperOn !== prevState.isChopperOn ||
      t.isGrounded !== prevState.isGrounded ||
      t.chopperFreq !== prevState.chopperFreq ||
      t.isLogLog !== prevState.isLogLog ||
      t.isBurnedOut !== prevState.isBurnedOut ||
      t.isPreampOn !== prevState.isPreampOn ||
      t.preampGain !== prevState.preampGain ||
      !cache.spectrumData.length;

    if (recalcSpectrum) {
      const a = t.isLogLog ? 100 : 150;
      const r = [];
      for (let i = 0; i <= a; i++) {
        r.push(
          t.isLogLog ? Math.pow(10, (i / a) * 7) : (i / a) * 2000
        );
      }
      r.push(60, 120);
      if (t.isChopperOn) r.push(t.chopperFreq);
      const o = Array.from(new Set(r))
        .filter((fr) =>
          fr >= (t.isLogLog ? 1 : 0) && fr <= (t.isLogLog ? 1e7 : 2000)
        )
        .sort((x, y) => x - y);

      const g = t.isPreampOn ? t.preampGain : 1;
      const D = t.isGrounded ? 1 : 1.25;

      const noiseBiasScale = 0.92 + 1.35 * (f / 0.056);

      const u = new Float32Array(o.length * 3);
      for (let e = 0; e < o.length; e++) {
        const s = o[e];
        const s1f = spectralDensity1f(s, s1fRef);
        const sGr = spectralDensityGR(s, sGr0);
        const sTot = sJohnson + s1f + sGr;
        const C = Math.sqrt(Math.max(sTot, 0));
        const v = 1 + (Math.random() - 0.5) * JITTER_AMP * 2;
        const A0 = C * v * D * noiseBiasScale;

        let O = 0;
        if (t.isUncovered && t.isChopperOn) {
          const I = Math.abs(s - t.chopperFreq);
          const N = t.isLogLog ? t.chopperFreq * 0.01 : 2;
          if (I < N * 5) {
            O = c * 0.5 * Math.exp(-Math.pow(I / N, 2)) * v;
          }
        }
        let w = 0;
        const d = t.isGrounded ? 0 : 1;
        const P = t.isLogLog ? s * 0.01 : 2;
        if (Math.abs(s - 60) < P * 5) {
          w +=
            (c * 0.15 + 5e-8) *
            Math.exp(-Math.pow((s - 60) / P, 2) / 2) *
            d;
        }
        const R = t.isLogLog ? s * 0.01 : 2;
        if (Math.abs(s - 120) < R * 5) {
          w +=
            (c * 0.05 + 2e-8) *
            Math.exp(-Math.pow((s - 120) / R, 2) / 2) *
            d;
        }

        u[e * 3] = s;
        u[e * 3 + 1] = A0 * toNV * g;
        u[e * 3 + 2] = (A0 + O + w) * toNV * g;
      }
      cache.spectrumData = u;
    }

    out.spectrumData = cache.spectrumData;

    if (t.isBurnedOut) {
      out.scopeData = new Float32Array(0);
      out.vRms = 0;
    } else {
      let acc = 0;
      const sAt1k =
        sJohnson +
        spectralDensity1f(1000, s1fRef) +
        spectralDensityGR(1000, sGr0);
      const m = Math.sqrt(Math.max(sAt1k, 0) * SCOPE_NOISE_BW);
      const p = 2 * Math.PI * t.chopperFreq;
      const D60 = 2 * Math.PI * 60;
      const humScale = t.isGrounded ? 1 : 1.25;
      const uGain = t.isPreampOn ? t.preampGain : 1;
      const arr = new Float32Array(300);
      for (let s = 0; s < 150; s++) {
        const L = s * 5e-5;
        const M = L + t.time;
        let C = 0;
        if (t.isUncovered && t.isChopperOn) {
          C = c * (Math.sin(p * M) > 0 ? 0.5 : -0.5);
        }
        const v = t.isGrounded ? 0 : 1;
        const A = (c * 0.15 + 5e-8) * Math.sin(D60 * M) * v;
        const O = (Math.random() - 0.5) * m * 2;
        const d = (C + O * humScale + A) * R_dyn * uGain;
        acc += d * d;
        arr[s * 2] = L * 1e3;
        arr[s * 2 + 1] = d * 1e6;
      }
      out.scopeData = arr;
      out.vRms = Math.sqrt(acc / 150);
    }

    if (
      t.temp !== prevState.temp ||
      t.isUncovered !== prevState.isUncovered ||
      t.isBurnedOut !== prevState.isBurnedOut ||
      !(cache.ivData && cache.ivData.length)
    ) {
      const a = new Float32Array(153);
      let r = 0;
      for (let o = 0; o <= 5.01; o += 0.1) {
        if (o > BURNOUT_V) {
          a[r * 3] = o;
          a[r * 3 + 1] = -1;
          a[r * 3 + 2] = -1;
        } else {
          const id = getDarkCurrent(o, t.temp, false);
          const ip = getPhotoCurrent(o, t.temp, t.isUncovered, false);
          a[r * 3] = o;
          a[r * 3 + 1] = (id + ip) * 1e3;
          a[r * 3 + 2] = ip * 1e6;
        }
        r++;
      }
      cache.ivData = a;
    }
    out.ivData = cache.ivData;

    prevState = { ...t, totalCurrent: f };

    self.postMessage(
      { type: "CALCULATION_RESULT", payload: out },
      [
        out.spectrumData.buffer,
        out.scopeData.buffer,
        out.ivData.buffer,
      ].filter((buf) => buf instanceof ArrayBuffer)
    );
  };
})();
