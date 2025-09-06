// components/Hero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Flame, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero({
  title = "Santa Birria",
  subtitle = "Cocina mexicana no repetitiva — QuesaTacos, birria y combos al estilo KFC, pero con alma birriera.",
  ctaPrimary = { href: "/pedido", label: "Pedir ahora" },
  ctaSecondary = { href: "/menu", label: "Ver menú" },
  bgImage = "/images/hero.jpg", // reemplaza por tu imagen
  videoSrc = "", // opcional: "/videos/hero.mp4"
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative isolate">
      {/* Fondo: video o imagen */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            poster={bgImage}
          />
        ) : (
          <Image
            src={bgImage}
            alt="Santa Birria Hero"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Capa de estilo: degradé bordó + viñeta */}
        <div className="absolute inset-0 bg-gradient-to-b from-birria-bordo/70 via-birria-bordo/70 to-[#000]/80" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,.6)]" />

        {/* Textura opcional */}
        <div className="absolute inset-0 bg-[url('/images/hero-texture.png')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[78vh] lg:min-h-[86vh] flex items-center">
          <div className="w-full max-w-3xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-4 flex flex-wrap gap-2"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-kfc-red/90 px-3 py-1 text-xs font-bold text-kfc-white shadow-kfc">
                <Flame size={14} />
                Top Ventas: QuesaTacos
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-birria-madera/50 bg-birria-bordo/60 px-3 py-1 text-xs font-semibold text-birria-crema">
                <Sparkles size={14} />
                Combos con aguas frescas
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
              className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-tight text-kfc-white drop-shadow"
            >
              {title}
              <span className="block text-birria-crema/90 text-xl sm:text-2xl lg:text-3xl mt-2 font-body">
                {subtitle}
              </span>
            </motion.h1>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-kfc-red px-6 py-3 font-semibold text-kfc-white shadow-kfc transition-colors hover:bg-birria-acento"
              >
                {ctaPrimary.label}
                <ChevronRight size={18} />
              </Link>
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-birria-madera/70 bg-birria-bordo/60 px-6 py-3 font-semibold text-birria-crema transition-colors hover:bg-birria-madera/20 hover:text-kfc-white"
              >
                {ctaSecondary.label}
              </Link>

              {/* Chip de ubicación (social proof) */}
              <span className="ml-1 inline-flex items-center gap-1 rounded-xl bg-black/30 px-3 py-2 text-xs font-medium text-birria-crema">
                <MapPin size={14} /> Santo Domingo — Ecuador
              </span>
            </motion.div>

            {/* Highlights / bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-birria-crema/90"
            >
              {[
                "Birria real, consomé de verdad",
                "Combos tipo KFC, pero con aguas frescas",
                "Listos para llevar o comer aquí",
              ].map((text, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-birria-madera/40 bg-birria-bordo/40 px-3 py-2 backdrop-blur-sm"
                >
                  {text}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Mockup de producto al lado (desktop) */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, type: "spring", stiffness: 120 }}
            className="hidden lg:block ml-auto w-[40%] max-w-[520px] relative"
          >
            {/* Tarjeta flotante con imagen de producto */}
            <div className="relative rounded-3xl border border-birria-madera/50 bg-black/30 p-3 backdrop-blur-sm shadow-birria">
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/menu/quesatacos.jpg" // reemplaza por tu hero product
                  alt="QuesaTacos Santa Birria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="font-headline text-kfc-white text-xl">
                    QuesaTacos
                  </h3>
                  <p className="text-birria-crema/80 text-sm">
                    Con consomé — 🔥 Top Ventas
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-kfc-red font-bold text-lg">$6.50</p>
                  <Link
                    href="/pedido"
                    className="text-sm font-semibold text-kfc-white/90 hover:text-kfc-white"
                  >
                    Ordenar →
                  </Link>
                </div>
              </div>
            </div>

            {/* Glow decorativo */}
            {mounted && (
              <div className="pointer-events-none absolute -z-10 right-[-10%] top-[10%] h-64 w-64 rounded-full bg-kfc-red/30 blur-[80px]" />
            )}
          </motion.aside>
        </div>
      </div>

      {/* Ola / divider inferior */}
      <svg
        className="block w-full text-[#0b0b0b]"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,26.7C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
        />
      </svg>
    </section>
  );
}
