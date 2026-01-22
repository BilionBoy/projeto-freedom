import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingContactButton } from "@/components/floating-contact-button";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Freedom Planejamento Imobiliário - Bella Verona & Vista Parque",
  description:
    "Realize seu sonho da casa própria com a Freedom. Conheça nossos empreendimentos em Itu e Salto/SP.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} antialiased`}>
        {/* ================= GOOGLE TAG MANAGER ================= */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LX5KJ23');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LX5KJ23"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* ====================================================== */}

        {children}

        <FloatingContactButton />
        <Analytics />
      </body>
    </html>
  );
}
