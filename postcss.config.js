// postcss.config.js
// Config optimizada: imports, nesting al estilo CSS moderno,
// Tailwind, preset-env y minificado sólo en producción.

module.exports = (ctx) => ({
  plugins: {
    // Permite usar @import en CSS
    "postcss-import": {},

    // Nesting moderno compatible con Tailwind (⚠️ usa este, no postcss-nesting)
    "tailwindcss/nesting": {},

    // Framework de utilidades
    tailwindcss: {},

    // Polyfills CSS modernos + autoprefixer integrado
    "postcss-preset-env": {
      stage: 1,
      features: {
        "nesting-rules": false, // ya lo gestiona tailwindcss/nesting
      },
      autoprefixer: {
        grid: "autoplace",
        flexbox: "no-2009",
      },
    },

    // Minifica sólo en producción
    ...(ctx.env === "production"
      ? {
          cssnano: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }
      : {}),
  },
});
