// Wrapper fino sobre o dataLayer (GTM/GA4/Meta Pixel). Nenhum ID real é inserido aqui —
// os containers são carregados via variáveis de ambiente em src/components/layout/Tracking.tsx.
export type AnalyticsEvent =
  | "page_view"
  | "view_hero"
  | "click_hero_cta"
  | "view_method"
  | "view_testimonial"
  | "play_testimonial_video"
  | "view_offer"
  | "click_offer_cta"
  | "faq_open"
  | "begin_checkout"
  | "purchase"
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "scroll_90";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// Dispara um evento padrão do Meta em dois canais — Pixel no navegador (fbq) e Conversions API
// no servidor (/api/capi, ver src/app/api/capi/route.ts) — com o mesmo event_id nos dois, para a
// Meta deduplicar automaticamente. Reservado para os pontos que representam intenção real de
// compra (ver CheckoutButton); os eventos internos do dataLayer acima continuam via trackEvent.
// Sem efeito se o Pixel/token não estiverem configurados (fbq some, e a rota responde no-op).
export function trackMetaEvent(metaEventName: string, options: { customData?: Record<string, unknown> } = {}) {
  if (typeof window === "undefined") return;

  const eventId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

  window.fbq?.("track", metaEventName, options.customData ?? {}, { eventID: eventId });

  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: metaEventName,
      eventId,
      eventSourceUrl: window.location.href,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
      customData: options.customData,
    }),
    keepalive: true,
  }).catch(() => {
    // Best-effort — falha de rede na Conversions API não deve travar a navegação do usuário.
  });
}
