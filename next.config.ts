import type { NextConfig } from "next";

// For GitHub Pages project sites (https://USER.github.io/REPO/), set at build time:
//   BASE_PATH=/yuan-yi-art npm run build
// Omit BASE_PATH for local preview at repo root paths (e.g. npm run dev).
const rawBase = process.env.BASE_PATH?.trim();
const basePath =
  rawBase && rawBase !== "/" ? (rawBase.startsWith("/") ? rawBase : `/${rawBase}`) : undefined;

// Static export: produces a plain /out folder, deployable on any static host.
const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  output: "export",
  trailingSlash: true,
  images: {
    // Static export requires disabling Next's image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
