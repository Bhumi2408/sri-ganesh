"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Each slide has a wide desktop artwork and a tall mobile artwork.
// The banners carry their own text, so they are shown uncropped.
const slides = [
  {
    desktop: "/desktopbanner.webp",
    mobile: "/mobilebanner.webp",
    alt: "Premium quality plastic granules — PC, ABS, PBT",
  },
  {
    desktop: "/desktopbanner2.webp",
    mobile: "/mobilebanner2.webp",
    alt: "Manufacturing of engineering polymers — PC, ABS, PBT",
  },
];

const INTERVAL = 5000;

export default function BannerSlider() {
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step) => {
    setState(([i]) => [(i + step + slides.length) % slides.length, step]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative bg-[#eef2f7] pt-[67px] md:pt-[107px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="group relative overflow-hidden">
        {/* sizer keeps the height stable while slides cross-fade */}
        <div className="aspect-[1122/1402] md:aspect-[1942/809] md:max-h-[calc(100vh-107px)] md:w-full" />

        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter: (d) => ({ opacity: 0, x: d > 0 ? "6%" : "-6%", scale: 1.04 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (d) => ({ opacity: 0, x: d > 0 ? "-6%" : "6%", scale: 0.98 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              draggable={false}
              className="object-cover md:hidden"
            />
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              draggable={false}
              className="hidden object-cover md:block"
            />
          </motion.div>
        </AnimatePresence>

        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-ink shadow-lg backdrop-blur transition hover:bg-white md:grid md:opacity-0 md:group-hover:opacity-100 lg:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-ink shadow-lg backdrop-blur transition hover:bg-white md:grid md:opacity-0 md:group-hover:opacity-100 lg:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* dots with progress */}
        <div className="absolute bottom-3 right-3 z-10 flex gap-2 md:bottom-4 md:right-auto md:left-1/2 md:-translate-x-1/2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setState([i, i > index ? 1 : -1])}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`relative h-2 overflow-hidden rounded-full bg-white/50 transition-all duration-500 ${
                i === index ? "w-10" : "w-2 hover:bg-white/80"
              }`}
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: "linear" }}
                  className="absolute inset-0 origin-left rounded-full bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
