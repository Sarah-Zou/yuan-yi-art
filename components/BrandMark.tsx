import Image from "next/image";
import { assetUrl } from "@/lib/assetUrl";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandMark({
  className = "",
  imageClassName = "",
  priority = false,
}: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-ivory/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] ${className}`}
    >
      <Image
        src={assetUrl("/images/brand/logo-mark.png")}
        alt=""
        width={431}
        height={333}
        priority={priority}
        className={`h-auto w-[82%] opacity-90 mix-blend-multiply ${imageClassName}`}
      />
    </span>
  );
}
