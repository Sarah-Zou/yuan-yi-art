import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const pages = [
  { path: "/", priority: 1.0 },
  { path: "/about/", priority: 0.9 },
  { path: "/collection/", priority: 0.9 },
  { path: "/craft/", priority: 0.8 },
  { path: "/contact/", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-19");

  return pages.flatMap(({ path, priority }) => {
    const zhPath = path === "/" ? "/zh/" : `/zh${path}`;

    return [
      {
        url: `https://yuan-yi.art${path}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
          languages: {
            en: `https://yuan-yi.art${path}`,
            "zh-CN": `https://yuan-yi.art${zhPath}`,
          },
        },
      },
      {
        url: `https://yuan-yi.art${zhPath}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates: {
          languages: {
            en: `https://yuan-yi.art${path}`,
            "zh-CN": `https://yuan-yi.art${zhPath}`,
          },
        },
      },
    ];
  });
}
