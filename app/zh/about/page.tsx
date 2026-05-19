import type { Metadata } from "next";
import AboutView from "@/components/pageviews/AboutView";
import { brand } from "@/content/brand";
import { metadataCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: metadataCopy.zh.aboutTitle,
  description: metadataCopy.zh.aboutDescription,
  alternates: {
    canonical: "/zh/about/",
    languages: {
      en: "/about/",
      "zh-CN": "/zh/about/",
    },
  },
  openGraph: {
    title: `${metadataCopy.zh.aboutTitle} · ${brand.nameEn}`,
    description: metadataCopy.zh.aboutDescription,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/brand_story_page/hero.png",
        width: 1200,
        height: 630,
        alt: "丝线、布料与手作细节 — 元艺手工坊品牌故事",
      },
    ],
  },
};

export default function ZhAboutPage() {
  return <AboutView locale="zh" />;
}
