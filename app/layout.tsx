import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Freedom Imobiliária - Bella Verona & Vista Parque",
  description:
    "Realize seu sonho da casa própria com a Freedom. Conheça nossos empreendimentos em Itu e Salto/SP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
