import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Badge } from "@/components/ui/Badge";
import { IconBadgeRow } from "@/components/ui/IconBadgeRow";
import { Icon } from "@/components/ui/Icon";
import { productConfig } from "@/config/product";

const heroBadges = [
  { icon: "shield" as const, label: "Método simples e prático" },
  { icon: "book" as const, label: "Conteúdo real e acessível" },
  { icon: "paw" as const, label: "Para todas as raças, portes e idades" },
  { icon: "home" as const, label: "Baseado na rotina de um canil" },
];

const trustRow = [
  { icon: "lock" as const, label: "Compra 100% segura" },
  { icon: "bolt" as const, label: "Acesso imediato" },
  { icon: "star" as const, label: "Sem enrolação" },
];

const followersValue = productConfig.followersCount
  ? `+${productConfig.followersCount.replace("aproximadamente ", "")}`
  : null;

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-dourado/15 bg-carvao">
      {/* A imagem só vira plano de fundo a partir de sm. No mobile ela aparece como bloco no
          topo (ver abaixo) — texto e botão sobre a foto ficavam difíceis de ler na tela pequena. */}
      <div className="absolute inset-0 mx-auto hidden max-w-[2560px] sm:block">
        <Image
          src="/images/hero/hero-desktop-v2.png"
          alt={`${productConfig.authorName} ao lado de Rottweilers do ${productConfig.kennelName}`}
          fill
          priority
          sizes="(min-width: 2560px) 2560px, 100vw"
          className="object-cover sm:object-[68%_12%] lg:object-[65%_10%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-carvao via-carvao/75 to-transparent"
          aria-hidden="true"
        />

        {/* Selos flutuantes sobre a imagem — só a partir de sm, onde há espaço livre à direita.
            No mobile eles viram uma linha compacta dentro do conteúdo (abaixo). */}
        {followersValue ? (
          <div className="float-badge absolute right-[12%] top-[7%] hidden h-28 w-28 flex-col items-center justify-center rounded-full border border-dourado/40 bg-carvao/85 px-2 text-center shadow-lg backdrop-blur-sm sm:flex lg:right-[13%] lg:top-[8%] lg:h-32 lg:w-32">
            <p className="font-display text-lg font-bold leading-none text-dourado-300">
              {followersValue}
            </p>
            <p className="mt-1 text-[9px] uppercase leading-tight tracking-wide text-pedra-100/70">
              seguidores
            </p>
          </div>
        ) : null}

        {productConfig.yearsExperience ? (
          <div className="float-badge-delayed absolute right-[5%] top-[26%] hidden h-24 w-24 flex-col items-center justify-center rounded-full border border-dourado/40 bg-carvao/85 px-2 text-center shadow-lg backdrop-blur-sm sm:flex lg:right-[6%] lg:top-[27%] lg:h-28 lg:w-28">
            <p className="font-display text-base font-bold leading-tight text-dourado-300">
              {productConfig.yearsExperience}
            </p>
            <p className="mt-1 text-[9px] uppercase leading-tight tracking-wide text-pedra-100/70">
              de experiência
            </p>
          </div>
        ) : null}
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-10 pt-4 sm:min-h-[680px] sm:px-6 sm:py-24 lg:min-h-[760px] lg:py-32">
        {/* Imagem do topo no mobile: proporção idêntica à do arquivo (4:5), então aparece
            inteira, sem corte. */}
        <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-xl border border-dourado/20 shadow-lg sm:hidden">
          {/* Nome versionado (-v2) de propósito: o otimizador de imagens do Next cacheia por
              URL, então trocar o arquivo mantendo o mesmo nome fazia a versão antiga (sem o
              título) reaparecer de forma intermitente. Um nome novo garante cache limpo. */}
          <Image
            src="/images/hero/hero-mobile-titulo-v2.png"
            alt={`${productConfig.authorName} ao lado de Rottweilers do ${productConfig.kennelName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="flex max-w-xl flex-col items-center gap-4 text-center sm:gap-5 lg:items-start lg:text-left">
          {/* Título/subtítulo ocultos no mobile: a imagem do topo já traz esse texto embutido,
              então mostrá-lo de novo aqui duplicaria. No desktop a imagem é só fundo (sem texto),
              então o bloco reaparece. */}
          <div className="hidden sm:block">
            <span className="block font-display text-xs font-semibold uppercase tracking-[0.2em] text-dourado-300/90 sm:text-base sm:tracking-[0.3em]">
              Alimentação do
            </span>
            <h1 className="font-display text-[2.75rem] font-bold leading-[0.95] text-gradient-gold sm:text-7xl md:text-8xl">
              Imperador
            </h1>
            <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-dourado-300/90 sm:text-sm sm:tracking-[0.25em]">
              {productConfig.productSubtitle}
            </p>
          </div>
          {/* h1 acessível para o mobile: a imagem tem o título embutido, mas a página ainda
              precisa de um <h1> real no DOM para SEO e leitores de tela. */}
          <h1 className="sr-only sm:hidden">
            {productConfig.productName} — {productConfig.productSubtitle}
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-pedra-100/85 sm:text-base">
            O método de manejo alimentar desenvolvido por {productConfig.authorName} a partir da
            rotina e da experiência prática no {productConfig.kennelName}.
          </p>

          {/* Versão mobile dos selos: linha compacta no fluxo, sem sobrepor a imagem/título. */}
          {followersValue || productConfig.yearsExperience ? (
            <div className="flex w-full max-w-xs items-stretch justify-center gap-3 sm:hidden">
              {followersValue ? (
                <div className="flex-1 rounded-lg border border-dourado/40 bg-carvao/80 px-3 py-2 text-center backdrop-blur-sm">
                  <p className="font-display text-base font-bold leading-none text-dourado-300">
                    {followersValue}
                  </p>
                  <p className="mt-1 text-[9px] uppercase leading-tight tracking-wide text-pedra-100/70">
                    seguidores
                  </p>
                </div>
              ) : null}
              {productConfig.yearsExperience ? (
                <div className="flex-1 rounded-lg border border-dourado/40 bg-carvao/80 px-3 py-2 text-center backdrop-blur-sm">
                  <p className="font-display text-base font-bold leading-none text-dourado-300">
                    +20 anos
                  </p>
                  <p className="mt-1 text-[9px] uppercase leading-tight tracking-wide text-pedra-100/70">
                    de experiência
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          <Badge>Do filhote ao idoso</Badge>

          <IconBadgeRow items={heroBadges} className="justify-center lg:justify-start" />

          <div className="flex w-full flex-col items-center gap-3 pt-1 lg:items-start">
            <PrimaryButton
              href={productConfig.offerAnchor}
              trackAs="click_hero_cta"
              trackPayload={{ location: "hero" }}
            >
              <span className="sm:hidden">Quero aprender o método</span>
              <span className="hidden sm:inline">Quero aprender o método do Imperador</span>
            </PrimaryButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1 lg:justify-start">
            {trustRow.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-[11px] text-pedra-100/75 sm:text-xs">
                <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0 text-dourado-300" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
