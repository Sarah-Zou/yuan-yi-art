import { ReactNode } from "react";

interface BilingualHeadingProps {
  cn: string;
  en: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  eyebrow?: string;
  children?: ReactNode;
}

// Reusable heading block that pairs a Chinese phrase with an English title.
// Used across Home, About, Collection, and Craft pages for consistent rhythm.
export default function BilingualHeading({
  cn,
  en,
  as = "h2",
  align = "left",
  eyebrow,
  children,
}: BilingualHeadingProps) {
  const Tag = as;
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <span className="cn text-base text-muted md:text-lg">{cn}</span>
      <Tag className="text-3xl leading-tight md:text-4xl lg:text-5xl">{en}</Tag>
      {children ? (
        <div className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
          {children}
        </div>
      ) : null}
    </div>
  );
}
