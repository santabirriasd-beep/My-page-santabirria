import React, { useMemo, useState } from "react";
import { Search, Pencil, Save, Upload, Download, Filter } from "lucide-react";

/**
 * MENÚ WEB EDITABLE – SANTA BIRRIA
 * • Pega este componente en tu proyecto (Next.js/React).
 * • Todo es editable en tiempo real (modo "Editar").
 * • Exporta/Importa el JSON del menú.
 */

// === DATOS DEL MENÚ (edita libremente) ===
const initialMenu = [
  {
    id: "especiales",
    title: "Especiales de la Casa",
    description: "Los favoritos de Santa Birria.",
    items: [
      {
        id: "quesatacos-birria",
        name: "Quesatacos de Birria",
        desc: "Tortilla dorada con queso fundido y birria. Incluye consomé.",
        price: 6.5,
        img: "https://placehold.co/800x600/png",
        spicy: 2,
        tags: ["tacos", "birria"],
      },
      {
        id: "pizza-birria",
        name: "Pizza de Birria",
        desc: "Triple tortilla de trigo, mix de quesos y birria. 8 porciones.",
        price: 12.9,
        img: "https://placehold.co/800x600/png",
        spicy: 1,
        tags: ["compartir", "trigo"],
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    description: "Suaves o crocantes, arma tu combo.",
    items: [
      {
        id: "dorados-ahogados",
        name: "Tacos Dorados Ahogados",
        desc: "Crujientes, bañados en salsa y crema.",
        price: 7.0,
        img: "https://placehold.co/800x600/png",
        spicy: 2,
        tags: ["crocante"],
      },
      {
        id: "parrilla",
        name: "Tacos a la Parrilla",
        desc: "Maíz suave, proteína a elección y salsas.",
        price: 6.9,
        img: "https://placehold.co/800x600/png",
        spicy: 1,
        tags: ["suaves"],
      },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    description: "Rellenos generosos, estilo Santa Birria.",
    items: [
      {
        id: "burrito-clasico",
        name: "Burrito Clásico",
        desc: "Frijol de la olla, arroz, proteína, pico de gallo y crema.",
        price: 6.5,
        img: "https://placehold.co/800x600/png",
        spicy: 1,
        tags: ["trigo"],
      }
    ],
  },
  {
    id: "enchiladas",
    title: "Enchiladas",
    description: "Salseadas al momento.",
    items: [
      {
        id: "enchiladas-rojas",
        name: "Enchiladas Rojas",
        desc: "Rellenas de pollo o birria, bañadas en salsa roja.",
        price: 7.2,
        img: "https://placehold.co/800x600/png",
        spicy: 3,
        tags: ["picante"],
      }
    ],
  },
  {
    id: "postres",
    title: "Postres",
    description: "Para cerrar con broche de oro.",
    items: [
      {
        id: "flan-napolitano",
        name: "Flan Napolitano",
        desc: "Cremoso, con caramelo tradicional.",
        price: 3.2,
        img: "https://placehold.co/800x600/png",
        spicy: 0,
        tags: ["clásico"],
      }
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    description: "Aguas frescas y refrescos mexicanos.",
    items: [
      {
        id: "agua-jamaica",
        name: "Agua de Jamaica",
        desc: "Flor de jamaica natural, ligeramente ácida.",
        price: 1.8,
        img: "https://placehold.co/800x600/png",
        spicy: 0,
        tags: ["sin alcohol"],
      },
      {
        id: "horchata",
        name: "Horchata",
        desc: "Arroz, canela y leche. Muy fría.",
        price: 1.8,
        img: "https://placehold.co/800x600/png",
        spicy: 0,
        tags: ["sin alcohol"],
      }
    ],
  }
];

// === UTILIDADES ===
function classNames(...c) { return c.filter(Boolean).join(" "); }
const currency = (n, symbol = "$") => `${symbol}${Number(n).toFixed(2)}`;

export default function MenuSantaBirria() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialMenu);
  const [edit, setEdit] = useState(false);
  const [symbol, setSymbol] = useState("$");

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase();
    return data.map(cat => ({
      ...cat,
      items: cat.items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.tags?.some(t => t.toLowerCase().includes(q))
      )
    })).filter(c => c.items.length > 0);
  }, [query, data]);

  const updatePrice = (categoryId, itemId, value) => {
    setData(prev => prev.map(cat => {
      if (cat.id !== categoryId) return cat;
      return {
        ...cat,
        items: cat.items.map(i => i.id === itemId ? { ...i, price: value } : i)
      };
    }));
  };

  const updateText = (categoryId, itemId, key, value) => {
    setData(prev => prev.map(cat => {
      if (cat.id !== categoryId) return cat;
      return {
        ...cat,
        items: cat.items.map(i => i.id === itemId ? { ...i, [key]: value } : i)
      };
    }));
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "menu_santa_birria.json"; a.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try { setData(JSON.parse(reader.result)); }
      catch { alert("Archivo inválido"); }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/img/santa-birria-logo.png" alt="La Santa Birria" className="w-40 h-40 object-contain" onError={(e)=>{e.currentTarget.style.display='none';}}/>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Menú – La Santa Birria</h1>
              <p className="mt-2 text-neutral-600">Auténtico sabor con estilo. Edita precios y textos en vivo.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <label className="flex items-center gap-2 rounded-full border px-3 py-1 bg-white shadow-sm">
                  <Search className="w-4 h-4"/>
                  <input
                    className="outline-none text-sm"
                    placeholder="Buscar plato o etiqueta..."
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                  />
                </label>

                <button onClick={()=>setEdit(!edit)} className={classNames("inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm shadow-sm", edit?"bg-amber-600 text-white":"bg-white border")}> 
                  {edit ? <><Save className="w-4 h-4"/> Guardar</> : <><Pencil className="w-4 h-4"/> Editar</>}
                </button>

                <div className="flex items-center gap-2 bg-white border rounded-full px-3 py-2 text-sm shadow-sm">
                  <Filter className="w-4 h-4"/>
                  <span>Moneda:</span>
                  <select value={symbol} onChange={(e)=>setSymbol(e.target.value)} className="outline-none">
                    <option value="$">USD ($)</option>
                    <option value="S/">PEN (S/)</option>
                    <option value="€">EUR (€)</option>
                    <option value="$MX">MXN ($MX)</option>
                  </select>
                </div>

                <button onClick={exportJSON} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white border shadow-sm"><Download className="w-4 h-4"/> Exportar JSON</button>
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white border shadow-sm cursor-pointer">
                  <Upload className="w-4 h-4"/> Importar JSON
                  <input type="file" accept="application/json" className="hidden" onChange={(e)=> e.target.files?.[0] && importJSON(e.target.files[0])}/>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTADO */}
      <main className="mx-auto max-w-7xl px-4 pb-16">
        {filtered.map(cat => (
          <section key={cat.id} className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{cat.title}</h2>
                {cat.description && <p className="text-neutral-600 mt-1">{cat.description}</p>}
              </div>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map(item => (
                <article key={item.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] bg-neutral-100">
                    {item.img && <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    {edit ? (
                      <input className="text-lg font-semibold mb-1 outline-none border-b" value={item.name} onChange={(e)=>updateText(cat.id, item.id, 'name', e.target.value)}/>
                    ) : (
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                    )}

                    {edit ? (
                      <textarea className="mt-1 text-sm text-neutral-600 outline-none border rounded-md p-2" value={item.desc} onChange={(e)=>updateText(cat.id, item.id, 'desc', e.target.value)} />
                    ) : (
                      <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      {edit ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-neutral-500">Precio:</span>
                          <input type="number" step="0.01" value={item.price} onChange={(e)=>updatePrice(cat.id, item.id, Number(e.target.value))} className="w-24 border rounded px-2 py-1"/>
                        </div>
                      ) : (
                        <span className="text-xl font-bold">{currency(item.price, symbol)}</span>
                      )}
                    </div>

                    {edit && (
                      <div className="mt-3 grid grid-cols-1 gap-2">
                        <input className="border rounded px-2 py-1" placeholder="URL de imagen" value={item.img || ""} onChange={(e)=>updateText(cat.id, item.id, 'img', e.target.value)}/>
                        <input className="border rounded px-2 py-1" placeholder="Etiquetas separadas por coma" value={item.tags?.join(', ') || ''} onChange={(e)=>updateText(cat.id, item.id, 'tags', e.target.value.split(',').map(t=>t.trim()).filter(Boolean))}/>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} La Santa Birria</span>
          <span>Hecho para editar fácil en tu web</span>
        </div>
      </footer>
    </div>
  );
}
