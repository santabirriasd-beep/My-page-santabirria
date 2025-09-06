// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Compilación más rápida con SWC
  images: {
    // Permite servir imágenes optimizadas (ejemplo para tu web)
    domains: [
      "santabirriasd.netlify.app", // tu dominio actual
      "res.cloudinary.com",        // si usas cloudinary
      "images.unsplash.com"        // ejemplo para placeholders
    ],
    formats: ["image/webp", "image/avif"], // formatos modernos
  },
  experimental: {
    appDir: true,   // habilita el nuevo App Router (Next 13/14)
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // limpia console.log en producción
  },
  webpack: (config) => {
    // Alias para imports más limpios
    config.resolve.alias["@"] = require("path").resolve(__dirname, "src");
    return config;
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es", // sitio en español primero
  },
};

module.exports = nextConfig;
