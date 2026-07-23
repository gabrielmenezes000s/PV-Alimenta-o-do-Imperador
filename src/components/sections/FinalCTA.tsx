import Image from "next/image";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { IconBadgeRow } from "@/components/ui/IconBadgeRow";
import { productConfig } from "@/config/product";

const finalBadges = [
  { icon: "home" as const, label: "Método usado no canil" },
  { icon: "check-circle" as const, label: "Aplicação prática no dia a dia" },
  { icon: "paw" as const, label: "Do filhote ao idoso" },
  { icon: "shield" as const, label: "Você no controle da rotina" },
];

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-carvao">
      <div className="absolute inset-0 mx-auto max-w-[2560px]">
        <Image
          src="/images/cta/cta-final-bg.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[50%_18%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-carvao via-carvao/85 to-transparent sm:from-carvao sm:via-carvao/70 sm:to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col justify-center px-4 py-14 sm:min-h-[520px] sm:px-6 sm:py-20 lg:min-h-[560px]">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center lg:ml-auto lg:mr-0 lg:items-end lg:text-right">
          <h2 className="font-display text-2xl font-bold leading-tight text-pedra-100 sm:text-3xl md:text-4xl">
            Transforme a alimentação do seu cão a partir de hoje mesmo
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-pedra-100/75 sm:text-base">
            Mais organização, mais clareza e mais consciência em cada refeição — com o método que{" "}
            {productConfig.authorName} aplica no {productConfig.kennelName}.
          </p>

          <IconBadgeRow items={finalBadges} className="justify-center lg:justify-end" />

          <div className="flex flex-col items-center gap-3 lg:items-end">
            {/* CTA final leva direto ao checkout (verde, igual ao da oferta): o visitante já
                passou por toda a página e viu o preço, então aqui a ação é comprar. */}
            <CheckoutButton
              trackAs="click_offer_cta"
              trackPayload={{ location: "final_cta" }}
            >
              Quero acessar por R$ {productConfig.priceDisplay}
            </CheckoutButton>
            <p className="text-xs text-pedra-100/55">
              Acesso digital. Compra segura. Conteúdo educativo baseado em experiência prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
