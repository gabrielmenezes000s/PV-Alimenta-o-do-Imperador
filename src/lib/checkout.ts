import { productConfig } from "@/config/product";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

// Anexa os parâmetros de UTM/fbclid da URL atual da página ao link de checkout, sem sobrescrever
// parâmetros que o link de checkout já possua. Anchors internos (ex.: "#oferta") são retornados
// sem alteração — só faz sentido preservar UTM em um link externo real.
export function buildCheckoutUrl(base: string = productConfig.checkoutUrl): string {
  if (typeof window === "undefined") return base;
  if (base.startsWith("#")) return base;

  try {
    const current = new URL(window.location.href);
    const target = new URL(base, window.location.origin);

    for (const key of UTM_KEYS) {
      const value = current.searchParams.get(key);
      if (value && !target.searchParams.has(key)) {
        target.searchParams.set(key, value);
      }
    }

    return target.toString();
  } catch {
    return base;
  }
}
