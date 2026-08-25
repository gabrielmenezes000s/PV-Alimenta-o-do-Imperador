import { isMetaCapiConfigured, sendMetaCapiEvent } from "@/lib/metaCapi";

// Recebe eventos do cliente (ver trackMetaEvent em src/lib/analytics.ts) e os encaminha para a
// Meta Conversions API a partir do servidor, com o mesmo event_id do fbq('track', ...) disparado
// no navegador — a Meta deduplica os dois automaticamente por event_name + event_id.
export async function POST(request: Request) {
  if (!isMetaCapiConfigured()) {
    // Pixel ID/token ainda não configurados (ex.: dev local sem .env.local) — no-op silencioso,
    // não é um erro do chamador.
    return Response.json({ skipped: true });
  }

  let payload: {
    eventName?: string;
    eventId?: string;
    eventSourceUrl?: string;
    fbp?: string;
    fbc?: string;
    customData?: Record<string, unknown>;
  };

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { eventName, eventId, eventSourceUrl, fbp, fbc, customData } = payload;
  if (!eventName || !eventId || !eventSourceUrl) {
    return Response.json(
      { error: "eventName, eventId e eventSourceUrl são obrigatórios" },
      { status: 400 },
    );
  }

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientUserAgent = request.headers.get("user-agent") ?? undefined;

  try {
    await sendMetaCapiEvent({
      eventName,
      eventId,
      eventSourceUrl,
      userData: { client_ip_address: clientIp, client_user_agent: clientUserAgent, fbp, fbc },
      customData,
    });
  } catch (error) {
    console.error("[api/capi] erro ao encaminhar evento para a Meta", error);
    // Best-effort: nunca deve quebrar a navegação do usuário no site por causa disso.
    return Response.json({ error: "falha ao enviar evento" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
