# Checklist de Publicação

Não publicar a página em produção até marcar todos os itens abaixo.

## Conteúdo e alegações

- [ ] Revisão de Jailson sobre todo o conteúdo do e-book e as alegações da página (ver `COPY-E-ALEGACOES.md`)
- [ ] Confirmação dos ingredientes citados (lista bate com o que Jailson realmente usa hoje)
- [ ] Confirmação dos horários/rotina apresentados como exemplo em `LifeStagesSection.tsx`
- [ ] Revisão dos erros de transcrição/digitação em toda a copy
- [ ] Nenhuma alegação da lista proibida (`COPY-E-ALEGACOES.md`) entrou na página em nenhuma seção
      — atenção especial: a transcrição original da entrevista contém afirmações sobre ração e
      câncer e sobre longevidade garantida que foram **deliberadamente excluídas** da página; não
      reintroduzi-las em edições futuras.

## Provas sociais

- [ ] Autorização por escrito de cada tutor cujo depoimento (vídeo ou print) for publicado
- [ ] Ocultação de dados pessoais sensíveis nos prints (telefone, endereço, sobrenome quando aplicável)
- [ ] `src/config/testimonials.ts` preenchido com depoimentos reais — `videoTestimonials` e
      `screenshotTestimonials` não podem ir ao ar vazios usando os dados de exemplo
- [ ] Campo `city` de cada depoimento em vídeo preenchido com a cidade real do tutor
- [ ] Nenhum depoimento foi editado de forma a alterar o sentido do relato original

## Oferta

- [ ] Preço (R$ 67,90, pagamento único) confirmado como definitivo em `src/config/product.ts`
- [ ] Link de checkout real em `productConfig.checkoutUrl` (hoje é `#oferta`, um fallback que rola
      até o card de oferta — não é um link de pagamento funcional)
- [ ] Plataforma de pagamento preenchida em `productConfig.paymentPlatform`
- [ ] Garantia: `guaranteeDays` preenchido com prazo real, ou mantido `null` se não houver garantia
      (a seção de confiança já se adapta automaticamente — ver `TrustSection.tsx`)
- [ ] Prazo de acesso preenchido em `productConfig.accessPeriod`, se houver um prazo definido

## Assets

- [ ] Todas as fotografias reais substituindo os placeholders listados em `ASSETS-NECESSARIOS.md`
- [ ] Favicon customizado substituindo o ícone padrão do Next.js
- [ ] Imagem de Open Graph (`og-cover.webp`) criada e testada em um debugger de preview social

## Links e páginas legais

- [ ] `/termos-de-uso` existe e está com conteúdo real (hoje é um link do rodapé sem página criada)
- [ ] `/politica-de-privacidade` existe e está com conteúdo real
- [ ] `/politica-de-reembolso` existe e está com conteúdo real (ou removida do rodapé se não houver
      política própria além do direito de arrependimento previsto em lei)
- [ ] E-mail de suporte real em `productConfig.supportEmail`
- [ ] **Número de WhatsApp em `productConfig.whatsappUrl` conferido manualmente** — foi lido de uma
      captura de tela do Instagram (`screencapture-instagram-canil-imperador-romano...png`) e pode
      conter erro de dígito
- [ ] CNPJ ou dados do responsável preenchidos em `productConfig.cnpjOrResponsavel`, se aplicável

## Rastreamento

- [ ] `.env.local` criado a partir de `.env.example` com os IDs reais (GTM/GA4/Meta Pixel)
- [ ] Eventos testados no modo de visualização do GTM: `page_view`, `click_hero_cta`,
      `view_testimonial`, `play_testimonial_video`, `click_offer_cta`, `faq_open`, `scroll_25/50/75/90`
- [ ] Evento de `purchase`/`begin_checkout` conectado à plataforma de pagamento real (hoje o botão
      de oferta só dispara `click_offer_cta` — a conversão em si depende da integração do checkout)
- [ ] Confirmar que os parâmetros de UTM/fbclid da URL da página estão sendo anexados ao link de
      checkout real (`src/lib/checkout.ts`) depois que ele for preenchido

## Testes técnicos

- [ ] `npm run build` e `npm run lint` limpos
- [ ] Teste mobile real (não apenas emulador) — Safari iOS e Chrome Android
- [ ] Teste dos vídeos de depoimento (thumbnail, play, modal, fechamento)
- [ ] Teste de todos os CTAs (âncoras rolam para a seção certa, sticky mobile CTA aparece após o
      hero e some sobre o card de oferta)
- [ ] Teste de performance (Lighthouse — mobile e desktop) após os assets reais entrarem, já que
      fotos/vídeos reais pesam mais que os placeholders atuais
- [ ] Teste de acessibilidade: navegação por teclado no FAQ (acordeão) e nos modais (vídeo/print),
      incluindo fechamento com Esc
