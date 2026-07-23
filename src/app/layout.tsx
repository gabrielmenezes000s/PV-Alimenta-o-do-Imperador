import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Tracking } from "@/components/layout/Tracking";
import { productConfig } from "@/config/product";
import { faqItems } from "@/config/faq";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alimentacaodoimperador.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alimentação do Imperador | Guia Prático de Alimentação Natural para Cães",
  description:
    "Conheça o guia em que Jailson, do Canil Imperador Romano, apresenta sua rotina prática de alimentação natural para cães, do filhote ao idoso.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: productConfig.kennelName,
    title: "Alimentação do Imperador | Guia Prático de Alimentação Natural para Cães",
    description:
      "Conheça o guia em que Jailson, do Canil Imperador Romano, apresenta sua rotina prática de alimentação natural para cães, do filhote ao idoso.",
    images: [{ url: "/images/product/og-cover.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alimentação do Imperador",
    description:
      "O guia em que Jailson, do Canil Imperador Romano, apresenta sua rotina prática de alimentação natural para cães.",
    images: ["/images/product/og-cover.webp"],
  },
  robots: { index: true, follow: true },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productConfig.productName,
  description:
    "E-book com o guia prático de alimentação natural desenvolvido por Jailson no Canil Imperador Romano, cobrindo ingredientes, preparo, cortes, texturas, armazenamento e rotina alimentar para cães em diferentes fases da vida.",
  brand: { "@type": "Organization", name: productConfig.kennelName },
  offers: {
    "@type": "Offer",
    price: productConfig.priceValue,
    priceCurrency: productConfig.currency,
    availability: "https://schema.org/InStock",
    url: siteUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: productConfig.kennelName,
  url: siteUrl,
  sameAs: [productConfig.instagramUrl].filter((u) => u && u !== "#"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-carvao font-sans antialiased">
        <Script id="schema-product" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(productSchema)}
        </Script>
        <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqSchema)}
        </Script>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Tracking />
        {children}
      </body>
    </html>
  );
}
