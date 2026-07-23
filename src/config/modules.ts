// Conteúdo real do guia, usado na seção de oferta (o que a pessoa recebe). Os itens não
// representam bônus independentes — são partes do mesmo e-book, apresentadas de forma honesta
// (ver COPY-E-ALEGACOES.md, regra de ancoragem da seção de oferta).

export type OfferStackItem = {
  number: number;
  title: string;
  description: string;
};

export const offerStack: OfferStackItem[] = [
  {
    number: 1,
    title: "Guia principal Alimentação do Imperador",
    description: "A visão completa do manejo alimentar aplicado por Jailson.",
  },
  {
    number: 2,
    title: "Ciclo de Manejo do Imperador",
    description: "O processo de selecionar, preparar, servir, observar, ajustar e repetir.",
  },
  {
    number: 3,
    title: "Mapa de refeição e petiscos",
    description: "O que Jailson utiliza em cada tipo de oferta e por que ele mantém os momentos separados.",
  },
  {
    number: 4,
    title: "Cronogramas por fase de vida",
    description: "Referências para filhote, jovem, adulto e idoso.",
  },
  {
    number: 5,
    title: "Guia de preparo e organização",
    description: "Cozimento, porcionamento, refrigeração, congelamento e rotina para um ou mais cães.",
  },
  {
    number: 6,
    title: "Guia de cortes e texturas",
    description: "Adaptação conforme idade e capacidade de mastigação.",
  },
  {
    number: 7,
    title: "Manual de observação e ajustes",
    description: "Como Jailson interpreta sobra, fome, aceitação, atividade e crescimento.",
  },
  {
    number: 8,
    title: "Lista de erros a evitar",
    description: "Cuidados com temperos, excesso de gordura e partes inadequadas à mastigação.",
  },
];
