import type { Metadata } from "next";
import HomeView from "@/components/pageviews/HomeView";
import { brand } from "@/content/brand";
import { metadataCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: `${brand.nameCn} · ${brand.nameEn}`,
  description: metadataCopy.zh.homeDescription,
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
  openGraph: {
    title: `${brand.nameCn} · ${brand.nameEn}`,
    description: metadataCopy.zh.homeDescription,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/home_page/og-preview.png",
        width: 1200,
        height: 630,
        alt: "元艺手工坊 — 中国民间手作文化品牌",
      },
    ],
  },
};

export default function ZhHomePage() {
  return <HomeView locale="zh" />;
}
