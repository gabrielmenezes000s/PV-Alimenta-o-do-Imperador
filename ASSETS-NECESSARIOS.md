# Assets necessários

## Fotografias — status atual

| Arquivo | Seção | Componente | Status |
|---|---|---|---|
| `public/images/hero/hero-jailson-rottweilers.png` | Hero (desktop) | `HeroSection.tsx` | ✅ Aplicada — versão "Hero Ultrawide" (21/07/2026), substitui a anterior |
| `public/images/opportunity/opportunity-preparo-canil.png` | "Existe uma forma mais simples..." | `OpportunitySection.tsx` | ✅ Aplicada |
| `public/images/opportunity/opportunity-rottweiler-perfil.png` | "Existe uma forma mais simples..." | `OpportunitySection.tsx` | ✅ Aplicada |
| `public/images/audience/audiencia-rottweilers-cutout.png` | "Para quem é / não é" (imagem central) | `AudienceSection.tsx` | ✅ Aplicada (PNG transparente) — `audiencia-rottweilers.png` (foto com fundo) não é mais usada aqui. |
| `public/images/offer/offer-bg-temple.png` | "Tudo o que você vai receber" (fundo) | `OfferSection.tsx` | ✅ Aplicada |
| `public/images/offer/garantia-7-dias.png` | Selo de garantia | `OfferSection.tsx` | ✅ Aplicada — substitui o selo em CSS puro. Ver pendência sobre a garantia de 7 dias não confirmada em `PENDENCIAS_PARA_PUBLICACAO.md` |
| `public/images/faq/faq-bg-embers.png` | "Perguntas frequentes" (fundo) | `FAQSection.tsx` | ✅ Aplicada (mesma textura de brasas) |
| `public/images/testimonials/testimonials-bg-embers.png` | "Veja o que tutores estão dizendo" (fundo) | `VideoTestimonials.tsx` | ✅ Aplicada (mesma textura de brasas) |
| `public/images/cta/cta-final-bg.png` | CTA final (fundo) | `FinalCTA.tsx` | ✅ Aplicada — substitui a foto emoldurada anterior (`cta-final-jailson-cozinha.png`, não é mais usada) |
| `public/images/cta/cta-final-jailson-cozinha.png` | CTA final | `FinalCTA.tsx` | ✅ Aplicada |
| `public/images/product/mockup-ebook.png` | "O que você vai aprender" | `LearnSection.tsx` | ✅ Aplicada |
| `public/images/hero/hero-jailson-rottweilers-mobile.png` | Hero (mobile) | `HeroSection.tsx` | ✅ Aplicada |
| `public/images/problem/problem-bg-embers.png` | "Você se identifica..." (fundo) | `ProblemSection.tsx` | ✅ Aplicada |
| `public/images/method/method-bg-embers.png` | "O Ciclo de Manejo do Imperador" (fundo) | `MethodCycleSection.tsx` | ✅ Aplicada (mesma textura de brasas) |
| `public/images/learn/learn-bg-smoke.png` | "O que você vai aprender" (fundo) | `LearnSection.tsx` | ✅ Aplicada (textura fumaça escura) |
| `public/images/opportunity/opportunity-bg-smoke.png` | "Existe uma forma mais simples..." (fundo) | `OpportunitySection.tsx` | ✅ Aplicada (mesma textura de fumaça) |
| `public/images/audience/audience-bg-smoke.png` | "Para quem é / não é" (fundo) | `AudienceSection.tsx` | ✅ Aplicada (mesma textura de fumaça) |
| `public/images/audience/stone-title-bg.png` | "Para quem é / não é" (fundo dos títulos) | `AudienceSection.tsx` | ✅ Aplicada — textura de pedra/mármore atrás dos dois títulos |
| `public/images/brand/logo-imperador-romano.png` | Header e Footer | `Header.tsx`, `Footer.tsx` | ✅ Aplicada (recortada em círculo, fundo original não é transparente) |
| `og-cover.webp` | Metadados (Open Graph) | `src/app/layout.tsx` | ⏳ Pendente |
| Favicon customizado | — | `src/app/favicon.ico` | ⏳ Pendente (ícone padrão do Next.js) |

## ⚠️ Atenção antes de publicar: imagens geradas por IA representando Jailson

As imagens aplicadas em `hero-jailson-rottweilers.png`, `opportunity-preparo-canil.png` e
`cta-final-jailson-cozinha.png` mostram uma pessoa **gerada por IA** em estilo estilizado
(armadura romana, iluminação cinematográfica) para representar Jailson — **não é uma fotografia
real dele**. Isso diverge da diretriz original do projeto ("nunca gerar uma pessoa parecida, usar
apenas fotos reais"). Antes de publicar a página:

1. Confirmar com Jailson se ele aprova usar essa persona estilizada em vez de fotos reais suas;
2. Se ele não aprovar, substituir pelos arquivos correspondentes por fotografias reais dele —
   basta trocar o arquivo em `public/images/.../` mantendo o mesmo nome, nenhum ajuste de código é
   necessário;
3. Ver a nota completa em `COPY-E-ALEGACOES.md`.

As demais imagens (`opportunity-rottweiler-perfil.png`, `audiencia-rottweilers.png`,
`mockup-ebook.png`) mostram apenas cães/produto, sem representar uma pessoa específica — risco
bem menor, mas também vale confirmar com o cliente se são fotos reais do canil ou geradas.

## Vídeos de depoimento (`src/config/testimonials.ts` → `videoTestimonials`)

3 vídeos reais aplicados (`public/videos/testimonials/freire.mp4`, `marlus-e-ana.mp4`,
`ronald.mp4`) — recebidos do cliente em 21/07/2026, pasta "PROVAS SOCIAL - TUTORES". Freire e
Ronald são verticais (9:16), Marlus e Ana é horizontal (16:9) — o modal (`VideoModal.tsx`) já
ajusta a proporção e a largura automaticamente por vídeo via o campo `orientation`. Nome do tutor
veio do arquivo; cidade/cão/raça/idade/tempo de uso/resumo ainda **não** foram informados (campos
`null`, ocultados pela UI) — ver `PENDENCIAS_PARA_PUBLICACAO.md` para o que falta confirmar antes
de publicar, incluindo autorização explícita de uso de cada tutor.

## Imagem central "Para quem é / não é" (`audiencia-rottweilers-cutout.png`)

Para o layout ficar igual à referência (cães "flutuando" no meio, entre as duas colunas de texto,
sem caixa/moldura), é preciso um **PNG com fundo transparente**, não uma foto de estúdio comum.
Especificação para gerar:

- **Formato:** PNG com canal alfa (fundo 100% transparente, sem chão, sem cenário, sem moldura).
- **Dimensão do canvas:** `1200 × 1400 px` (proporção ~6:7, levemente vertical).
- **Enquadramento:** os 4 Rottweilers (do filhote ao adulto, mesma composição atual) ocupando o
  centro do canvas, enquadrados da cabeça às patas, com uma margem transparente ao redor —
  não precisa preencher o canvas inteiro, o importante é não ter fundo/chão sólido.
- Pode manter a mesma pose/composição da imagem atual (`audiencia-rottweilers.png`), só precisa
  vir recortada (sem fundo).
- O componente já está preparado (`object-contain`, sem crop) para exibir essa imagem centralizada
  entre as duas colunas de texto, em `public/images/audience/audiencia-rottweilers-cutout.png`.

## Fundo da seção "Você se identifica..." (`problem-bg-embers.png`)

Textura de fundo escuro com brasas/fagulhas voando, aplicada via `object-cover` atrás dos cards de
ícones — não é uma foto de pessoa/produto, então tolera corte em qualquer proporção sem perder o
efeito. Recomendado:

- **Dimensão:** `1920 × 1200 px` (proporção ~1,6:1), PNG ou JPG.
- **Composição:** fundo quase preto (tom `carvão`, próximo de `#1a1410`), fagulhas/brasas alaranjadas
  espalhadas de forma **uniforme por toda a imagem** — evitar concentrar o efeito só em um canto,
  já que o corte muda de posição (topo/base no desktop largo, laterais no mobile).
- O código já aplica uma camada escura por cima (`bg-carvao-800/80`) para garantir contraste com o
  texto — pode gerar a imagem com brasas relativamente visíveis, o overlay já reduz a intensidade.

## Ícones

A página usa apenas SVGs inline via `src/components/ui/Icon.tsx` — não há necessidade de assets
de ícone.

## Mockup do e-book

`mockup-ebook.png` (versão "mocup png - oficial", aplicada em 21/07/2026) é um PNG transparente
1254×1254 mostrando a capa 3D com Jailson e os Rottweilers, usado em `LearnSection.tsx` via
`object-contain` (sem corte). Substitui a versão anterior ("mocup ebook 2"), que tinha o nome do
autor errado ("Ciaudio Gabriel") impresso na capa — corrigido nesta versão. O antigo mockup em CSS
puro (`ProductMockup.tsx`) não é mais utilizado nesta página — se precisar dele em outro contexto,
o componente ainda existe em `src/components/ui/ProductMockup.tsx`.
