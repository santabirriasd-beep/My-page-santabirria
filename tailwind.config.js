/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // soporte dark/light
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta combinada KFC + Santa Birria
        kfc: {
          red: "#E4002B", // rojo KFC
          dark: "#2C2C2C", // negro casi puro
          white: "#FFFFFF",
        },
        birria: {
          bordo: "#4A1C2A", // vino/bordó oscuro
          madera: "#7B3F00", // marrón madera cálida
          crema: "#F5E6D3", // tono neutro arena
          acento: "#D32F2F", // rojo mexicano más profundo
        },
      },
      fontFamily: {
        headline: ["'Bebas Neue'", "sans-serif"], // fuerte, estilo KFC
        body: ["'Poppins'", "sans-serif"], // moderno y legible
        artesanal: ["'Roboto Slab'", "serif"], // toque artesanal/mexicano
      },
      boxShadow: {
        kfc: "0 4px 12px rgba(228, 0, 43, 0.3)", // rojo intenso
        birria: "0 6px 20px rgba(74, 28, 42, 0.4)", // bordó oscuro
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-texture.png')",
        "wood-texture": "url('/images/wood-bg.jpg')",
        "birria-dark": "linear-gradient(135deg, #4A1C2A 0%, #2C2C2C 100%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "4xl": "2rem", // redondeados tipo packaging KFC
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

