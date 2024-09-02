import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://martinmaiolo.es"),
  title: "▷ Desarrollador Web WordPress - Martin Maiolo",
  description: "Portfolio y servicios de Martin Maiolo, desarrollador web especializado en WordPress.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    images: "https://martinmaiolo.es/og-image.jpg",
    url: "https://martinmaiolo.es/",
    title: "▷ Desarrollador Web WordPress - Martin Maiolo",
    description: "Portfolio y servicios de Martin Maiolo, desarrollador web especializado en WordPress.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@martinmaiolo",
    title: "▷ Desarrollador Web WordPress - Martin Maiolo",
    description: "Portfolio y servicios de Martin Maiolo, desarrollador web especializado en WordPress.",
    images: "https://martinmaiolo.es/twitter-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  keywords: [
    "desarrollador web",
    "WordPress",
    "Martin Maiolo",
    "freelance",
    "diseño web",
    "SEO",
  ],
  creator: "Martin Maiolo",
  generator: "Next.js",
  publisher: "Vercel",
  verification: {
    google: "google-verification-code",
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
        <link rel="canonical" href="https://martinmaiolo.es/" />
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Martin Maiolo - Desarrollo Web",
              "url": "https://martinmaiolo.es",
              "logo": "https://martinmaiolo.es/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-123-456-7890",
                "contactType": "Customer Service",
                "areaServed": "AR",
                "availableLanguage": "es",
              },
              "sameAs": [
                "https://www.facebook.com/martinmaiolo",
                "https://www.instagram.com/martinmaiolo",
              ],
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
              "url": "https://martinmaiolo.es",
              "name": "Martin Maiolo - Desarrollo Web",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://martinmaiolo.es/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
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
