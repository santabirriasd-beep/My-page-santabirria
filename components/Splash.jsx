"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#120B0B] transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 rounded-full border-4 border-[#B11B1B]/30 flex items-center justify-center animate-pulse">
          <Image src="/brand/logo.png" alt="logo" width={78} height={78} className="rounded-full" />
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-sb-loader rounded-full bg-[#E12727]"></div>
        </div>
      </div>
    </div>
  );
}
