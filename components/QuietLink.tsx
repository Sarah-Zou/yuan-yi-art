import Link from "next/link";
import { ReactNode } from "react";

interface QuietLinkProps {
  href: string;
  children: ReactNode;
}

// A minimal link style used for editorial CTAs ("Read the story", etc.).
// No button chrome — just a thin underline that settles on hover.
export default function QuietLink({ href, children }: QuietLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className="quiet-link font-serif text-lg">
        {children}
        <span aria-hidden="true"> →</span>
      </a>
    );
  }

  return (
    <Link href={href} className="quiet-link font-serif text-lg">
      {children}
      <span aria-hidden="true"> →</span>
    </Link>
  );
}
