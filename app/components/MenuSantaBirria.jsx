"use client";
import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import menuData from "../data/menu";

const currency = (n, symbol = "$") => `${symbol}${Number(n).toFixed(2)}`;

export default function MenuSantaBirria() {
  const [q, setQ] = useState("");
  const [data] = useState(menuData);
  const [symbol, setSymbol] = useState("$");

  const filtered = useMemo(() => {
    if (!q.trim()) return data;
    const s = q.toLowerCase();
    return data
      .map(c => ({
        ...c,
        items: c.items.filter(
          i =>
            i.name.toLowerCase().includes(s) ||
            i.desc.toLowerCase().includes(s) ||
            i.tags?.some(t => t.toLowerCase().includes(s))
        )
      }))
      .filter(c => c.items.length > 0);
  }, [q, data]);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-2xl font-bold">Menú</span>
        <label className="ml-auto flex items-center gap-2 rounded-lg border bg-white px-3 py-1.5 text-sm">
          <Search className="h-4 w-4" />
          <input
            placeholder="Buscar..."
            value={q}
            onChange={e => setQ(e.target.value)}
            className="outline-none"
          />
        </label>
        <select
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
          className="rounded-lg border bg-white px-3 py-1.5 text-sm"
        >
          <option value="$">USD ($)</option>
          <option value="S/">PEN (S/)</option>
          <option value="€">EUR (€)</option>
          <option value="$MX">MXN ($MX)</option>
        </select>
      </div>

      {filtered.map(cat => (
        <div key={cat.id} className="mb-10">
          <h2 className="text-xl font-semibold">{cat.title}</h2>
          {cat.description && (
            <p className="text-sm text-neutral-600">{cat.description}</p>
          )}
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map(item => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border bg-white"
              >
                <div className="aspect-[4/3] bg-neutral-100">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                  <div className="mt-3 text-right text-xl font-bold">
                    {currency(item.price, symbol)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
