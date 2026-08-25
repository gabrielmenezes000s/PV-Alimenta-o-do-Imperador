// Envio server-side de eventos para a Meta Conversions API. Só é importado pela route handler
// em src/app/api/capi/route.ts — nunca por um componente "use client" — porque depende de
// META_CONVERSIONS_API_TOKEN, que não tem prefixo NEXT_PUBLIC_ e por isso nunca vai pro bundle
// do navegador (ver .env.example).

// Atualize a versão periodicamente — ver changelog em
// https://developers.facebook.com/docs/graph-api/changelog
const GRAPH_API_VERSION = "v22.0";

type MetaCapiUserData = {
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
};

type MetaCapiEventInput = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  userData: MetaCapiUserData;
  customData?: Record<string, unknown>;
};

// Retorna false quando o Pixel ID ou o token não estão configurados (.env.local ausente/incompleto
// em dev, por exemplo) — chamadores tratam isso como no-op silencioso, não como erro.
export function isMetaCapiConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID && process.env.META_CONVERSIONS_API_TOKEN);
}

export async function sendMetaCapiEvent(event: MetaCapiEventInput): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN;
  if (!pixelId || !accessToken) return;

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  const body = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        event_source_url: event.eventSourceUrl,
        action_source: "website",
        user_data: event.userData,
        ...(event.customData ? { custom_data: event.customData } : {}),
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    console.error("[meta-capi] Meta recusou o evento", event.eventName, response.status, text);
  }
}
