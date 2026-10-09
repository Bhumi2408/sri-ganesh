"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Droplets, Syringe, Hammer, Ruler, Gauge, Eye, Activity, FlaskConical } from "lucide-react";
import { Reveal } from "./ui";

// Compressed from _originals/SGP_Lab.mp4 (110 MB) → 1080p ~22 MB + 720p ~9 MB for phones.
const SRC_HD = "/lab-video/sgp-lab.mp4";
const SRC_SD = "/lab-video/sgp-lab-720.mp4";
const POSTER = "/lab-video/sgp-lab-poster.webp";

// chapter start times (s) match what is on screen in the video
const chapters = [
  { t: 0, icon: Droplets, title: "Colour sampling", text: "Material is dried and loaded for a colour trial." },
  { t: 9, icon: Syringe, title: "Specimen moulding", text: "Test pieces moulded on our injection machine." },
  { t: 19, icon: Hammer, title: "Impact testing", text: "IZOD / Charpy impact strength checked." },
  { t: 25, icon: Ruler, title: "Specimen inspection", text: "Dimensions measured before each test." },
  { t: 31, icon: Gauge, title: "Melt flow index", text: "Flow behaviour verified for moulding." },
  { t: 37, icon: Eye, title: "Colour check", text: "Shade confirmed with a spectrophotometer." },
  { t: 41, icon: Activity, title: "Tensile testing", text: "Tensile strength and elongation measured." },
];

const fmt = (s) => `0:${String(Math.floor(s)).padStart(2, "0")}`;

export default function LabVideo() {
  const wrap = useRef(null);
  const video = useRef(null);
  const [src, setSrc] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(45);

  // phones get the 720p file; only the chosen file is downloaded
  useEffect(() => {
    setSrc(window.matchMedia("(min-width: 768px)").matches ? SRC_HD : SRC_SD);
  }, []);

  // play while on screen, pause when scrolled away
  useEffect(() => {
    const v = video.current;
    if (!v || !src) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  const active = chapters.reduce((a, c, i) => (time >= c.t ? i : a), 0);

  // on phones the chapter list is a horizontal strip — keep the playing chapter in view
  const list = useRef(null);
  useEffect(() => {
    const ol = list.current;
    if (!ol || ol.scrollWidth <= ol.clientWidth) return;
    const li = ol.children[active];
    if (li) ol.scrollTo({ left: li.offsetLeft - 4, behavior: "smooth" });
  }, [active]);

  const seek = (t) => {
    const v = video.current;
    if (!v) return;
    v.currentTime = t;
    v.play().catch(() => {});
  };
  const toggle = () => {
    const v = video.current;
    if (!v) return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  };
  const toggleMute = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  const full = () => {
    const v = video.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iOS Safari
  };

  return (
    <section id="lab" ref={wrap} className="relative overflow-hidden border-t border-slate-200 bg-white py-16 font-label text-[#0b1530] sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,18,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.05) 1px, transparent 1px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* ---------- header ---------- */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Inside our lab</span>
              </div>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Tested in-house,{" "}
                <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">batch after batch.</span>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-4 leading-relaxed text-slate-600">
                Watch a sample travel through our polymer testing lab — from colour trial to impact, flow and tensile
                tests — before the granules are cleared for dispatch.
              </p>
            </Reveal>
          </div>
          <Reveal i={2}>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.35)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#7cc242]/15 text-[#3f9a1f]">
                <FlaskConical className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-2xl font-semibold">8</span>
                <span className="block text-xs text-slate-500">lab test instruments</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* ---------- player + chapters ---------- */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.65fr_1fr] lg:gap-8">
          <Reveal className="min-w-0">
            <div className="group relative overflow-hidden rounded-3xl bg-black shadow-[0_40px_80px_-40px_rgba(15,23,42,0.55)] ring-1 ring-slate-200">
              <video
                ref={video}
                src={src || undefined}
                poster={POSTER}
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDur(e.currentTarget.duration || 45)}
                onClick={toggle}
                aria-label="Shri Ganesh Polymer testing laboratory walkthrough"
                className="block aspect-video w-full cursor-pointer object-cover"
              />

              {/* big play button while paused */}
              {!playing && (
                <button
                  onClick={toggle}
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#0b1f4d] shadow-2xl transition hover:scale-105"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
                  <Play className="relative ml-1 h-8 w-8 fill-current" />
                </button>
              )}

              {/* now-playing chip */}
              <motion.div
                key={active}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-[#071330]/80 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-white backdrop-blur sm:left-4 sm:top-4 sm:text-sm"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#7cc242] text-[#071330] sm:h-7 sm:w-7">
                  {(() => {
                    const I = chapters[active].icon;
                    return <I className="h-3.5 w-3.5" />;
                  })()}
                </span>
                {chapters[active].title}
              </motion.div>

              {/* control bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-2 pt-8 sm:px-5 sm:pb-4 sm:pt-10">
                {/* chapter-segmented progress */}
                <div className="flex gap-1">
                  {chapters.map((c, i) => {
                    const end = chapters[i + 1]?.t ?? dur;
                    const fill = Math.min(1, Math.max(0, (time - c.t) / (end - c.t)));
                    return (
                      <button
                        key={c.t}
                        onClick={() => seek(c.t)}
                        aria-label={`Jump to ${c.title}`}
                        className="group/seg relative h-4 flex-1"
                        style={{ flexGrow: end - c.t }}
                      >
                        <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition-all group-hover/seg:h-1.5">
                          <span className="block h-full rounded-full bg-[#8be04e]" style={{ width: `${fill * 100}%` }} />
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 flex items-center gap-2 text-white">
                  <button onClick={toggle} aria-label={playing ? "Pause" : "Play"} className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15">
                    {playing ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                  </button>
                  <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15">
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <span className="text-xs tabular-nums text-white/75">
                    {fmt(time)} / {fmt(dur)}
                  </span>
                  <button onClick={full} aria-label="Full screen" className="ml-auto grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* chapter list */}
          <Reveal i={1} className="min-w-0">
            <ol ref={list} className="relative flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
              {chapters.map((c, i) => {
                const on = i === active;
                const done = i < active;
                return (
                  <li key={c.t} className="w-60 shrink-0 lg:w-auto">
                    <button
                      onClick={() => seek(c.t)}
                      className={`group relative flex w-full items-start gap-4 rounded-2xl p-3.5 text-left transition lg:p-3 ${
                        on ? "bg-white shadow-[0_16px_32px_-24px_rgba(15,23,42,0.4)] ring-1 ring-slate-200" : "hover:bg-white/70"
                      }`}
                    >
                      {on && (
                        <motion.span
                          layoutId="lab-chapter"
                          className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-[#4caf27]"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        />
                      )}
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition ${
                          on ? "bg-[#1e5eff] text-white shadow-lg shadow-[#1e5eff]/30" : done ? "bg-[#eef4ff] text-[#1e5eff]" : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <c.icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className={`text-sm font-semibold ${on ? "text-[#0b1530]" : "text-slate-700"}`}>{c.title}</span>
                          <span className="text-[11px] tabular-nums text-slate-400">{fmt(c.t)}</span>
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500">{c.text}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
