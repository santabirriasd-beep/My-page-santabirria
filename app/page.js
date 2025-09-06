export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-neutral-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/img/bg-birria.jpg"
          alt="Santa Birria fondo"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-red-800/70 px-4 py-1 rounded-full mb-6 text-sm font-medium shadow-lg">
          🌮 Sabor auténtico · ⚡ Entrega rápida
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Bienvenido a <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">Santa Birria</span>
        </h1>

        <p className="mt-4 text-lg text-neutral-200">
          Tacos, quesabirrias y antojos con ese consomé que enamora.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/menu" className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition">
            Ver Menú
          </a>
          <a href="#pedido" className="px-6 py-3 rounded-full bg-white text-red-700 font-semibold shadow-lg hover:bg-neutral-100 transition">
            Hacer Pedido 🔥
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4 text-neutral-300">
          <a href="https://tiktok.com" target="_blank" className="hover:text-white">TikTok</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </section>
  );
}
