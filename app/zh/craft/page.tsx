import type { Metadata } from "next";
import CraftView from "@/components/pageviews/CraftView";
import { metadataCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: metadataCopy.zh.craftTitle,
  description: metadataCopy.zh.craftDescription,
  alternates: {
    canonical: "/zh/craft/",
    languages: {
      en: "/craft/",
      "zh-CN": "/zh/craft/",
    },
  },
  openGraph: {
    title: `${metadataCopy.zh.craftTitle} · Yuan-Yi Art`,
    description: metadataCopy.zh.craftDescription,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/home_page/og-preview.png",
        width: 1200,
        height: 630,
        alt: "元艺手工坊手艺传承",
      },
    ],
  },
};

export default function ZhCraftPage() {
  return <CraftView locale="zh" />;
}
