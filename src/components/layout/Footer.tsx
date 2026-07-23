import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { productConfig } from "@/config/product";

const legalLinks = [
  { href: "/termos-de-uso", label: "Termos de uso" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/politica-de-reembolso", label: "Política de reembolso" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dourado/15 bg-black pt-8 text-pedra-100/60 sm:pt-12">
      {/* Mobile: rodapé enxuto e centralizado (marca, Instagram, links legais em linha).
          A partir de md volta a ser a grade de 3 colunas com o texto institucional. */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 text-center sm:px-6 md:grid-cols-3 md:gap-10 md:text-left">
        <div>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-dourado/60 shadow-[0_0_14px_rgba(201,162,75,0.4)]">
              <Image
                src="/images/brand/logo-imperador-romano.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="3rem"
                className="object-cover object-[50%_40%]"
              />
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-wide text-pedra-100">
              {productConfig.kennelName}
            </span>
          </div>
          <p className="mt-4 hidden max-w-xs text-xs leading-relaxed md:block">
            Compartilhando o método de alimentação natural que {productConfig.authorName} usa no
            dia a dia do {productConfig.kennelName}, para ajudar tutores a organizar a rotina do
            próprio cão.
          </p>
        </div>

        <div className="md:text-center">
          <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.2em] text-dourado-300 md:block">
            Siga nossa rotina
          </p>
          <div className="flex justify-center gap-3 md:mt-4">
            <a
              href={productConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Canil Imperador Romano"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dourado/25 text-dourado-300 transition-colors hover:border-dourado hover:bg-dourado/10"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.2em] text-dourado-300 md:block">
            Links importantes
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:mt-4 md:flex-col md:items-end md:gap-2"
            aria-label="Links legais"
          >
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs hover:text-dourado-300">
                {link.label}
              </a>
            ))}
            {productConfig.supportEmail && productConfig.supportEmail !== "[INSERIR CONTATO]" ? (
              <a href={`mailto:${productConfig.supportEmail}`} className="text-xs hover:text-dourado-300">
                Contato
              </a>
            ) : null}
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-dourado/10 px-4 pb-8 pt-6 sm:mt-10 sm:px-6 sm:pb-6">
        <p className="text-center text-[11px] leading-relaxed">
          © {year} {productConfig.kennelName}. Todos os direitos reservados.
          {productConfig.cnpjOrResponsavel ? ` ${productConfig.cnpjOrResponsavel}.` : ""}
          {" "}Resultados e necessidades variam entre os cães — este material tem caráter educativo
          e não substitui acompanhamento veterinário.
        </p>
      </div>
    </footer>
  );
}
