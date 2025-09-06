const menu = [
  {
    id: "especiales",
    title: "Especiales de la Casa",
    description: "Los favoritos de Santa Birria.",
    items: [
      { id: "quesatacos-birria", name: "Quesatacos de Birria", desc: "Tortilla dorada con queso fundido y birria. Incluye consomé.", price: 6.5, img: "https://placehold.co/800x600/png", spicy: 2, tags: ["tacos","birria"] },
      { id: "pizza-birria", name: "Pizza de Birria", desc: "Triple tortilla de trigo, mix de quesos y birria. 8 porciones.", price: 12.9, img: "https://placehold.co/800x600/png", spicy: 1, tags: ["compartir","trigo"] }
    ]
  },
  {
    id: "tacos",
    title: "Tacos",
    description: "Suaves o crocantes, arma tu combo.",
    items: [
      { id: "dorados-ahogados", name: "Tacos Dorados Ahogados", desc: "Crujientes, bañados en salsa y crema.", price: 7.0, img: "https://placehold.co/800x600/png", spicy: 2, tags: ["crocante"] },
      { id: "parrilla", name: "Tacos a la Parrilla", desc: "Maíz suave, proteína a elección y salsas.", price: 6.9, img: "https://placehold.co/800x600/png", spicy: 1, tags: ["suaves"] }
    ]
  }
];

export default menu;
