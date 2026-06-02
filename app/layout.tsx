import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Paalman Installatie en Service | Installateur in Holten & regio Overijssel",
  description:
    "Gecertificeerde installateur voor gas, water, elektra, sanitair, riolering en verwarming in Holten en omgeving. Snel, netjes en altijd bereikbaar. Bel: 06-41035574",
  keywords:
    "installateur Holten, loodgieter Holten, CV-ketel Holten, elektra Rijssen, sanitair Overijssel, Paalman installatie",
  openGraph: {
    title: "Paalman Installatie en Service | Holten",
    description:
      "Uw vakman voor gas, water, elektra, sanitair en verwarming in de regio Overijssel.",
    locale: "nl_NL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Paalman Installatie en Service",
  image: "/media/imgi_2_475872709_1573049473539026_7592696045939364928_n.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Canadastraat 107",
    addressLocality: "Holten",
    postalCode: "7451 ZL",
    addressCountry: "NL",
  },
  telephone: "+31641035574",
  url: "https://www.paalmaninstallatie-service.nl",
  areaServed: [
    "Holten",
    "Rijssen",
    "Markelo",
    "Goor",
    "Deventer",
    "Wierden",
    "Overijssel",
  ],
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
