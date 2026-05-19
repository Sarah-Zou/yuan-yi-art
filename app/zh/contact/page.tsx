import type { Metadata } from "next";
import ContactView from "@/components/pageviews/ContactView";
import { metadataCopy } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: metadataCopy.zh.contactTitle,
  description: metadataCopy.zh.contactDescription,
  alternates: {
    canonical: "/zh/contact/",
    languages: {
      en: "/contact/",
      "zh-CN": "/zh/contact/",
    },
  },
  openGraph: {
    title: `${metadataCopy.zh.contactTitle} · Yuan-Yi Art`,
    description: metadataCopy.zh.contactDescription,
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/home_page/og-preview.png",
        width: 1200,
        height: 630,
        alt: "联系元艺手工坊",
      },
    ],
  },
};

export default function ZhContactPage() {
  return <ContactView locale="zh" />;
}
