"use client";
import { useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import CartBar from "@/components/CartBar";
import Image from "next/image";
import { categories } from "@/data/menu";

export default function Page() {
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    setCart((curr) => {
      const found = curr.find((i) => i.id === item.id);
      if (found) return curr.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...curr, { ...item, qty: 1 }];
    });
  };

  const onClear = () => setCart([]);

  const onCheckout = () => {
    const text = cart
      .map((i) => `• ${i.name} x${i.qty} — $${(i.qty * i.price).toFixed(2)}`)
      .join("%0A");
    const total = cart.reduce((a, b) => a + b.qty * b.price, 0);
    const msg = `Hola Santa Birria!%0AQuiero pedir:%0A${text}%0A%0ATotal: $${total.toFixed(2)}`;
    const url = `https://wa.me/593984755209?text=${msg}`;
    window.open(url, "_blank");
  };

  const flat = useMemo(() => categories.flatMap((c) => c.items), []);

  return (
    <main>
      <Nav />
      <Hero />

      <section id="promos" className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-birria-card p-6 shadow-soft">
          <h2 className="text-2xl font-bold">Recomendados</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flat.slice(0, 3).map((it) => (
              <div key={it.id} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={it.image} alt={it.name} fill className="object-cover" />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <h4 className="font-semibold">{it.name}</h4>
                  <span className="text-birria-gold font-semibold">${it.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-white/70 mt-1">{it.description}</p>
                <button
                  onClick={() => onAdd(it)}
                  className="mt-3 w-full rounded-lg bg-birria-red hover:bg-birria-red2 py-2 font-medium"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="menu">
        {categories.map((c) => (
          <Category key={c.title} title={c.title} items={c.items} onAdd={onAdd} />
        ))}
      </div>

      <section id="ubicacion" className="mx-auto max-w-7xl px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold">Estamos aquí</h2>
        <p className="text-white/70 mt-1">Visítanos o pide para llevar.</p>
        <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 shadow-soft">
          <iframe
            title="Mapa Santa Birria"
            src="https://www.google.com/maps?q=-0.2478246,-79.1584448&z=17&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-birria-card">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo.png" alt="Logo" width={36} height={36} className="rounded-full" />
            <span className="text-white/80">&copy; {new Date().getFullYear()} Santa Birria</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.tiktok.com/@santabirriasd" target="_blank" rel="noopener noreferrer">
              <Image src="/brand/tiktok.png" alt="TikTok" width={26} height={26} />
            </a>
            <a href="https://www.instagram.com/santabirriasd/" target="_blank" rel="noopener noreferrer">
              <Image src="/brand/instagram.png" alt="Instagram" width={26} height={26} />
            </a>
          </div>
        </div>
      </footer>

      <CartBar items={cart} onClear={onClear} onCheckout={onCheckout} />
    </main>
  );
}
