export const metadata = {
  title: "Santa Birria",
  description: "El auténtico sabor de la birria."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-display text-white antialiased">{children}</body>
    </html>
  );
}
