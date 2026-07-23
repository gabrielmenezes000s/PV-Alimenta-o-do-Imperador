import Image from "next/image";
import { IconBadgeRow } from "@/components/ui/IconBadgeRow";
import { productConfig } from "@/config/product";

const badges = [
  { icon: "leaf" as const, label: "Alimentos naturais" },
  { icon: "calendar" as const, label: "Rotina organizada" },
  { icon: "check-circle" as const, label: "Aceitação observada" },
  { icon: "repeat" as const, label: "Processo repetível" },
  { icon: "paw" as const, label: "Do filhote ao idoso" },
];

export function OpportunitySection() {
  return (
    <section className="relative overflow-hidden bg-carvao py-10 sm:py-20">
      <Image
        src="/images/opportunity/opportunity-bg-smoke.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao/80" aria-hidden="true" />

      {/* No mobile: texto primeiro (contexto antes da imagem) e as duas fotos lado a lado,
          em vez de duas imagens gigantes empilhadas antes de qualquer explicação. */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[1.15fr_1.3fr_0.85fr] lg:gap-10">
        <div className="relative order-2 aspect-[3/4] w-full overflow-hidden rounded-lg border border-dourado/20 lg:order-1 lg:aspect-[4/3]">
          <Image
            src="/images/opportunity/opportunity-preparo-canil.png"
            alt={`${productConfig.authorName} preparando a alimentação no canil`}
            fill
            sizes="(min-width: 1024px) 30vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 col-span-2 text-center lg:order-2 lg:col-span-1 lg:text-left">
          <h2 className="font-display text-2xl font-bold leading-tight text-pedra-100 sm:text-3xl">
            Existe uma forma mais simples, natural e eficiente.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-pedra-100/75 sm:text-base">
            A Alimentação do Imperador não é uma receita pronta. É um método de manejo alimentar
            que organiza ingredientes frescos, uma rotina de preparo e uma forma prática de
            observar o seu cão.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-pedra-100/75 sm:text-base">
            {productConfig.authorName} começou a desenvolver essa rotina quando percebeu que
            alguns cães do {productConfig.kennelName} demonstravam pouco interesse pela ração. A
            partir daí, passou a testar, observar e organizar o que hoje está reunido no guia.
          </p>

          <IconBadgeRow items={badges} className="mt-6 justify-center lg:justify-start" />
        </div>

        <div className="relative order-3 aspect-[3/4] w-full overflow-hidden rounded-lg border border-dourado/20 lg:aspect-[4/5]">
          <Image
            src="/images/opportunity/opportunity-rottweiler-perfil.png"
            alt={`Rottweiler do ${productConfig.kennelName}`}
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
