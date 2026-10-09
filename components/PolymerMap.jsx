"use client";
import { useEffect, useRef } from "react";
import india from "@svg-maps/india";

// Granule shades taken from our PC / ABS / PBT product photos.
export const SHADES = {
  white: "#eef1f5", // ABS / PC natural white
  sky: "#2cb5e6", // PC sky blue
  royal: "#1f6fe0", // PBT blue
  amber: "#f4ad1a", // ABS yellow
  orange: "#f2561d", // PBT orange
};

// Five bands, north to south, like a heap of coloured granules poured into the map.
const REGION = {
  white: ["jk", "hp", "pb", "ch", "hr", "dl", "ut", "up"],
  sky: ["rj", "gj", "dd", "dn"],
  royal: ["mp", "mh", "ct", "ga"],
  amber: ["br", "jh", "wb", "or", "sk", "as", "ar", "nl", "mn", "mz", "tr", "ml"],
  orange: ["tg", "ap", "ka", "kl", "tn", "py", "ld", "an"],
};
const shadeOf = Object.fromEntries(Object.entries(REGION).flatMap(([shade, ids]) => ids.map((id) => [id, shade])));

const [, , VW, VH] = india.viewBox.split(" ").map(Number);
const STEP = 7.2; // granule pitch, in map units

// small seeded PRNG so the granule layout is identical on every load
function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shift(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
  return `rgb(${c(n >> 16)},${c((n >> 8) & 255)},${c(n & 255)})`;
}

// Lay granules on a jittered grid inside each state, plus a few strays along the coast and borders.
function buildGranules() {
  const ctx = document.createElement("canvas").getContext("2d");
  const states = india.locations.map((l) => ({ id: l.id, path: new Path2D(l.path) }));
  const stateAt = (x, y) => states.find((s) => ctx.isPointInPath(s.path, x, y));
  const rand = rng(42);
  const out = [];

  for (let y = STEP / 2; y < VH; y += STEP) {
    for (let x = STEP / 2; x < VW; x += STEP) {
      const px = x + (rand() - 0.5) * STEP * 0.5;
      const py = y + (rand() - 0.5) * STEP * 0.5;
      const s = stateAt(px, py);
      const rot = (rand() - 0.5) * 1.1;
      const size = STEP * (0.82 + rand() * 0.22);
      const tone = (rand() - 0.5) * 0.12;
      if (s) {
        out.push({ x: px, y: py, rot, size, tone, shade: shadeOf[s.id] || "orange" });
        continue;
      }
      // strays: only just outside the border, and only some of them
      if (rand() > 0.14) continue;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
        const n = stateAt(px + dx * STEP * 1.8, py + dy * STEP * 1.8);
        if (n) {
          out.push({ x: px, y: py, rot, size: size * 0.8, tone, shade: shadeOf[n.id] || "orange" });
          break;
        }
      }
    }
  }
  // reveal order: north to south with a little scatter
  out.forEach((g) => (g.order = g.y / VH + rand() * 0.18));
  return out.sort((a, b) => a.order - b.order);
}

function drawGranule(ctx, g, k) {
  const s = g.size * k;
  const r = s * 0.26;
  const base = SHADES[g.shade];
  ctx.save();
  ctx.translate(g.x * k, g.y * k);
  ctx.rotate(g.rot);
  // drop shadow
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.beginPath();
  ctx.roundRect(-s / 2 + s * 0.14, -s / 2 + s * 0.2, s, s, r);
  ctx.fill();
  // side face
  ctx.fillStyle = shift(base, -0.22 + g.tone);
  ctx.beginPath();
  ctx.roundRect(-s / 2 + s * 0.07, -s / 2 + s * 0.1, s, s, r);
  ctx.fill();
  // top face with a soft highlight from the upper-left
  const grad = ctx.createLinearGradient(-s / 2, -s / 2, s / 2, s / 2);
  grad.addColorStop(0, shift(base, 0.16 + g.tone));
  grad.addColorStop(1, shift(base, -0.04 + g.tone));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(-s / 2, -s / 2, s, s, r);
  ctx.fill();
  ctx.restore();
}

export default function PolymerMap({ className = "" }) {
  const canvas = useRef(null);

  useEffect(() => {
    const el = canvas.current;
    const granules = buildGranules();
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let shown = 0; // granules drawn so far
    let raf = 0;
    let started = false;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = el.clientWidth;
      el.width = Math.round(w * dpr);
      el.height = Math.round(((w * VH) / VW) * dpr);
      const ctx = el.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { ctx, k: w / VW };
    };

    let { ctx, k } = setup();
    const drawUpTo = (n) => {
      for (; shown < n; shown++) drawGranule(ctx, granules[shown], k);
    };

    // pour the granules in over ~1.6s the first time the map scrolls into view
    const play = () => {
      if (started) return;
      started = true;
      if (calm) return drawUpTo(granules.length);
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1600);
        drawUpTo(Math.floor(granules.length * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((e) => e[0].isIntersecting && play(), { threshold: 0.2 });
    io.observe(el);

    // on resize, redraw whatever has been revealed so far at the new size
    const ro = new ResizeObserver(() => {
      const n = shown;
      ({ ctx, k } = setup());
      shown = 0;
      drawUpTo(n);
    });
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      role="img"
      aria-label="Map of India made of PC, ABS and PBT granules"
      className={`block h-auto w-full ${className}`}
      style={{ aspectRatio: `${VW} / ${VH}` }}
    />
  );
}
