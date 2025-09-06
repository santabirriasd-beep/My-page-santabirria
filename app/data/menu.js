const menu = [
  {
    id: "especiales",
    title: "Especiales de la Casa",
    description: "Los favoritos de Santa Birria.",
    items: [
      { id: "quesatacos-birria", name: "Quesatacos de Birria", desc: "Tortilla dorada con queso fundido y birria. Incluye consomé.", price: 6.5, img: "https://placehold.co/800x600/png", spicy: 2, tags: ["tacos","birria"] },
      { id: "pizza-birria", name: "Pizza de Birria", desc: "Triple tortilla de trigo, mix de quesos y birria. 8 porciones.", price: 12.9, img: "https://placehold.co/800x600/png", spicy: 1, tags: ["compartir","trigo"] },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    description: "Suaves o crocantes, arma tu combo.",
    items: [
      { id: "dorados-ahogados", name: "Tacos Dorados Ahogados", desc: "Crujientes, bañados en salsa y crema.", price: 7.0, img: "https://placehold.co/800x600/png", spicy: 2, tags: ["crocante"] },
      { id: "parrilla", name: "Tacos a la Parrilla", desc: "Maíz suave, proteína a elección y salsas.", price: 6.9, img: "https://placehold.co/800x600/png", spicy: 1, tags: ["suaves"] },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    description: "Rellenos generosos, estilo Santa Birria.",
    items: [
      { id: "burrito-clasico", name: "Burrito Clásico", desc: "Frijol de la olla, arroz, proteína, pico de gallo y crema.", price: 6.5, img: "https://placehold.co/800x600/png", spicy: 1, tags: ["trigo"] },
    ],
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    description: "Salseadas al momento.",
    items: [
      { id: "enchiladas-rojas", name: "Enchiladas Rojas", desc: "Rellenas de pollo o birria, bañadas en salsa roja.", price: 7.2, img: "https://placehold.co/800x600/png", spicy: 3, tags: ["picante"] },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    description: "Para cerrar con broche de oro.",
    items: [
      { id: "flan-napolitano", name: "Flan Napolitano", desc: "Cremoso, con caramelo tradicional.", price: 3.2, img: "https://placehold.co/800x600/png", spicy: 0, tags: ["clásico"] },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    description: "Aguas frescas y refrescos mexicanos.",
    items: [
      { id: "agua-jamaica", name: "Agua de Jamaica", desc: "Flor de jamaica natural, ligeramente ácida.", price: 1.8, img: "https://placehold.co/800x600/png", spicy: 0, tags: ["sin alcohol"] },
      { id: "horchata", name: "Horchata", desc: "Arroz, canela y leche. Muy fría.", price: 1.8, img: "https://placehold.co/800x600/png", spicy: 0, tags: ["sin alcohol"] },
    ],
  },
];

export default menu;
