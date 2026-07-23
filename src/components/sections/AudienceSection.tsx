import Image from "next/image";
import { productConfig } from "@/config/product";

const isFor = [
  "Tutores que querem alimentar com mais consciência e segurança",
  "Quem busca uma rotina prática e organizada",
  `Tutores de cães de todas as raças, portes e idades — o método nasceu entre Rottweilers, mas o princípio é observar o cão que está na sua frente`,
  "Quem não tem experiência nenhuma com alimentação natural",
  "Quem quer entender melhor a aceitação e a rotina do próprio cão",
];

const isNotFor = [
  "Quem procura fórmulas milagrosas ou promessas irreais",
  "Quem não pretende de fato aplicar o que vai aprender",
  "Quem busca diagnóstico ou tratamento veterinário",
  "Quem não tem interesse em conhecer uma nova rotina",
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="relative scroll-mt-24 overflow-hidden bg-carvao-800 py-10 sm:py-20">
      <Image
        src="/images/audience/audience-bg-smoke.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao-800/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_22rem_1fr] lg:gap-6">
          <div>
            <h2 className="inline-block rounded-md bg-[url('/images/audience/stone-title-bg.png')] bg-cover bg-center px-5 py-2.5 font-display text-xl font-bold text-[#6b4713] [text-shadow:0_1px_1px_rgba(255,255,255,0.25),0_-1px_1px_rgba(0,0,0,0.5)] sm:text-2xl">
              Para quem é este guia?
            </h2>
            <ul className="mt-6 space-y-4">
              {isFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base font-medium leading-relaxed text-pedra-100 sm:text-lg">
                  <span className="mt-0.5 shrink-0" aria-hidden="true">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* O PNG tem bastante margem transparente em cima e embaixo. No mobile usamos
              object-cover para cortar só essa margem e os cães aparecerem grandes; no desktop
              há espaço vertical de sobra, então mantemos a imagem inteira (contain). */}
          <div className="relative order-first mx-auto aspect-[5/4] w-full max-w-sm lg:order-none lg:aspect-[6/7] lg:max-w-none">
            <Image
              src="/images/audience/audiencia-rottweilers-cutout.png"
              alt={`Rottweilers do ${productConfig.kennelName}, do filhote ao adulto`}
              fill
              sizes="(min-width: 1024px) 22rem, 90vw"
              className="object-cover lg:object-contain"
            />
          </div>

          <div>
            <h2 className="inline-block rounded-md bg-[url('/images/audience/stone-title-bg.png')] bg-cover bg-center px-5 py-2.5 font-display text-xl font-bold text-vinho [text-shadow:0_1px_1px_rgba(255,255,255,0.15),0_-1px_1px_rgba(0,0,0,0.4)] sm:text-2xl">
              Para quem não é este guia?
            </h2>
            <ul className="mt-6 space-y-4">
              {isNotFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base font-medium leading-relaxed text-pedra-100 sm:text-lg">
                  <span className="mt-0.5 shrink-0" aria-hidden="true">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
