import Splash from "@/components/Splash";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Splash />
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Santa Birria</h1>
        <p className="mt-4 text-lg text-white/80">Sabor que sí llena.</p>
      </section>
    </main>
  );
}
