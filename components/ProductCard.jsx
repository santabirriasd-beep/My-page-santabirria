"use client";
import Image from "next/image";

export default function ProductCard({ item, onAdd }) {
  return (
    <div className="rounded-2xl bg-birria-card border border-white/10 overflow-hidden hover:translate-y-[-2px] duration-200 shadow-soft">
      <div className="relative aspect-[4/3]">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
        {item.badge && (
          <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full text-xs bg-birria-red">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-semibold">{item.name}</h4>
          <span className="text-birria-gold font-semibold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-white/70 mt-1">{item.description}</p>
        <button
          onClick={() => onAdd(item)}
          className="mt-3 w-full rounded-lg bg-birria-red hover:bg-birria-red2 py-2 font-medium"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
