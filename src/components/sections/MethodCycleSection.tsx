import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { managementCycle } from "@/config/cycle";

// O "Ciclo de Manejo do Imperador" — forma didática de organizar a experiência prática de
// Jailson, não um protocolo científico ou veterinário validado (ver COPY-E-ALEGACOES.md).
export function MethodCycleSection() {
  return (
    <section id="metodo" className="relative scroll-mt-24 overflow-hidden bg-carvao-800 py-10 sm:py-20">
      <Image
        src="/images/method/method-bg-embers.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao-800/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="O Ciclo de Manejo do Imperador"
          subtitle="Um processo simples que qualquer tutor consegue aplicar."
        />

        <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:grid-cols-3 sm:gap-x-2 sm:gap-y-10 lg:flex lg:items-start lg:justify-between lg:gap-0">
          {managementCycle.map((step, i) => (
            <li key={step.number} className="flex flex-col items-center gap-3 text-center lg:flex-1 lg:px-2">
              {/* No mobile a linha conectora fica oculta, então o círculo precisa ser
                  centralizado explicitamente — senão encosta na borda esquerda da célula. */}
              <div className="flex w-full items-center justify-center lg:justify-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-dourado bg-carvao-800 font-display text-sm font-bold text-dourado-300">
                  {step.number}
                </span>
                {i < managementCycle.length - 1 ? (
                  <span className="mx-1 hidden h-px flex-1 bg-gradient-to-r from-dourado/60 to-dourado/10 lg:block" aria-hidden="true" />
                ) : null}
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-pedra-100 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-pedra-100/65 sm:text-sm">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
