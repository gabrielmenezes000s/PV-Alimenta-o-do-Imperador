import { Icon } from "@/components/ui/Icon";
import type { ComponentProps } from "react";

type IconBadgeItem = {
  icon: ComponentProps<typeof Icon>["name"];
  label: string;
};

type IconBadgeRowProps = {
  items: IconBadgeItem[];
  className?: string;
  tone?: "light" | "muted";
};

// Fileira de mini-selos ícone+rótulo — usada no hero, na seção "existe uma forma melhor" e no CTA final.
export function IconBadgeRow({ items, className = "", tone = "light" }: IconBadgeRowProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <Icon name={item.icon} className={`h-4 w-4 shrink-0 ${tone === "light" ? "text-dourado-300" : "text-dourado/70"}`} />
          <span className="text-xs font-medium leading-tight text-pedra-100/80 sm:text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
