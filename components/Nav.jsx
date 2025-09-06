"use client";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-birria-bg/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <Link href="#" className="flex items-center gap-3">
          <Image src="/brand/logo.png" alt="Santa Birria" width={36} height={36} className="rounded-full" />
          <span className="font-semibold">Santa Birria</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <a href="#menu" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10">Menú</a>
          <a href="#promos" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10">Promos</a>
          <a href="#ubicacion" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10">Ubicación</a>
          <a
            href="https://wa.me/593984755209?text=Hola%20Santa%20Birria!%20Quiero%20hacer%20un%20pedido"
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg bg-birria-red hover:bg-birria-red2 font-medium"
          >
            Hacer pedido
          </a>
        </div>
      </nav>
    </header>
  );
}
