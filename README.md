# Alimentação do Imperador — Página de Vendas

Landing page de vendas do e-book **Alimentação do Imperador**, guia prático de alimentação natural
desenvolvido por Jailson no Canil Imperador Romano. Construída em Next.js (App Router) + TypeScript
+ Tailwind CSS v4.

## Stack

- Next.js 16 (App Router, React 19)
- TypeScript
- Tailwind CSS v4 (tokens de tema em `src/app/globals.css`, sem `tailwind.config`)
- Fontes: [Cinzel](https://fonts.google.com/specimen/Cinzel) (display/títulos) + [Inter](https://fonts.google.com/specimen/Inter) (corpo), via `next/font/google`
- Sem dependências externas de UI/ícones — ícones em `src/components/ui/Icon.tsx` (SVG inline)

## Como rodar

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de produção
npm run lint
```

> Nota de ambiente (Windows): se `next dev` (Turbopack) travar com erro de alocação de memória,
> rode com `npm run dev -- --webpack` como alternativa — mais lento para compilar, mas mais estável
> em máquinas com pouca RAM livre.

## Onde editar o quê

Nada de preço, link, depoimento ou pergunta de FAQ deve ser editado direto nos componentes —
tudo isso vive em `src/config/`:

| Arquivo | Controla |
|---|---|
| `src/config/product.ts` | Nome do produto, preço (R$ 67,90, pagamento único), link de checkout, garantia, redes sociais, dados de autoridade |
| `src/config/cycle.ts` | As 6 etapas do "Ciclo de Manejo do Imperador" (mecanismo central da oferta) |
| `src/config/modules.ts` | Os 8 itens do "o que você vai receber" na seção de oferta |
| `src/config/testimonials.ts` | Depoimentos em vídeo (array vazio por padrão — ver `ASSETS-NECESSARIOS.md`) |
| `src/config/faq.ts` | As 15 perguntas frequentes |

Copy das demais seções (headlines, cards de dor, etc.) vive diretamente nos componentes em
`src/components/sections/`, um arquivo por seção — ver classificação de risco de cada bloco de
texto em `COPY-E-ALEGACOES.md`.

## Estrutura

```
src/
  app/               layout, page, SEO (sitemap.ts, robots.ts), globals.css
  components/
    layout/          Header, Footer, AnnouncementBar, StickyMobileCTA, Tracking, ScrollTracker
    sections/        as 11 seções da página, uma por arquivo (ver ordem em src/app/page.tsx)
    ui/              PrimaryButton, CheckoutButton, Icon, Badge, IconBadgeRow, RomanColumns,
                     SectionHeading, ProductMockup, PlaceholderImage, VideoModal
  config/            product.ts, cycle.ts, modules.ts, testimonials.ts, faq.ts (fonte única de dados editáveis)
  lib/               analytics.ts (wrapper do dataLayer), checkout.ts (preserva UTM/fbclid no link de checkout)
public/
  images/, videos/, icons/   ver ASSETS-NECESSARIOS.md
```

## Checkout e UTM

Todo CTA de compra usa `src/components/ui/CheckoutButton.tsx`, que sempre aponta para
`productConfig.checkoutUrl` e, no cliente, anexa os parâmetros `utm_source/medium/campaign/content/term`
e `fbclid` presentes na URL da página (`src/lib/checkout.ts`). Enquanto não houver um link de
checkout real, `checkoutUrl` fica como `#oferta` (rola até o card de oferta) — substituir antes de
publicar.

## Mockup do produto sem arte final

`src/components/ui/ProductMockup.tsx` desenha a capa do e-book em CSS puro (sem depender de artwork
pronto). Trocar por uma renderização fotográfica real assim que a capa definitiva existir.

## Fotografias e vídeos pendentes

Toda imagem/vídeo real ainda não entregue aparece como um placeholder visual identificado
(`src/components/ui/PlaceholderImage.tsx`), nunca como um `<img>` quebrado. Lista completa do que
falta capturar/produzir: `ASSETS-NECESSARIOS.md`.

## Rastreamento (GTM / GA4 / Meta Pixel)

Nenhum ID é hardcoded. Copie `.env.example` para `.env.local` e preencha:

```
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Sem esses valores, os scripts simplesmente não são injetados (útil em desenvolvimento). Eventos do
`dataLayer` disparados pela página: `page_view`, `view_hero`, `click_hero_cta`, `view_testimonial`,
`play_testimonial_video`, `click_offer_cta`, `faq_open`, `scroll_25/50/75/90` — ver `src/lib/analytics.ts`.

## Antes de publicar

Ver checklist completo em `CHECKLIST-DE-PUBLICACAO.md` e a lista de campos pendentes em
`PENDENCIAS_PARA_PUBLICACAO.md`. Resumo do que está pendente por padrão:

1. Link de checkout real, plataforma de pagamento e (se houver) prazo de garantia/acesso em `src/config/product.ts`
2. Depoimentos reais e autorizados em `src/config/testimonials.ts` (hoje vazio → a página mostra
   dados de exemplo claramente identificados como placeholder)
3. Fotografias e vídeos reais substituindo os placeholders (`ASSETS-NECESSARIOS.md`)
4. IDs de rastreamento em `.env.local`
5. Revisão do responsável (Jailson) sobre ingredientes, horários e alegações — ver `COPY-E-ALEGACOES.md`
6. Conferir o número de WhatsApp em `productConfig.whatsappUrl` (foi lido de uma captura de tela do Instagram)
