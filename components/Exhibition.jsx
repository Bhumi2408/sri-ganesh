"use client";
import { useState } from "react";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";

// Compressed copies live in /public/exhibition (H.264 CRF 28, 96k audio, faststart).
export const exhibitionVideos = [
  { src: "/exhibition/video1.mp4", poster: "/exhibition/video1-poster.webp", portrait: true },
  { src: "/exhibition/video2.mp4", poster: "/exhibition/video2-poster.webp", portrait: true },
  { src: "/exhibition/video4.mp4", poster: "/exhibition/video4-poster.webp", portrait: true },
  { src: "/exhibition/video5.mp4", poster: "/exhibition/video5-poster.webp", portrait: true },
  { src: "/exhibition/video3.mp4", poster: "/exhibition/video3-poster.webp", portrait: false },
  { src: "/exhibition/video6.mp4", poster: "/exhibition/video6-poster.webp", portrait: false },
];

export const exhibitionImages = [
  { src: "/exhibition/image1.webp", alt: "Shri Ganesh Polymer exhibition booth — corner view" },
  { src: "/exhibition/image2.webp", alt: "Shri Ganesh Polymer exhibition booth — front view" },
];

export function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{children}</span>
    </div>
  );
}

// Shows only the poster until clicked, so no video bytes load with the page.
export function VideoCard({ src, poster, portrait, label }) {
  const [playing, setPlaying] = useState(false);

  // keep a single video playing at a time
  const pauseOthers = (e) => {
    document.querySelectorAll("video").forEach((v) => v !== e.currentTarget && v.pause());
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#0b1f4d] shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)] ring-1 ring-slate-200 ${
        portrait ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          onPlay={pauseOthers}
          className="h-full w-full bg-black object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${label}`}
          className="absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#0b1f4d]/70 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#1e5eff] shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
          <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}

// Homepage teaser: three portrait clips + link to the full page.
export default function Exhibition() {
  const clips = exhibitionVideos.filter((v) => v.portrait).slice(0, 3);

  return (
    <section id="exhibition" className="relative overflow-hidden bg-[#f6f8fb] py-20 font-label sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div aria-hidden="true" className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#7cc242]/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Exhibitions</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
                Meet us on the{" "}
                <em className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text font-normal text-transparent">
                  show floor.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <div className="lg:ml-auto lg:max-w-md">
              <p className="leading-relaxed text-slate-600">
                Moments from our booth at industry exhibitions — showcasing PC, ABS and PBT granules to manufacturers
                across India.
              </p>
              <Link
                href="/exhibition"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5eff] transition hover:gap-2.5"
              >
                View all exhibition videos <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {clips.map((v, i) => (
            <Reveal key={v.src} i={i}>
              <VideoCard {...v} label={`Exhibition clip 0${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
