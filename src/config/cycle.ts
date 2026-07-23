// O mecanismo central da oferta — uma forma didática de organizar a experiência prática de
// Jailson, não um protocolo científico ou veterinário validado.
export type CycleStep = {
  number: number;
  title: string;
  description: string;
};

export const managementCycle: CycleStep[] = [
  { number: 1, title: "Selecionar", description: "Escolher ingredientes adequados à rotina e à fase do cão." },
  { number: 2, title: "Preparar", description: "Organizar a refeição principal e os petiscos de forma simples." },
  { number: 3, title: "Servir", description: "Respeitar horário, textura, corte e capacidade de mastigação." },
  { number: 4, title: "Observar", description: "Acompanhar aceitação, apetite, sobra, disposição e comportamento." },
  { number: 5, title: "Ajustar", description: "Adaptar quantidade, variedade, frequência e consistência." },
  { number: 6, title: "Repetir", description: "Criar uma rotina prática, organizada e sustentável." },
];
