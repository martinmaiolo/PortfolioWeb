import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script"; // Importa el componente Script para agregar JSON-LD

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://service-electrolux.ar"),
  title:
    "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
  description:
    "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    images:
      "https://service-electrolux-f4204ruh5-fededinuzzos-projects.vercel.app/opengraph-image.jpg?405fc21523a0661c",
    url: "https://service-electrolux.ar/",
    title:
      "▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA",
    description:
      "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
  },
  twitter: {
    card: "summary_large_image",
    site: "service-electrolux",
    title:
      '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA"',
    description:
      "Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!",
    images:
      "https://service-electrolux-f4204ruh5-fededinuzzos-projects.vercel.app/opengraph-image.jpg?405fc21523a0661c",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "servicio",
    "service",
    "electrolux",
    "heladeras",
    "lavarropas",
    "reparacion",
    "arreglo",
    "tecnicos",
    "asistencia",
    "capital federal",
    "zona norte",
    "zona sur",
    "servicio tecnico de heladeras y lavarropas electrolux",
    "service de lavarropas y heladeras electrolux",
    "reparacion de heladeras y lavarropas electrlux",
  ],
  creator: "Federico Di Nuzzo",
  generator: "Next.js",
  publisher: "Vercel",
  verification: {
    google: "google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content="Martin Maiolo" />
        <meta name="robots" content="index, follow">
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
        <meta name="keywords" content="desarrollador web WordPress">
        <link rel="canonical" href="https://martinmaiolo.es/">
        {/* Agrega el schema en formato JSON-LD */}
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Service Electrolux",
              "url": "https://service-electrolux.ar",
              "logo": "https://service-electrolux-f4204ruh5-fededinuzzos-projects.vercel.app/opengraph-image.jpg?405fc21523a0661c",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-123-456-7890",
                "contactType": "Customer Service",
                "areaServed": "AR",
                "availableLanguage": "es"
              },
              "sameAs": [
                "https://www.facebook.com/serviceelectrolux",
                "https://www.instagram.com/serviceelectrolux"
              ]
            }),
          }}
        />
        <Script
          type="application/ld+json"
          id="website-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://service-electrolux.ar",
              "name": "Service Electrolux",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://service-electrolux.ar/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
