import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionProvider from "@/components/motion/MotionProvider";
import { brand } from "@/content/brand";

// Editorial serif — used for all display headings.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

// Clean sans for body copy and UI.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Chinese serif matched optically with Cormorant for bilingual pairings.
const notoSerifSc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.nameCn} · ${brand.nameEn}`,
    template: `%s · ${brand.nameEn}`,
  },
  description: brand.shortIntro.en,
  metadataBase: new URL("https://yuan-yi.art"),
  openGraph: {
    title: `${brand.nameCn} · ${brand.nameEn}`,
    description: brand.shortIntro.en,
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/home_page/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Yuan-Yi Art — Chinese handmade heritage, carried forward by women's hands",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${notoSerifSc.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
