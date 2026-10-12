import Link from "next/link";
import type { ComponentProps } from "react";
import { clsx } from "clsx";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition duration-200",
        variant === "primary" && "bg-[#C6A66B] text-[#111214] hover:bg-[#d8bb84]",
        variant === "secondary" &&
          "border border-[#C6A66B]/60 text-[#F4F0E8] hover:border-[#C6A66B] hover:bg-[#C6A66B]/10",
        variant === "ghost" && "text-[#F4F0E8] hover:text-[#C6A66B]",
        className,
      )}
      {...props}
    />
  );
}
