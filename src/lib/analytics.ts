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
  }
}

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
