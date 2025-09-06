"use client";
import Image from "next/image";
import Link from "next/link";

const WA_URL =
  "https://wa.me/593984755209?text=Hola%20Santa%20Birria!%20Quiero%20hacer%20un%20pedido%20🍖🌮";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white">
      <Hero />
      <section id="menu" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Nuestro Menú</h2>
        <p className="text-white/70 mt-2">Próximamente el catálogo interactivo.</p>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <Image src="/brand/hero.jpg" alt="Santa Birria" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-neutral-900/40 to-neutral-950/95" />
      <GlowDecor />
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex items-center">
        <div className="w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur">
            <span className="text-xl">🌮</span>
            <span className="text-sm tracking-wide text-white/90">Sabor auténtico · Entrega rápida</span>
          </div>
          <div className="mt-7 flex items-center justify-center md:justify-start gap-5">
            <div className="relative size-20 md:size-24 rounded-2xl bg-white/90 p-1 shadow-2xl ring-4 ring-red-600/40">
              <Image src="/brand/logo.png" alt="Logo Santa Birria" fill className="object-contain rounded-xl" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Bienvenido a{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(255,77,77,0.35)]">
                Santa Birria
              </span>
            </h1>
          </div>
          <p className="max-w-2xl mt-5 text-lg md:text-xl text-white/85 mx-auto md:mx-0">
            Tacos, quesabirrias y antojos con ese consomé que enamora.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 hover:bg-red-500 px-7 py-3 text-lg font-semibold shadow-[0_10px_30px_-5px_rgba(239,68,68,0.7)] transition"
            >
              Hacer Pedido <span>🔥</span>
            </a>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur px-7 py-3 text-lg font-medium"
            >
              Ver Menú
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-white/70 justify-center md:justify-start">
            <div className="relative h-8 w-8">
              <Image src="/brand/tiktok.png" alt="TikTok" fill className="object-contain opacity-90" />
            </div>
            <div className="relative h-8 w-8">
              <Image src="/brand/instagram.png" alt="Instagram" fill className="object-contain opacity-90" />
            </div>
            <span className="text-sm">Síguenos para promos y combos</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <span className="animate-bounce text-white/80">▾</span>
      </div>
    </section>
  );
}

function GlowDecor() {
  return (
    <>
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-red-600/25 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-16 h-56 w-56 rounded-full bg-amber-400/25 blur-3xl animate-[pulse_2.5s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-red-500/20 blur-2xl" />
    </>
  );
}
