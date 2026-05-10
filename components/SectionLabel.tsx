interface SectionLabelProps {
  children: string;
}

// Small eyebrow label used before section headings (e.g. "SELECTED WORKS").
export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="rule" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
