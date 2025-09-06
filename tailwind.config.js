/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        birria: {
          bg: "#0C0C0C",
          card: "#121212",
          red: "#C62828",
          red2: "#E53935",
          cream: "#F7F1E8",
          gold: "#F5B301"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,.25)"
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto"]
      }
    }
  },
  plugins: []
};
