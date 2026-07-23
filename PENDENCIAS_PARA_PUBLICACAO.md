# Pendências para publicação

Lista central de tudo que precisa ser preenchido, confirmado ou substituído antes de colocar a
página no ar. Nada aqui aparece como placeholder cru na interface — os componentes ocultam ou
adaptam automaticamente o que ainda não foi preenchido (padrão usado em todo o projeto).

## 1. Comerciais e legais (`src/config/product.ts`)

| Campo | Estado atual | Ação necessária |
|---|---|---|
| `checkoutUrl` | `"#oferta"` (âncora de fallback) | Ainda falta o link real do produto na Hotmart — substituir antes de publicar |
| `paymentPlatform` | `"Hotmart"` ✅ | Confirmado via print do checkout em 21/07/2026 |
| `installmentDisplay` | `"9x de R$ 8,80"` ✅ | Confirmado via print do checkout em 21/07/2026 |
| `priceDisplay` | `"67,90"` ⚠️ | O print do checkout mostra "R$ 67,00 à vista" — diferença de R$0,90 do valor usado no site. Cliente confirmou manter 67,90 por ora, mas vale checar com Jailson/Hotmart qual é o valor realmente ativo antes de publicar. |
| `anchorPriceDisplay` | `"230,00"` ⚠️ | Âncora "de R$230 por R$67,90" pedida pelo cliente — sem fonte/comprovação de que R$230 já foi um preço real. Ver `COPY-E-ALEGACOES.md`. |
| `offerCountdown.deadline` | `null` ⚠️ | Contador do topo está no modo por sessão (15 min por visitante), ou seja, **a urgência anunciada não corresponde a um prazo real**. Definir uma data/hora real de término aqui, ou desligar com `enabled: false`. Ver `COPY-E-ALEGACOES.md`. |
| `guaranteeDays` | `7` ⚠️ | **Não confirmado** — pedido explícito do cliente em 21/07/2026, sem fonte nos materiais originais. **Confirmar com Jailson/Hotmart antes de publicar** que a garantia incondicional de 7 dias existe de fato na política de reembolso real. Ver `COPY-E-ALEGACOES.md`. |
| `accessPeriod` | `null` | Preencher se houver prazo de acesso definido (ex.: "acesso vitalício", "12 meses") |
| `termsUrl` / `privacyUrl` / `refundPolicyUrl` | `"[INSERIR URL]"` | Criar as páginas `/termos-de-uso`, `/politica-de-privacidade`, `/politica-de-reembolso` com conteúdo jurídico real e linkar |
| `supportEmail` | `"[INSERIR CONTATO]"` | Preencher com e-mail/WhatsApp de suporte real |
| `cnpjOrResponsavel` | `null` | Preencher se for exigido legalmente exibir |
| `whatsappUrl` | `https://wa.me/5579999733498` | **Conferir manualmente** — número lido de uma captura de tela do Instagram, risco de erro de dígito por OCR visual |

## 2. Provas sociais (`src/config/testimonials.ts`)

- `videoTestimonials`: 3 vídeos reais recebidos do cliente em 21/07/2026 (Freire, Marlus e Ana,
  Ronald) — já aplicados em `public/videos/testimonials/`. Nome do tutor veio do nome do arquivo;
  os demais campos (`city`, `dogName`, `breed`, `dogAge`, `timeUsingMethod`, `summary`) estão
  `null` e a UI já oculta essas linhas automaticamente. **Confirmar antes de publicar:**
  1. Autorização explícita de cada tutor para uso do vídeo na página;
  2. Cidade, nome/raça/idade do cão e tempo de uso de cada um;
  3. Um resumo curto do relato (frase real dita no vídeo, não inventada).
  4. `public/videos/testimonials/ronald.mp4` tem ~109 MB — recomendo compactar antes de publicar
     (ex.: reduzir bitrate/resolução) para não pesar o carregamento da página.
- `screenshotTestimonials`: vazio. Mesma regra — 4 prints de exemplo até serem substituídos.

## 3. Fotografias e vídeos (ver `ASSETS-NECESSARIOS.md` para a lista completa)

- ✅ Fotos das seções Hero, "Existe uma forma melhor", "Para quem é/não é", CTA final e mockup do
  guia já aplicadas.
- ⚠️ **Confirmar com Jailson**: as fotos que deveriam mostrar ele são imagens geradas por IA (estilo
  estilizado com armadura romana), não fotos reais — decisão pendente de aprovação dele antes de
  publicar. Ver `COPY-E-ALEGACOES.md`.
- `og-cover.webp` (Open Graph) — ainda pendente.
- Favicon customizado — ainda pendente (hoje é o padrão do Next.js).
- Vídeos de depoimento reais (`public/videos/testimonials/`) — ainda pendente, 5 placeholders na tela.

## 4. Rastreamento (`.env.local`, a partir de `.env.example`)

- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL` (hoje aponta para `https://alimentacaodoimperador.com.br`, um domínio de exemplo — confirmar o domínio real de publicação)

## 5. Conteúdo e alegações

- Revisão de Jailson sobre ingredientes, horários e cronogramas apresentados como exemplo
  (`LifeStagesSection.tsx`, `InsideGuideSection.tsx`, `OfferStackSection.tsx`)
- Checklist completo de veracidade em `CHECKLIST-DE-PUBLICACAO.md`
- Classificação de risco de cada bloco de copy em `COPY-E-ALEGACOES.md`

## 6. Observação sobre a fonte dos dados usados nesta implementação

Os fatos usados na copy foram checados contra: o e-book (`ALIMENTACAO_DO_IMPERADOR_EBOOK_COMPLETO.pdf`
e o prompt-fonte `ebook_alimentacao_do_imperador_gamma.md`, que confirma o nome "Jailson"), a
transcrição da entrevista original (`Audio - Ebook - Alimentação do Imperador.txt`) e a captura de
tela do Instagram (`@canil_imperador_romano`, ~124 mil seguidores em 20/07/2026). Nenhum dado
comercial (preço de checkout real, garantia, prazo de acesso, plataforma de pagamento) estava
presente nesses materiais — todos permanecem como pendência explícita acima, nunca inventados.
