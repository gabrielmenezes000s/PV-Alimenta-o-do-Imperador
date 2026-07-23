import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CountdownBar } from "@/components/layout/CountdownBar";
import { productConfig } from "@/config/product";

const navLinks = [
  { href: "#metodo", label: "O método" },
  { href: "#aprender", label: "O que você vai aprender" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#perguntas", label: "Perguntas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-dourado/15 bg-carvao/95 backdrop-blur-md">
      <CountdownBar />

      {/* No mobile o topo fica só com o contador (logo e botão saem, como na referência);
          no desktop segue a barra completa de navegação. */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:flex sm:px-6">
        <a href="#topo" className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-dourado/60 shadow-[0_0_14px_rgba(201,162,75,0.45)] sm:h-14 sm:w-14">
            <Image
              src="/images/brand/logo-imperador-romano.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 640px) 3.5rem, 2.5rem"
              className="object-cover object-[50%_40%]"
            />
          </span>
          <span className="font-display text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-pedra-100 sm:text-sm sm:tracking-[0.15em]">
            Imperador
            <br />
            Romano
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegação da página">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-pedra-100/75 transition-colors hover:text-dourado-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Rola para a oferta (não vai direto ao checkout) — o preço é revelado lá.
            Rótulo responsivo num único botão: duas instâncias com `hidden`/`sm:hidden` não
            funcionam aqui, porque o `inline-flex` do PrimaryButton vence o `hidden` no CSS
            gerado e as duas apareciam — foi o que causava rolagem horizontal no mobile. */}
        <PrimaryButton
          href={productConfig.offerAnchor}
          size="md"
          className="shrink-0 px-4 text-xs sm:px-6 sm:text-sm"
          trackAs="click_hero_cta"
          trackPayload={{ location: "header" }}
        >
          <span className="sm:hidden">Acessar</span>
          <span className="hidden sm:inline">Quero acesso agora</span>
        </PrimaryButton>
      </div>
    </header>
  );
}
