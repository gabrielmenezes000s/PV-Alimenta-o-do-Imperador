export type VideoTestimonial = {
  id: string;
  tutorName: string;
  // Campos abaixo ficam null até serem confirmados — a UI oculta a linha correspondente
  // em vez de mostrar um placeholder cru (ver padrão em PENDENCIAS_PARA_PUBLICACAO.md).
  city: string | null;
  dogName: string | null;
  breed: string | null;
  dogAge: string | null;
  timeUsingMethod: string | null;
  summary: string | null;
  thumbnailSrc: string | null;
  videoSrc: string | null;
  videoProvider: "local" | "youtube" | "vimeo";
  orientation: "vertical" | "horizontal";
};

// Preencher com depoimentos reais e autorizados. Nunca inventar conteúdo aqui —
// ver aviso obrigatório em COPY-E-ALEGACOES.md sobre a seção de provas sociais.
// Vídeos reais recebidos do cliente em 21/07/2026 (pasta "PROVAS SOCIAL - TUTORES"). Nome do
// tutor foi lido do nome do arquivo; cidade, cão, raça, idade, tempo de uso e resumo do relato
// ainda não foram informados — ficam null até o cliente confirmar (nunca inventados).
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "freire",
    tutorName: "Jaconias",
    city: "Alagoas",
    dogName: null,
    breed: null,
    dogAge: null,
    timeUsingMethod: null,
    summary: null,
    thumbnailSrc: "/images/testimonials/freire-poster.jpg",
    videoSrc: "/videos/testimonials/freire.mp4",
    videoProvider: "local",
    orientation: "vertical",
  },
  {
    id: "marlus-e-ana",
    tutorName: "Marlon e Ana",
    city: "Natal",
    dogName: null,
    breed: null,
    dogAge: null,
    timeUsingMethod: null,
    summary: null,
    thumbnailSrc: "/images/testimonials/marlus-e-ana-poster.jpg",
    videoSrc: "/videos/testimonials/marlus-e-ana.mp4",
    videoProvider: "local",
    orientation: "horizontal",
  },
  {
    id: "ronald",
    tutorName: "Ronaldy",
    city: "Fátima/BA",
    dogName: null,
    breed: null,
    dogAge: null,
    timeUsingMethod: null,
    summary: null,
    thumbnailSrc: "/images/testimonials/ronald-poster.jpg",
    videoSrc: "/videos/testimonials/ronald.mp4",
    videoProvider: "local",
    orientation: "vertical",
  },
];

// Dados de exemplo (placeholder), usados apenas em desenvolvimento para visualizar o layout.
// Marcados explicitamente como fictícios — remover antes de publicar. Nomes/cidades ficam como
// marcadores genéricos de propósito: nunca copiar nomes de depoimentos de páginas concorrentes.
export const exampleVideoTestimonials: VideoTestimonial[] = Array.from({ length: 5 }, (_, i) => ({
  id: `exemplo-${i + 1}`,
  tutorName: "[NOME DO TUTOR] (exemplo)",
  city: "[CIDADE]",
  dogName: "[NOME DO CÃO]",
  breed: "[RAÇA]",
  dogAge: "[IDADE]",
  timeUsingMethod: "[TEMPO DE USO]",
  summary: "\"Depoimento de exemplo — substituir por relato real e autorizado antes de publicar.\"",
  thumbnailSrc: null,
  videoSrc: null,
  videoProvider: "local" as const,
  orientation: "vertical" as const,
}));
