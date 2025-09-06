"use client";
export default function CartBar({ items, onClear, onCheckout }) {
  const qty = items.reduce((a, b) => a + b.qty, 0);
  const total = items.reduce((a, b) => a + b.qty * b.price, 0);

  if (qty === 0) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center z-50">
      <div className="w-[95%] md:w-[720px] bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3">
        <div className="text-sm">
          <strong>{qty}</strong> items · <strong>${total.toFixed(2)}</strong>
        </div>
        <button onClick={onClear} className="ml-auto px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
          Vaciar
        </button>
        <button
          onClick={onCheckout}
          className="px-4 py-2 rounded-lg bg-birria-red hover:bg-birria-red2 font-semibold"
        >
          Pedir ahora
        </button>
      </div>
    </div>
  );
}
