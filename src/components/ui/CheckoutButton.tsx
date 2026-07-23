"use client";

import { useEffect, useState, type ReactNode } from "react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { productConfig } from "@/config/product";
import { buildCheckoutUrl } from "@/lib/checkout";
import type { AnalyticsEvent } from "@/lib/analytics";

type CheckoutButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  trackAs?: AnalyticsEvent;
  trackPayload?: Record<string, unknown>;
};

// CTA de compra — sempre aponta para productConfig.checkoutUrl, preservando UTM/fbclid da URL
// da página quando o checkout for um link externo real (ver src/lib/checkout.ts).
export function CheckoutButton({ children, ...props }: CheckoutButtonProps) {
  const [href, setHref] = useState(productConfig.checkoutUrl);

  useEffect(() => {
    // Sincroniza com a URL atual do navegador (fonte de UTM/fbclid) uma única vez após montar —
    // não há evento do React para "a página carregou com esta query string".
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHref(buildCheckoutUrl());
  }, []);

  return (
    // tone="green": único botão verde da página — a ação final de compra que leva ao checkout.
    <PrimaryButton href={href} tone="green" {...props}>
      {children}
    </PrimaryButton>
  );
}
