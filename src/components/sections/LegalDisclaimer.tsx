import { productConfig } from "@/config/product";

export function LegalDisclaimer() {
  return (
    <section className="border-y border-dourado/15 bg-carvao-800 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center text-xs leading-relaxed text-pedra-100/55">
          O conteúdo possui caráter educativo e apresenta a experiência prática relatada por{" "}
          {productConfig.authorName} no {productConfig.kennelName}. Cada cão possui necessidades
          individuais. Condições de saúde, dietas terapêuticas e mudanças importantes na
          alimentação devem ser avaliadas com um médico-veterinário, preferencialmente com atuação
          em nutrição. Resultados e aceitação podem variar.
        </p>
      </div>
    </section>
  );
}
