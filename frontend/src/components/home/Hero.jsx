// src/components/Hero.jsx
import React from "react";
import { Headphones } from "lucide-react"; // ganti ikon bila perlu

const Hero = () => {
  return (
    <section className="bg-[#F9EFE2] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* ===== AREA 1 – JUDUL ===== */}
        <div className="relative">
          {/* TK sebagai background */}
          <span className="pointer-events-none absolute -top-24 -left-6 -z-10 select-none font-logo text-[300px] leading-none text-[#FF5126]/35 md:-top-28 md:text-[340px]">
            TK
          </span>

          <h1 className="text-6xl font-extrabold tracking-tight text-[#FF5126] md:text-7xl">
            TIKET&nbsp;KARYA
          </h1>
        </div>

        {/* ===== AREA 2 – KONTEN BARIS ===== */}
        <div className="mt-14 flex flex-col gap-10 lg:flex-row">
          {/* —— KIRI —— */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-7 text-gray-900">
              Discover creative workshops near you — from hands‑on pottery to
              soulful music and textile arts. Join a growing community of
              makers, artists, and curious minds looking to learn, connect, and
              create together. Whether you're trying something new or deepening
              your skills, TiketKarya makes it easy to find, book, and enjoy
              creative experiences that spark inspiration.
            </p>

            <a
              href="#workshops"
              className="mt-6 inline-block text-base font-medium underline"
            >
              Find Workshops
            </a>
          </div>

          {/* —— KANAN —— */}
          <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/cc19c8fb85a142d1a49f6d5b2b38adc8/cc2d429b2bc30faada8a05a4ab119dfe6fd1f9b7?placeholderIfAbsent=true"
              alt="Pottery workshop"
              className="w-72 rounded-md object-cover shadow-lg md:w-96"
            />

            <button className="mt-6 flex items-center gap-2 rounded-full bg-[#FF5126] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#ff693f]">
              <Headphones size={18} />
              Customer Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
