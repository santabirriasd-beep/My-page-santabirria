"use client";
import ProductCard from "./ProductCard";

export default function Category({ title, items, onAdd }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <ProductCard key={it.id} item={it} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
