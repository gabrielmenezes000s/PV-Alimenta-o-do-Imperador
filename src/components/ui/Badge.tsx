import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

// Pílula dourada centralizada — ex.: "DO FILHOTE AO IDOSO" no hero.
export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-dourado/50 bg-dourado/10 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-dourado-300 sm:text-xs ${className}`}
    >
      {children}
    </span>
  );
}
