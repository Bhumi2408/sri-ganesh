"use client";
import { useEffect, useRef } from "react";

// Animated "flowing granules" — colored pellets riding a sine-wave stream,
// echoing the brochure cover.
const COLORS = ["#3b82f6", "#60a5fa", "#e5e7eb", "#c8963e", "#7cc242", "#f5f5f4"];

export default function GranuleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf;
    let particles = [];
    const mouse = { x: -9999, y: -9999 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor(w / 5), 320);
      particles = Array.from({ length: count }, () => ({
        t: Math.random() * w,
        lane: (Math.random() - 0.5) * 110,
        speed: 0.4 + Math.random() * 1.2,
        r: 2 + Math.random() * 4.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        stream: Math.random() < 0.5 ? 0 : 1,
        ox: 0,
        oy: 0,
      }));
    };

    const waveY = (x, time, stream) => {
      const base = stream === 0 ? h * 0.62 : h * 0.72;
      const amp = stream === 0 ? 70 : 55;
      return base + Math.sin(x * 0.004 + time + stream * 1.8) * amp;
    };

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += reduced ? 0 : 0.008;

      // glowing ribbons
      [0, 1].forEach((s) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 10) ctx.lineTo(x, waveY(x, time, s));
        ctx.strokeStyle = s === 0 ? "rgba(124,194,66,0.25)" : "rgba(30,94,255,0.25)";
        ctx.lineWidth = 120;
        ctx.filter = "blur(40px)";
        ctx.stroke();
        ctx.filter = "none";
      });

      for (const p of particles) {
        if (!reduced) p.t += p.speed;
        if (p.t > w + 20) p.t = -20;
        const x = p.t;
        const y = waveY(x, time, p.stream) + p.lane * (0.6 + 0.4 * Math.sin(x * 0.01));

        // mouse repel
        const dx = x + p.ox - mouse.x;
        const dy = y + p.oy - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 110) {
          p.ox += (dx / d) * 3;
          p.oy += (dy / d) * 3;
        }
        p.ox *= 0.94;
        p.oy *= 0.94;

        const px = x + p.ox;
        const py = y + p.oy;
        const g = ctx.createRadialGradient(px - p.r / 3, py - p.r / 3, 0, px, py, p.r);
        g.addColorStop(0, "#ffffff");
        g.addColorStop(0.35, p.color);
        g.addColorStop(1, "rgba(0,0,0,0.6)");
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
