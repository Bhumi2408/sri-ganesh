"use client";
import { useEffect, useRef } from "react";

// A 3D cloud of glossy polymer pellets that morphs between shapes —
// one per material — rotates slowly and tilts toward the cursor.
const COUNT = 650;

const SHAPES = {
  // PC — sphere (Fibonacci distribution)
  pc: (i, n) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = i * Math.PI * (3 - Math.sqrt(5));
    return [Math.cos(th) * r, y, Math.sin(th) * r];
  },
  // ABS — torus
  abs: (i, n) => {
    const u = (i / n) * Math.PI * 2 * 1;
    const v = (i * 0.618034 * Math.PI * 2 * 21) % (Math.PI * 2);
    const R = 0.72, r = 0.3;
    return [(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v) * 1.1, (R + r * Math.cos(v)) * Math.sin(u)];
  },
  // PBT — double helix
  pbt: (i, n) => {
    const strand = i % 3;
    const t = (i / n) * 2 - 1;
    const a = t * Math.PI * 3.2;
    if (strand === 2) {
      // rungs between the strands
      const k = ((i * 0.37) % 1) * 2 - 1;
      return [Math.cos(a) * 0.55 * k, t * 1.05, Math.sin(a) * 0.55 * k];
    }
    const off = strand * Math.PI;
    return [Math.cos(a + off) * 0.55, t * 1.05, Math.sin(a + off) * 0.55];
  },
};

// Pre-render one glossy pellet sprite per colour (much cheaper than gradients per frame)
function makeSprite(color) {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(s * 0.36, s * 0.34, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, "#ffffff");
  grad.addColorStop(0.22, color);
  grad.addColorStop(0.85, color);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
  g.fill();
  // faint rim so pale pellets still read on light backgrounds
  g.strokeStyle = "rgba(15,23,42,0.28)";
  g.lineWidth = 2;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2 - 5, 0, Math.PI * 2);
  g.stroke();
  return c;
}

export default function PolymerCore({ material = "pc", palettes }) {
  const ref = useRef(null);
  const stateRef = useRef({ material, palettes });
  stateRef.current = { material, palettes };

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf;
    let running = true;

    const sprites = {};
    Object.entries(stateRef.current.palettes).forEach(([k, cols]) => {
      sprites[k] = cols.map(makeSprite);
    });

    const pts = Array.from({ length: COUNT }, (_, i) => {
      const [x, y, z] = SHAPES.pc(i, COUNT);
      return {
        x, y, z,
        size: 0.6 + Math.random() * 0.9,
        ci: Math.floor(Math.random() * 4),
        jitter: Math.random() * Math.PI * 2,
        // colour cross-fade: previous material → current
        from: "pc", to: "pc", mix: 1,
        delay: Math.random() * 0.35,
      };
    });

    let current = "pc";
    let morphT = 1;

    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
    let rot = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      tilt.tx = ((e.clientY - r.top) / r.height - 0.5) * 0.9;
      tilt.ty = ((e.clientX - r.left) / r.width - 0.5) * 1.2;
    };

    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const order = new Array(COUNT);
    let time = 0;

    const draw = () => {
      if (!running) return;
      const { material: target } = stateRef.current;

      if (target !== current) {
        pts.forEach((p, i) => {
          const [tx, ty, tz] = SHAPES[target](i, COUNT);
          p.sx = p.x; p.sy = p.y; p.sz = p.z;
          p.tx = tx; p.ty = ty; p.tz = tz;
          p.from = p.mix >= 1 ? p.to : p.from;
          p.to = target;
          p.mix = 0;
        });
        current = target;
        morphT = 0;
      }

      if (morphT < 1) morphT = Math.min(1, morphT + (reduced ? 1 : 0.012));
      if (!reduced) {
        time += 0.016;
        rot += 0.0035;
      }
      tilt.x += (tilt.tx - tilt.x) * 0.05;
      tilt.y += (tilt.ty - tilt.y) * 0.05;

      ctx.clearRect(0, 0, w, h);
      const scale = Math.min(w, h) * 0.36;
      const cx = w / 2, cy = h / 2;
      const ay = rot + tilt.y, ax = -0.35 + tilt.x;
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const cosX = Math.cos(ax), sinX = Math.sin(ax);

      for (let i = 0; i < COUNT; i++) {
        const p = pts[i];
        if (p.mix < 1) {
          const local = Math.max(0, Math.min(1, (morphT - p.delay) / (1 - 0.35)));
          const e = ease(local);
          p.x = p.sx + (p.tx - p.sx) * e;
          p.y = p.sy + (p.ty - p.sy) * e;
          p.z = p.sz + (p.tz - p.sz) * e;
          p.mix = local;
        }
        // gentle breathing
        const b = 1 + Math.sin(time * 1.4 + p.jitter) * 0.018;
        const x = p.x * b, y = p.y * b, z = p.z * b;
        // rotate Y then X
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const persp = 2.6 / (2.6 + z2);
        p.px = cx + x1 * scale * persp;
        p.py = cy + y1 * scale * persp;
        p.pz = z2;
        p.ps = persp;
        order[i] = p;
      }

      order.sort((a, b) => b.pz - a.pz);

      for (let i = 0; i < COUNT; i++) {
        const p = order[i];
        const depth = (1 - p.pz) / 2; // 0 back → 1 front
        const r = (2.2 + p.size * 3.2) * p.ps * (Math.min(w, h) / 520);
        const alpha = 0.35 + depth * 0.65;
        const fromS = sprites[p.from][p.ci];
        const toS = sprites[p.to][p.ci];
        if (p.mix < 1) {
          ctx.globalAlpha = alpha * (1 - p.mix);
          ctx.drawImage(fromS, p.px - r, p.py - r, r * 2, r * 2);
        }
        ctx.globalAlpha = alpha * p.mix;
        ctx.drawImage(toS, p.px - r, p.py - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    // pause when off-screen
    const io = new IntersectionObserver(([entry]) => {
      const vis = entry.isIntersecting;
      if (vis && !running) { running = true; draw(); }
      else if (!vis) { running = false; cancelAnimationFrame(raf); }
    });

    resize();
    draw();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
