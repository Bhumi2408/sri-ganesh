"use client";
import { useEffect, useRef } from "react";


const SIZE = 480;          // internal resolution of the disc
const TILT = 0.42;         // radians — north pole tipped toward the viewer
const SECONDS_PER_TURN = 40;

export default function SpinningGlobe({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    canvas.width = SIZE;
    canvas.height = SIZE;

    let raf;
    let visible = true;
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const img = new Image();
    img.src = "/sgp/earth-night.webp";
    img.onload = () => {
      if (cancelled) return;
      const TW = img.width;
      const TH = img.height;
      const off = document.createElement("canvas");
      off.width = TW;
      off.height = TH;
      const octx = off.getContext("2d");
      octx.drawImage(img, 0, 0);
      const tex = octx.getImageData(0, 0, TW, TH).data;

      // --- precompute sphere mapping ---
      const R = SIZE / 2;
      const n = SIZE * SIZE;
      const idx = new Int32Array(n).fill(-1); // output pixel -> active
      const u0 = new Float32Array(n);
      const vRow = new Int32Array(n);
      const baseR = new Float32Array(n);
      const baseG = new Float32Array(n);
      const baseB = new Float32Array(n);
      const light = new Float32Array(n);
      const alpha = new Uint8ClampedArray(n);
      const cosT = Math.cos(TILT);
      const sinT = Math.sin(TILT);

      for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
          const nx = (x + 0.5 - R) / R;
          const ny = (y + 0.5 - R) / R;
          const d2 = nx * nx + ny * ny;
          if (d2 > 1) continue;
          const i = y * SIZE + x;
          const z = Math.sqrt(1 - d2);
          // tilt around X axis
          const y2 = ny * cosT - z * sinT;
          const z2 = ny * sinT + z * cosT;
          const lat = Math.asin(-y2);
          const lon = Math.atan2(nx, z2);
          u0[i] = ((lon / (2 * Math.PI)) + 0.5) * TW;
          vRow[i] = Math.min(TH - 1, Math.max(0, Math.floor((0.5 - lat / Math.PI) * TH)));
          idx[i] = i;

          // deep navy body, brighter blue towards the rim (atmosphere)
          const rim = Math.pow(1 - z, 2.2);
          const shade = 0.55 + 0.45 * z;
          baseR[i] = 8 * shade + 70 * rim;
          baseG[i] = 20 * shade + 130 * rim;
          baseB[i] = 48 * shade + 230 * rim;
          light[i] = 0.35 + 0.95 * z; // city lights fade near the limb
          const edge = (1 - Math.sqrt(d2)) * R;
          alpha[i] = Math.min(255, edge * 255);
        }
      }

      const out = ctx.createImageData(SIZE, SIZE);
      const o = out.data;
      let offset = 0.217 * TW; // start with India facing the viewer
      let last = performance.now();

      const frame = (now) => {
        const dt = Math.min(64, now - last);
        last = now;
        // west → east, like the real Earth
        if (!reduced) offset = (offset - (TW / (SECONDS_PER_TURN * 1000)) * dt + TW) % TW;

        for (let i = 0; i < n; i++) {
          if (idx[i] < 0) continue;
          let u = (u0[i] + offset) | 0;
          if (u >= TW) u -= TW;
          const t = (vRow[i] * TW + u) * 4;
          const L = light[i];
          // In this texture oceans/land are blue-tinted and the city lights are the
          // only strongly red pixels, so the red channel isolates the lights.
          const red = tex[t];
          let k = red > 18 ? (red - 18) / 200 : 0;
          k = Math.pow(k, 0.8) * 3.2 * L;
          const land = Math.max(0, tex[t + 1] - 22) * 0.55 * L; // faint continents
          const p = i * 4;
          o[p] = baseR[i] + 255 * k + land * 0.35;
          o[p + 1] = baseG[i] + 170 * k + land * 0.6;
          o[p + 2] = baseB[i] + 60 * k + land;
          o[p + 3] = alpha[i];
        }
        ctx.putImageData(out, 0, 0);
        if (!reduced && visible) raf = requestAnimationFrame(frame);
      };

      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !reduced) {
          cancelAnimationFrame(raf);
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      });
      io.observe(canvas);
      frame(performance.now());
      canvas._io = io;
    };

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      canvas._io?.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
