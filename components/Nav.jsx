// components/Nav.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Sun, Moon, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Combos", href: "/combos" },
  { label: "Ubicación", href: "/ubicacion" },
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Historia", href: "/nosotros#historia" },
      { label: "Filosofía", href: "/nosotros#filosofia" },
      { label: "Contacto", href: "/nosotros#contacto" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    // Cierra el menú móvil al navegar
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Sombra al hacer scroll
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Toggle dark mode (usa darkMode:"class" en tailwind.config.js)
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-birria backdrop-blur" : ""
      }`}
    >
      <nav className="bg-birria-bordo/95 dark:bg-birria-bordo text-birria-crema">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo-santa-birria.png" // reemplaza por tu logo
                  alt="Santa Birria"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-headline text-xl text-kfc-white tracking-wide">
                Santa Birria
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`px-3 py-2 rounded-xl font-body text-sm inline-flex items-center gap-1 transition-colors ${
                        isActive(link.href)
                          ? "text-kfc-white"
                          : "text-birria-crema/85 hover:text-kfc-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} />
                    </button>
                    {/* Dropdown */}
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="absolute left-0 mt-2 w-44 rounded-xl border border-birria-madera bg-birria-bordo/95 shadow-birria p-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(child.href)
                                ? "bg-kfc-red text-kfc-white"
                                : "text-birria-crema/90 hover:bg-birria-madera/20 hover:text-kfc-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 rounded-xl font-body text-sm text-birria-crema/85 hover:text-kfc-white transition-colors"
                  >
                    <span
                      className={`${
                        isActive(link.href) ? "text-kfc-white" : ""
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* subrayado animado */}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-kfc-red rounded-full"
                      />
                    )}
                  </Link>
                )
              )}

              {/* Toggle tema */}
              <button
                onClick={() => setDark((v) => !v)}
                className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-birria-madera hover:bg-birria-madera/20 transition-colors"
                aria-label="Cambiar tema"
                title="Cambiar tema"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <Link
                href="/pedido"
                className="ml-3 inline-flex items-center gap-2 bg-kfc-red hover:bg-birria-acento text-kfc-white px-4 py-2 rounded-2xl font-semibold shadow-kfc transition-colors"
              >
                <ShoppingCart size={18} />
                Pedir ahora
              </Link>
            </div>

            {/* Mobile toggles */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDark((v) => !v)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-birria-madera hover:bg-birria-madera/20 transition-colors"
                aria-label="Cambiar tema"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-birria-madera hover:bg-birria-madera/20 transition-colors"
                aria-label="Abrir menú"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden border-t border-birria-madera"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <details
                    key={link.label}
                    className="group"
                  >
                    <summary className="flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer text-birria-crema/90 hover:text-kfc-white">
                      <span>{link.label}</span>
                      <ChevronDown
                        size={18}
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="pl-4 py-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-2 py-2 rounded-lg text-sm ${
                            isActive(child.href)
                              ? "bg-kfc-red text-kfc-white"
                              : "text-birria-crema/85 hover:bg-birria-madera/20 hover:text-kfc-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-2 py-2 rounded-lg ${
                      isActive(link.href)
                        ? "bg-kfc-red text-kfc-white"
                        : "text-birria-crema/85 hover:bg-birria-madera/20 hover:text-kfc-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link
                href="/pedido"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-kfc-red hover:bg-birria-acento text-kfc-white px-4 py-2 rounded-2xl font-semibold shadow-kfc transition-colors"
              >
                <ShoppingCart size={18} />
                Pedir ahora
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
