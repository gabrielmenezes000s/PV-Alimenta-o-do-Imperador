import { productConfig } from "@/config/product";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "O Alimentação do Imperador serve somente para Rottweilers?",
    answer:
      "Não. O método nasceu dentro do Canil Imperador Romano, especializado em Rottweilers, mas o guia foi escrito para tutores de cães de diferentes raças e portes. A aplicação sempre precisa respeitar o porte, a idade, a mastigação e a saúde de cada cão.",
  },
  {
    question: "O guia também aborda cães adultos e idosos?",
    answer:
      "Sim. O material apresenta a rotina para a fase jovem, adulta e idosa, com adaptações de quantidade, textura e mastigação em cada uma delas.",
  },
  {
    question: "O material informa uma quantidade única para todos os cães?",
    answer:
      "Não. O guia ensina a observar peso, porte, idade, atividade e aceitação para ajustar a quantidade individualmente. Referências citadas para os Rottweilers adultos do canil (70 a 90 kg) não devem ser copiadas para cães de outro porte.",
  },
  {
    question: "Preciso ter experiência com alimentação natural?",
    answer:
      "Não. O guia foi organizado para começar do zero: ingredientes, preparo, cortes, horários e armazenamento explicados passo a passo, na ordem em que um tutor iniciante precisa aprender.",
  },
  {
    question: "O conteúdo é um curso ou um e-book?",
    answer:
      "É um e-book — um guia digital para ler e consultar sempre que precisar. Não inclui aulas em vídeo, comunidade ou acompanhamento individual.",
  },
  {
    question: "Como recebo o acesso?",
    answer: productConfig.paymentPlatform
      ? `O acesso é digital, liberado automaticamente pela ${productConfig.paymentPlatform} após a confirmação do pagamento.`
      : "O acesso é digital, liberado automaticamente pela plataforma de pagamento utilizada no checkout, logo após a confirmação da compra.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: productConfig.paymentPlatform
      ? `O pagamento é processado pela ${productConfig.paymentPlatform}${productConfig.installmentDisplay ? `, com opção de parcelamento em cartão (${productConfig.installmentDisplay}) ou à vista` : ""}. As opções exatas são exibidas no momento da compra.`
      : "As formas de pagamento disponíveis são exibidas no ambiente de pagamento no momento da compra.",
  },
  {
    question: "Existe garantia?",
    answer:
      productConfig.guaranteeDays !== null
        ? `Sim. Você tem ${productConfig.guaranteeDays} dias a partir da confirmação da compra para avaliar o material.`
        : "No momento não há um prazo de garantia divulgado nesta oferta. Trata-se de um produto digital de pagamento único; qualquer política de reembolso será informada no ambiente de pagamento.",
  },
];
