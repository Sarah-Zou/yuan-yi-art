import type { Work } from "@/content/works";
import type { Locale } from "@/lib/i18n";
import { StaggerChild, StaggerOnView } from "./motion/Stagger";
import WorkCard from "./WorkCard";

interface WorkGridProps {
  works: Work[];
  locale?: Locale;
}

/**
 * Exhibition-style grid: 1 column on mobile, 2 on tablet, 3 on desktop.
 * Generous gaps keep the grid feeling quiet and considered.
 *
 * Each card rises gently into view with a small stagger when the grid
 * enters the viewport — like pieces being placed on a gallery wall.
 */
export default function WorkGrid({ works, locale = "en" }: WorkGridProps) {
  return (
    <StaggerOnView className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
      {works.map((work) => (
        <StaggerChild key={work.slug}>
          <WorkCard work={work} locale={locale} />
        </StaggerChild>
      ))}
    </StaggerOnView>
  );
}
