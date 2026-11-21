"use client";

import {
  Package,
  ShieldCheck,
  Palette,
  CheckCircle2,
} from "lucide-react";

const PackagingSection = () => {
  const features = [
    "Premium quality packaging",
    "Custom branding and labelling",
    "Multiple polymer grade options",
    "Strong and durable design",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          {/* on mobile its parts join the flex column so the bag image sits above the feature points */}
          <div className="contents lg:block">
            <div className="order-1">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <Package className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Premium Packaging
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
              Packaging Designed for
              <span className="block text-blue-700">
                Premium Polymers
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Our packaging protects your granules during transport and storage,
              while giving a professional and consistent brand identity.
            </p>
            </div>

            <div className="order-3">
            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2 lg:mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Highlight Cards */}
            <div className="mt-9 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Reliable Protection
                  </p>
                  <p className="text-xs text-slate-500">
                    Built for safe handling
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <Palette className="h-5 w-5 text-green-700" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Custom Branding
                  </p>
                  <p className="text-xs text-slate-500">
                    Professional appearance
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative order-2">
            {/* Decorative Shape */}
            <div className="absolute -inset-5 hidden rounded-[2rem] lg:block bg-gradient-to-br from-blue-100 via-white to-green-100 opacity-80 blur-xl" />

            <div className="relative overflow-hidden bg-white lg:rounded-[2rem] lg:border lg:border-slate-200 lg:p-4 lg:shadow-2xl">
              {/* bag print artwork */}
              <div className="relative overflow-hidden bg-white lg:rounded-[1.5rem]">
                <img
                  src="/katta.jpeg"
                  alt="Shri Ganesh Polymer packaging bag design for PC, ABS and PBT granules"
                  width={1600}
                  height={1150}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </div>

              {/* Name below video */}
              <div className="pt-4">
                <div className="bg-slate-50 px-4 py-4 text-center lg:rounded-xl">
                  <p className="text-lg font-bold tracking-wide text-slate-900 sm:text-xl">
                    Shri Ganesh <span className="text-blue-700">Polymer</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-5 -top-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Packaging
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                Premium Quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;