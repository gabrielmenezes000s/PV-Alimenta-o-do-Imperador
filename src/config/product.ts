// Configuração central da oferta. Edite aqui — os componentes não devem ter texto hardcoded de
// preço/links. Ver PENDENCIAS_PARA_PUBLICACAO.md para a lista de campos ainda pendentes.
export const productConfig = {
  productName: "Alimentação do Imperador",
  productSubtitle: "Guia prático de alimentação natural para cães",
  kennelName: "Canil Imperador Romano",
  authorName: "Jailson",
  authorAlias: "Imperador Romano",
  location: "Poço Verde (SE)",

  // Preço confirmado no briefing: pagamento único.
  // ⚠️ Print do checkout Hotmart (21/07/2026) mostra "R$ 67,00 à vista" — R$0,90 de diferença
  // do valor abaixo. Cliente confirmou manter 67,90 mesmo assim; vale checar com Jailson/Hotmart
  // qual é o valor realmente ativo antes de publicar (ver PENDENCIAS_PARA_PUBLICACAO.md).
  priceDisplay: "67,90",
  priceValue: 67.9,
  currency: "BRL",

  // Confirmado com o cliente em 23/07/2026: "9x de R$ 8,92".
  installmentDisplay: "9x de R$ 8,92" as string | null,

  // Âncora de valor ("de R$230 por R$67,90") — pedido explícito do cliente em 21/07/2026.
  // O valor de R$230 não tem fonte/comprovação (não é um preço que já foi cobrado) — ver
  // COPY-E-ALEGACOES.md sobre o risco de propaganda enganosa dessa alegação.
  anchorPriceDisplay: "230,00" as string | null,

  // Link real do checkout Hotmart (informado pelo cliente em 22/07/2026). Usado APENAS pelo botão
  // dentro da seção de oferta; os demais CTAs da página rolam para "#oferta" para revelar o preço
  // primeiro. O UTM/fbclid da URL da página é anexado automaticamente (ver src/lib/checkout.ts).
  checkoutUrl: "https://pay.hotmart.com/I106826236S?off=hn66n1i6&checkoutMode=10",

  // Âncora usada por todos os outros CTAs — leva o visitante até o card de oferta com o preço.
  offerAnchor: "#oferta",

  // Contador de escassez no topo da página (pedido do cliente em 21/07/2026).
  // Dois modos, nesta ordem de preferência:
  //   1. `deadline`: data/hora ISO real em que a oferta termina. É o modo honesto — use este
  //      sempre que a promoção tiver fim de verdade. Quando o prazo passa, a barra some sozinha.
  //   2. `sessionMinutes`: contagem por visitante, salva na sessão do navegador. Não corresponde
  //      a um prazo real (cada visitante vê o próprio relógio) — ver a ressalva em
  //      COPY-E-ALEGACOES.md antes de publicar assim.
  offerCountdown: {
    enabled: true,
    label: "Oferta por tempo limitado",
    deadline: null as string | null,
    sessionMinutes: 15,
  },

  // Garantia incondicional pedida explicitamente pelo cliente em 21/07/2026 (não veio dos
  // materiais originais nem do print do checkout Hotmart). Confirmar com Jailson/Hotmart que
  // essa política de reembolso de 7 dias existe de fato antes de publicar — ver COPY-E-ALEGACOES.md.
  guaranteeDays: 7 as number | null,

  // Confirmado via captura de tela do Instagram (@canil_imperador_romano) em 20/07/2026 —
  // conferir número antes de publicar (lido de uma imagem, risco de erro de dígito).
  instagramUrl: "https://www.instagram.com/canil_imperador_romano/",
  whatsappUrl: "https://wa.me/5579999733498",
  supportEmail: "[INSERIR CONTATO]",

  // Confirmado: perfil exibia "124 mil seguidores" em 20/07/2026 — usar a formulação
  // aproximada do briefing. Os demais números não têm fonte confirmada e ficam ocultos.
  followersCount: "aproximadamente 125 mil" as string | null,
  studentsCount: null as string | null,
  dogsCount: null as string | null,
  yearsExperience: "mais de 20 anos" as string | null,

  // Preencher apenas quando confirmado — usado na microcopy do hero e no FAQ.
  accessPeriod: null as string | null,

  termsUrl: "[INSERIR URL]",
  privacyUrl: "[INSERIR URL]",
  refundPolicyUrl: "[INSERIR URL]",

  cnpjOrResponsavel: null as string | null,
  // Confirmado via print do checkout real em 21/07/2026 (logo "hotmart" visível na página do produto).
  paymentPlatform: "Hotmart" as string | null,
};
