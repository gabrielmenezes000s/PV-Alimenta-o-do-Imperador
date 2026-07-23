# Copy e Alegações — Classificação de Risco

Classificação de cada bloco relevante de copy da página, conforme as regras da seção 10 do
"PROMPT MESTRE PARA O CLAUDE CODE" (briefing da página de vendas). Categorias:

- 🟢 **Seguro para publicação** — não faz alegação de resultado, ou já vem devidamente enquadrada.
- 🟡 **Precisa de validação** — factualmente correto na forma como está escrito, mas depende de
  revisão (do próprio Jailson ou jurídica) antes de ir ao ar.
- 🟠 **Depende de prova** — só pode ser publicado quando o dado/depoimento citado existir e for real
  (hoje está com placeholder e é ocultado automaticamente pela UI até ser preenchido).
- 🔵 **Depende de autorização** — depoimento/imagem de terceiro; só publicar com consentimento
  explícito.
- 🔴 **Não recomendado** — não usar nesta forma; risco de promessa impossível de sustentar.

## Sobre a referência visual usada no layout atual

A estrutura visual desta página (ordem das seções, faixa de ícones, ciclo com círculos numerados,
card de oferta em 3 colunas, galeria de depoimentos, etc.) foi construída para replicar uma imagem
de referência fornecida pelo cliente. Essa imagem é, com alta probabilidade, a página real do
concorrente **"Protocolo Dieta Raiz"** (Dr. Matheus Dejavite) — ela bate com o perfil descrito em
`PESQUISA DE MERCADO - ALIMENTAÇÃO DO IMPERADOR.txt` (mesmo preço R$ 67,90, mesmo parcelamento
"12x de R$ 7,02", mesma "garantia incondicional de 7 dias", checkout Kiwify).

**Decisão registrada:** replicar apenas o *layout* (estrutura visual, tipos de seção, composição)
é uma prática comum e aceitável de benchmarking de design. Copiar a *copy* específica de bônus,
garantia e plataforma de pagamento do concorrente **não foi feito**, porque esses itens não existem
no produto real de Jailson — publicá-los seria propaganda enganosa. Todo texto da página é original
e reflete o conteúdo real do e-book (ver seção seguinte sobre a fonte). Se o cliente confirmar
bônus, garantia ou plataforma de pagamento reais no futuro, atualizar `src/config/product.ts` e
`src/config/modules.ts` — nunca copiar os valores específicos do concorrente.

## ⚠️ Imagens geradas por IA representando Jailson (pendente de aprovação)

As fotos aplicadas em `HeroSection.tsx`, `OpportunitySection.tsx` (imagem esquerda) e
`FinalCTA.tsx` mostram uma pessoa **gerada por IA** — em armadura romana estilizada, com
iluminação cinematográfica — para representar Jailson. Não são fotografias reais dele. Isso
contraria a diretriz original e explícita do projeto (seção 8 e 11 do briefing): "Nunca utilizar
uma pessoa genérica para representar Jailson", "Não modificar o rosto de Jailson. Não gerar uma
pessoa parecida. Use apenas fotos reais disponíveis", e a orientação de evitar "aparência de jogo
medieval" / "gladiadores genéricos".

**Classificação: 🟡 precisa de validação.** Essas imagens foram fornecidas pelo cliente
explicitamente para esta implementação, então foram aplicadas — mas a autoridade de Jailson na
página (seção 4 e 11 do briefing) se apoia em ele ser uma pessoa real, com rotina real. Publicar um
avatar de IA no lugar dele enfraquece essa base e pode gerar estranhamento com quem já o segue no
Instagram. Recomendação: Jailson (ou quem decide pelo canil) precisa aprovar explicitamente essa
escolha estética antes de publicar, ciente de que diverge da própria diretriz que ele definiu. Ver
`ASSETS-NECESSARIOS.md` para instruções de como substituir por fotos reais, se decidido.

## Fonte e por que algumas afirmações do material bruto foram excluídas

A transcrição original da entrevista com Jailson (`Audio - Ebook - Alimentação do Imperador.txt`)
contém, ao final, afirmações do tipo "cachorro que come ração desenvolve câncer" e promessas de
"longevidade" ligadas à alimentação natural. O e-book final (gerado a partir do prompt em
`ebook_alimentacao_do_imperador_gamma.md`) **já filtra essas afirmações deliberadamente** — a
diretriz editorial do próprio e-book instrui: "Não afirmar que ração causa câncer" e "Não afirmar
que alimentação natural cura ou previne doenças". A página segue a mesma régua do e-book, não a
entrevista bruta. Não reintroduzir essas frases em edições futuras da copy.

## Hero (`HeroSection.tsx`)

| Trecho | Classificação | Nota |
|---|---|---|
| "O método de manejo alimentar desenvolvido por Jailson..." | 🟢 | Fala de organizar/aprender, não de resultado biológico garantido. |
| "+125 mil seguidores acompanham nossa rotina" | 🟢 | Confirmado por captura de tela do Instagram (`@canil_imperador_romano`, "124 mil seguidores" em 20/07/2026) — não é estimativa inventada. |
| "Mais de 20 anos de experiência com cães" | 🟡 | Informado diretamente pelo cliente durante a sessão (não estava nos materiais brutos originalmente revisados). Campo `productConfig.yearsExperience`. Confirmar com Jailson antes de publicar se o número exato é "mais de 20 anos" mesmo. |
| Trio "Compra 100% segura / Acesso imediato / Sem enrolação" | 🟢 | Deliberadamente **não** usa "satisfação garantida" (como no layout de referência) para não insinuar uma garantia que não existe. |
| Preço na Hero | — | Removido a pedido do cliente; preço agora só aparece na seção de oferta (`OfferSection.tsx`) e no CTA sticky mobile. |

## Faixa dourada, dor, oportunidade, ciclo de manejo, o que você vai aprender

🟠 **Depende de prova / risco assumido pelo cliente** — a seção "Você se identifica com alguma
dessas situações?" (`ProblemSection.tsx`) foi alterada a pedido explícito do cliente em 21/07/2026
para usar a mesma copy de sintomas físicos da imagem de referência ("Seu cão come com dificuldade
ou recusa a comida", "Fezes moles, odor forte e pouca regularidade", "Secreção nos olhos e
problemas de pele", "Pelo opaco, queda excessiva e coceiras", "Falta de energia e disposição no dia
a dia"), substituindo a versão anterior (dúvidas de processo, sem alegação de saúde).

**Risco:** listar esses sintomas ao lado do produto insinua que o guia resolve/previne problemas de
saúde (diarreia, dermatite, queda de pelo, letargia) — o e-book não comprova esse resultado clínico
e o restante da página reforça "não substitui acompanhamento veterinário". Isso pode configurar
propaganda enganosa (CDC) se um cliente entender a seção como promessa de resultado. Fui avisado
disso, o cliente optou por manter mesmo assim, ciente do risco — decisão dele, registrada aqui.
Se decidir reverter, a versão segura está no histórico de `ProblemSection.tsx` (dúvidas de
processo, ex.: "qual quantidade oferecer?", "como preparar sem passar horas na cozinha?").

O restante da seção (ciclo de manejo, "o que você vai aprender") segue 🟢 seguro — explicação
honesta do método e descrição do conteúdo real do e-book. O "Ciclo de Manejo do Imperador"
(`MethodCycleSection.tsx`, `src/config/cycle.ts`) segue sendo descrito como forma didática de
organizar a experiência prática de Jailson — não um protocolo científico ou veterinário validado.

## Para quem é / não é (`AudienceSection.tsx`)

🟢 Segura. A lista "para quem não é" evita qualquer alegação clínica (fala de expectativa do
tutor, não de diagnóstico) e reforça que o guia não busca ser prescrição veterinária.

## Depoimentos em vídeo (`VideoTestimonials.tsx`)

🔵 **Depende de autorização** — 3 vídeos reais recebidos do cliente em 21/07/2026 (Freire, Marlus e
Ana, Ronald; ver `src/config/testimonials.ts`). Apenas o nome do tutor (lido do nome do arquivo) foi
preenchido — cidade, cão, raça, idade, tempo de uso e um resumo do relato **não foram inventados**,
ficam `null` até o cliente confirmar (a UI oculta essas linhas automaticamente). Antes de publicar:

1. Obter autorização explícita de cada tutor para uso do vídeo na página de vendas;
2. Preencher cidade/cão/raça/idade/tempo de uso reais em `src/config/testimonials.ts`;
3. Escrever o `summary` como uma frase realmente dita no vídeo, não uma paráfrase inventada.

## Oferta (`OfferSection.tsx`)

| Campo | Classificação | Nota |
|---|---|---|
| Checklist da esquerda (9 itens) | 🟢 | Todos são partes reais do e-book — não inclui "tabela por peso/castração/atividade", "11 dietas prontas", "guia de transição da ração" ou "acesso vitalício" como aparecem na referência, porque nenhum desses itens existe no produto real. |
| Caixa central "Como o guia está organizado" | 🟢 | Usa 4 itens de `src/config/modules.ts` (`offerStack`), partes do mesmo e-book — **não** foi rotulada como "bônus exclusivos" para não sugerir produtos independentes que não existem (ao contrário do "Caldo de Ossos I/II", "Iogurte Natural" da referência). |
| Preço R$ 67,90, pagamento único ou 9x de R$8,80 | 🟢 | R$67,90 confirmado no briefing (com ressalva de divergência de R$0,90 vs. o print do Hotmart, ver `PENDENCIAS_PARA_PUBLICACAO.md`); parcelamento "9x de R$8,80" e plataforma Hotmart confirmados via print real do checkout em 21/07/2026 — **não** é o "12x de R$7,02"/Kiwify da referência, que pertence ao concorrente. |
| "De R$ 230,00 por R$ 67,90" (âncora de valor) | 🟠 **Depende de prova / risco assumido pelo cliente** | Adicionado a pedido explícito do cliente em 21/07/2026 (`productConfig.anchorPriceDisplay`). O briefing original confirmava explicitamente "sem preço de/por" — essa mudança reverte isso. O valor R$230 **não tem fonte/comprovação** de que já foi ou seria o preço real do produto; exibir como "de/por" pode configurar propaganda enganosa (CDC) se não houver como comprovar que R$230 foi um preço genuíno em algum momento. Cliente foi avisado e optou por manter mesmo assim. Se puder, confirmar com Jailson uma justificativa real para os R$230 (ex.: valor de consultoria avulsa, referência de mercado) antes de publicar. |
| Link de checkout | 🟠 | `productConfig.checkoutUrl` está como `#oferta` (âncora de fallback). Substituir antes de publicar. |
| "Garantia incondicional de 7 dias" + selo | 🟠 **Depende de prova / risco assumido pelo cliente** | Adicionado a pedido explícito do cliente em 21/07/2026 (`productConfig.guaranteeDays = 7`). **Não veio confirmado** nos materiais originais nem no print do checkout Hotmart — antes era `null` justamente por falta de confirmação. Publicar essa garantia sem que ela exista de fato na política de reembolso real (Hotmart/Jailson) é propaganda enganosa e pode gerar reembolso obrigatório por lei mesmo que não fosse a intenção. Cliente foi avisado e optou por manter. **Ação obrigatória antes de publicar:** confirmar com Jailson que a política de reembolso de 7 dias incondicional realmente existe e está configurada no Hotmart. |

## Contador "Oferta por tempo limitado" (`CountdownBar.tsx`)

🟠 **Depende de prova / risco assumido pelo cliente** — barra fixa no topo, pedida pelo cliente em
21/07/2026. Configurada em `productConfig.offerCountdown`, que aceita dois modos:

- **`deadline`** (recomendado): data/hora real em que a promoção termina, igual para todos os
  visitantes. Quando o prazo passa, a barra some sozinha. É o único modo em que a frase "oferta por
  tempo limitado" é verdadeira. Hoje está `null`.
- **`sessionMinutes`** (modo atual, 15 min): cada visitante vê o próprio relógio, iniciado na
  primeira visita. **Não existe prazo real** — a oferta continua disponível pelo mesmo preço depois
  que o contador zera, inclusive para o mesmo visitante em outra sessão.

O modo por sessão é comum no mercado, mas anunciar urgência que não existe é exatamente o que o
CDC (art. 37) trata como publicidade enganosa, e é o tipo de coisa que aparece em reclamação de
consumidor. Recomendação: definir uma data real em `deadline` (ex.: fim de uma campanha) ou
desligar o contador (`enabled: false`). Se o cliente optar por manter o modo por sessão, é decisão
dele, ciente disso.

## FAQ (`faq.ts`)

🟡 Reduzida de 15 para 8 perguntas (pedido do cliente, layout 4+4). Na escolha original, eu tinha
priorizado manter as duas perguntas com função de proteção/disclaimer — "substitui veterinário?" e
"quantidade única para todos os cães?". Em 21/07/2026 o cliente pediu para trocar a pergunta
"substitui veterinário?" por "Preciso ter experiência com alimentação natural?" — ela saiu da lista
visível. **Nota:** essa era a única pergunta que dizia explicitamente "não substitui consulta,
diagnóstico ou prescrição de um médico-veterinário" de forma isolada; esse mesmo aviso ainda existe
em outros pontos da página (rodapé, `LegalDisclaimer.tsx`), então a página não ficou sem esse
disclaimer — só não tem mais uma pergunta de FAQ dedicada a ele. As respostas restantes seguem
reforçando "resultados variam" e "não generaliza quantidade" onde cabível, com linguagem hedged
para garantia, prazo de acesso e forma de pagamento enquanto esses dados não forem confirmados em
`productConfig`.

## CTA final e rodapé

🟢 Seguros. Headline e subtítulo do CTA final evitam prometer "mais saúde, mais disposição e muito
mais qualidade de vida" (como na referência) — usam "mais organização, mais clareza e mais
consciência", que descreve o conteúdo educativo, não um resultado biológico. O aviso legal
obrigatório (`LegalDisclaimer.tsx`) está sempre visível antes do rodapé. O rodapé só exibe o ícone
do Instagram (único canal confirmado) — não inclui YouTube/TikTok/Facebook, presentes na
referência mas não confirmados para este cliente.

## Lista de alegações proibidas (referência rápida)

Não usar em nenhuma copy futura, mesmo em teste A/B:

- "Ração causa câncer" / "alimentação natural evita ou previne câncer"
- "Seu cão viverá mais" / "seu cão ganhará X anos de vida" / "longevidade garantida"
- "Nunca ficará doente" / "sem riscos"
- "Serve para qualquer cão sem restrições" ou generalizar a quantidade de um cão para todos
- "500 a 600 gramas" (ou qualquer quantidade do canil) como recomendação universal
- Leite como recomendação geral (é uma particularidade do canil, não uma instrução para o leitor)
- "Satisfação garantida" ou "garantia incondicional de X dias" sem confirmação real
- "11 dietas prontas", "tabela por peso/castração/atividade", "caldo de ossos", "iogurte natural",
  "acesso vitalício", "12x de R$ 7,02", "pagamento via Kiwify" — itens do concorrente que não
  existem neste produto
- "Comprovadamente superior em todos os casos"
- "Substitui consulta ou prescrição veterinária"
- Apresentar o Ciclo de Manejo do Imperador como "protocolo científico" ou "método veterinário validado"
- Atribuir a Jailson formação veterinária, título de nutricionista, certificação ou premiação não comprovada

## Regra geral para quem for editar copy depois

Ao adicionar qualquer frase nova que descreva um *resultado* (disposição, pelagem, peso, aceitação,
etc.), sempre perguntar: isso é (a) o que o conteúdo ensina, (b) o que Jailson observou, ou (c) o
que um cliente relatou? Enquadrar explicitamente com "o guia ensina...", "Jailson relata...", ou
"este tutor percebeu..." — nunca apresentar como fato médico genérico. E ao adaptar qualquer
elemento visual de uma página de referência, replicar a **estrutura**, nunca a **copy factual**
(bônus, preço, garantia, número de clientes) sem confirmar que é real para este produto.
