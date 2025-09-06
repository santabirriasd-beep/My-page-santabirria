// app/page.jsx (o la sección donde lo quieras)
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title="QuesaTacos & Birria de Verdad"
        subtitle="Combos tipo KFC, pero con aguas de Jamaica y Horchata. ¡Pruébalos hoy!"
        bgImage="/images/hero-wood.jpg"
        // videoSrc="/videos/hero.mp4" // si tienes video, descomenta y comenta bgImage
      />
      {/* ...tu contenido */}
    </>
  );
}

