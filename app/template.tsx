import { ReactNode } from "react";

/**
 * Page shell for navigations. Intentionally plain (no opacity-only entrance):
 * a fade-from-zero wrapper hid all page content whenever JS failed to run
 * (for example opening the static `out/` export via file://, where /_next
 * URLs do not resolve). Section-level motion still lives in Reveal/Stagger.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
