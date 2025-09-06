import "./globals.css";

export const metadata = {
  title: "Santa Birria",
  description: "Aquí la birria es sagrada, el hambre es pecado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
