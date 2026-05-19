import type { Metadata } from "next";
import CollectionView from "@/components/pageviews/CollectionView";
import { metadataCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: metadataCopy.zh.collectionTitle,
  description: metadataCopy.zh.collectionDescription,
  alternates: {
    canonical: "/zh/collection/",
    languages: {
      en: "/collection/",
      "zh-CN": "/zh/collection/",
    },
  },
  openGraph: {
    title: `${metadataCopy.zh.collectionTitle} · Yuan-Yi Art`,
    description: metadataCopy.zh.collectionDescription,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/home_page/og-preview.png",
        width: 1200,
        height: 630,
        alt: "元艺手工坊精选手作",
      },
    ],
  },
};

export default function ZhCollectionPage() {
  return <CollectionView locale="zh" />;
}
