// components/ProductCard.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative bg-birria-bordo/95 border border-birria-madera rounded-2xl shadow-birria overflow-hidden flex flex-col"
    >
      {/* Imagen */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.tags && (
          <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-kfc-red text-kfc-white text-xs font-bold px-2 py-1 rounded-md shadow-kfc"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 p-4 text-birria-crema">
        <div>
          <h3 className="font-headline text-xl text-kfc-white group-hover:text-kfc-red transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-body opacity-80">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between"
