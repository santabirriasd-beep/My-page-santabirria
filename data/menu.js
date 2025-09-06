// data/menu.js
// 📖 Menú Santa Birria – editable en tiempo real
// Usa esta data para mapear menús dinámicos en React/Next

export const menu = [
  {
    category: "Especialidades de la Casa",
    style: "🔥 Exclusivos Santa Birria",
    items: [
      {
        id: "quesatacos",
        name: "QuesaTacos",
        description: "Tacos de birria con queso fundido, servidos con su consomé.",
        price: 6.5,
        image: "/images/menu/quesatacos.jpg",
        tags: ["🔥 Top Ventas", "Santa Birria"],
      },
      {
        id: "pizza-birria",
        name: "Pizza de Birria",
        description: "Tortilla de trigo crujiente con capas de birria, queso y estilo volcán.",
        price: 12.0,
        image: "/images/menu/pizza-birria.jpg",
        tags: ["Novedad", "Para Compartir"],
      }
    ],
  },
  {
    category: "Combos 🍗",
    style: "Al estilo KFC pero con sazón birriera",
    items: [
      {
        id: "combo-1",
        name: "Combo Santa",
        description: "QuesaTacos + papas sazonadas + Agua de Jamaica u Horchata.",
        price: 9.99,
        image: "/images/menu/combo-santa.jpg",

