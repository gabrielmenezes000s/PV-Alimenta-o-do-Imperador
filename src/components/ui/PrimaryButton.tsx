"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type PrimaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "solid" | "outline";
  // "gold" (padrão) para os CTAs que rolam até a oferta; "green" reservado para o botão de
  // checkout, para ele se destacar como a ação final de compra.
  tone?: "gold" | "green";
  size?: "md" | "lg";
  trackAs?: AnalyticsEvent;
  trackPayload?: Record<string, unknown>;
};

export function PrimaryButton({
  href,
  variant = "solid",
  tone = "gold",
  size = "lg",
  trackAs,
  trackPayload,
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-display font-semibold tracking-wide uppercase text-center transition-transform duration-150 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado-300";
  const sizes = size === "lg" ? "px-8 py-4 text-sm sm:text-base" : "px-6 py-3 text-sm";
  // `cta-pulse`/`cta-pulse-green` só no variante sólido — ver globals.css.
  const solidTone =
    tone === "green"
      ? "cta-pulse-green bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-700 text-white shadow-[0_8px_30px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_10px_36px_-6px_rgba(16,185,129,0.75)]"
      : "cta-pulse bg-gradient-to-r from-amber-300 via-dourado to-dourado-600 text-carvao shadow-[0_8px_30px_-8px_rgba(201,162,75,0.6)] hover:shadow-[0_10px_36px_-6px_rgba(221,192,125,0.85)]";
  const variants = variant === "solid" ? solidTone : "border border-dourado text-dourado-300 hover:bg-dourado/10";

  // Links de âncora (#oferta) são rolados manualmente: no App Router o next/link nem sempre
  // rola até o alvo numa navegação por hash — o efeito é mais visível no mobile, onde os CTAs
  // dourados pareciam "não levar" a lugar nenhum. Fazemos o scroll suave nós mesmos e ainda
  // atualizamos a URL com o hash (histórico/compartilhamento). O botão de checkout é um link
  // externo real, então cai no comportamento padrão do Link.
  const isHashLink = href.startsWith("#");

  return (
    <Link
      href={href}
      className={`${base} ${sizes} ${variants} ${className}`}
      onClick={(event) => {
        if (trackAs) trackEvent(trackAs, trackPayload);
        if (isHashLink) {
          const target = document.getElementById(href.slice(1));
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", href);
          }
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
