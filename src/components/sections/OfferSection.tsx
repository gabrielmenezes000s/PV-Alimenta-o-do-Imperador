import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { Icon } from "@/components/ui/Icon";
import { offerStack } from "@/config/modules";
import { productConfig } from "@/config/product";

const checklist = [
  "Guia completo em PDF",
  "Ciclo de Manejo do Imperador",
  "Mapa de refeição e petiscos",
  "Cronogramas por fase de vida (filhote ao idoso)",
  "Guia de preparo e organização",
  "Guia de cortes e texturas",
  "Manual de observação e ajustes",
  "Lista de erros a evitar",
  "Leitura pelo celular, tablet ou computador",
];

// Destaque visual de 4 blocos do guia — não são bônus independentes, ver COPY-E-ALEGACOES.md.
const highlighted = offerStack.slice(1, 5);

const trustIcons: { icon: "bolt" | "lock" | "card"; label: string }[] = [
  { icon: "bolt", label: "Acesso imediato após a compra" },
  { icon: "lock", label: "Ambiente 100% seguro" },
  ...(productConfig.paymentPlatform
    ? [{ icon: "card" as const, label: `Pagamento via ${productConfig.paymentPlatform}` }]
    : []),
];

export function OfferSection() {
  return (
    <section id="oferta" className="relative scroll-mt-24 overflow-hidden bg-carvao-800 py-10 sm:py-20">
      <Image
        src="/images/offer/offer-bg-temple.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao-800/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Tudo o que você vai receber"
          subtitle="Conteúdo completo para você aplicar hoje mesmo — sem bônus inflados, só o que o guia realmente entrega."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-start">
          <ul className="space-y-3 rounded-xl border border-dourado/15 bg-grafite/30 p-6">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-pedra-100/85">
                <span className="mt-0.5 shrink-0" aria-hidden="true">✅</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-dourado/25 bg-carvao p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-dourado-300">
              Como o guia está organizado
            </h3>
            <ul className="mt-5 space-y-5">
              {highlighted.map((item) => (
                <li key={item.number} className="flex items-start gap-3">
                  <Icon name="gift" className="mt-0.5 h-5 w-5 shrink-0 text-dourado-300" />
                  <div>
                    <p className="text-sm font-semibold text-pedra-100">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-pedra-100/60">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-dourado/40 bg-gradient-to-b from-dourado/10 to-transparent p-6 text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-dourado-300">
              Oferta
            </p>

            {/* Bloco do preço destacado: o "de/por" antes ficava em vinho escuro sobre fundo
                escuro e praticamente sumia — agora o riscado tem contraste próprio e o valor
                final ganha caixa, brilho e tipografia maior. */}
            <div className="mt-4 rounded-lg border border-dourado/30 bg-carvao/70 px-4 py-4 shadow-[0_0_24px_-6px_rgba(201,162,75,0.35)]">
              {productConfig.anchorPriceDisplay ? (
                <p className="text-sm font-medium text-pedra-100/60">
                  De{" "}
                  <span className="text-red-400/90 line-through decoration-red-400/60 decoration-2">
                    R$ {productConfig.anchorPriceDisplay}
                  </span>
                </p>
              ) : null}
              <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-pedra-100/80">
                Por apenas
              </p>
              <p className="mt-1 font-display text-5xl font-bold leading-none text-gradient-gold sm:text-6xl">
                <span className="mr-1 align-top text-2xl font-semibold sm:text-3xl">R$</span>
                {productConfig.priceDisplay}
              </p>
              {productConfig.installmentDisplay ? (
                <p className="mt-3 text-sm text-pedra-100/75">
                  ou {productConfig.installmentDisplay}
                </p>
              ) : null}
            </div>

            <ul className="mt-5 space-y-2 text-left">
              {trustIcons.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-xs text-pedra-100/70">
                  <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0 text-dourado-300" />
                  {item.label}
                </li>
              ))}
            </ul>

            <CheckoutButton
              className="mt-6"
              trackAs="click_offer_cta"
              trackPayload={{ location: "offer" }}
            >
              Quero acesso agora
            </CheckoutButton>

            {productConfig.guaranteeDays !== null ? (
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-dourado/30 bg-carvao-800/60 p-3 text-left">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/offer/garantia-7-dias.png"
                    alt={`Selo de garantia incondicional de ${productConfig.guaranteeDays} dias`}
                    fill
                    sizes="3.5rem"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dourado-300">
                    Garantia incondicional de {productConfig.guaranteeDays} dias
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-pedra-100/60">
                    Se por qualquer motivo você não ficar satisfeito, é só pedir o reembolso. Sem
                    perguntas.
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-xs leading-relaxed text-pedra-100/50">
                Produto digital, pagamento único, sem mensalidade. Não substitui acompanhamento
                veterinário.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
