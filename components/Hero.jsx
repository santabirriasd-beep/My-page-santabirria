"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <div className="relative rounded-3xl overflow-hidden shadow-soft border border-white/10">
        <Image
          src="/brand/hero.jpg"
          alt="Santa Birria"
          width={1600}
          height={900}
          className="w-full h-[44vh] md:h-[54vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-birria-bg/70 via-birria-bg/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Bienvenido a <span className="text-birria-red drop-shadow">Santa Birria</span>
          </h1>
          <p className="mt-3 text-white/85 max-w-2xl">
            Birria, tacos, quesabirria y antojos 🔥
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-5 py-3 rounded-xl bg-birria-red hover:bg-birria-red2">Ver menú</a>
            <a
              href="https://wa.me/593984755209?text=Hola%20Santa%20Birria!%20Quiero%20hacer%20un%20pedido"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
