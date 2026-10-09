"use client";
import Image from "next/image";
import { Reveal } from "./ui";
import { Eyebrow, VideoCard, MobileCarousel, exhibitionImages, exhibitionVideos } from "./Exhibition";

export default function ExhibitionPage() {
  const wide = exhibitionVideos.filter((v) => !v.portrait);
  const tall = exhibitionVideos.filter((v) => v.portrait);

  return (
    <section className="relative bg-white pb-20 font-label sm:pb-28">
      <div className="mx-auto max-w-7xl px-5">
        {/* ---------- booth ---------- */}
        <Reveal>
          <Eyebrow>Our booth</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {exhibitionImages.map((img, i) => (
            <Reveal key={img.src} i={i}>
              <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={900}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full transition duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---------- highlights ---------- */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <Eyebrow>Highlights</Eyebrow>
          </Reveal>
          <Reveal i={1} className="mt-8">
            <MobileCarousel
              items={wide}
              itemClass="w-[88%]"
              gridClass="md:grid-cols-2"
              render={(v, i) => <VideoCard {...v} label={`Highlight 0${i + 1}`} />}
            />
          </Reveal>
        </div>

        {/* ---------- clips ---------- */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <Eyebrow>From the floor</Eyebrow>
          </Reveal>
          <Reveal i={1} className="mt-8">
            <MobileCarousel
              items={tall}
              gridClass="sm:grid-cols-2 lg:grid-cols-4"
              render={(v, i) => <VideoCard {...v} label={`Clip 0${i + 1}`} />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
