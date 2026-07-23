import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Icon } from "@/components/ui/Icon";

const doubts = [
  { icon: "bowl" as const, label: "Seu cão come com dificuldade ou recusa a comida." },
  { icon: "drop" as const, label: "Fezes moles, odor forte e pouca regularidade." },
  { icon: "eye" as const, label: "Secreção nos olhos e problemas de pele." },
  { icon: "fur" as const, label: "Pelo opaco, queda excessiva e coceiras." },
  { icon: "bolt" as const, label: "Falta de energia e disposição no dia a dia." },
  { icon: "question" as const, label: "Você fica perdido com tantas informações na internet." },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-carvao-800 py-10 sm:py-20">
      <Image
        src="/images/problem/problem-bg-embers.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao-800/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Você se identifica com alguma dessas situações?" />

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-6">
          {doubts.map((doubt) => (
            <div key={doubt.label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dourado/40 bg-carvao/60">
                <Icon name={doubt.icon} className="h-7 w-7 text-dourado-300" />
              </span>
              <p className="text-xs leading-snug text-pedra-100/75 sm:text-sm">{doubt.label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-display text-lg sm:mt-12 font-semibold leading-snug text-pedra-100 sm:text-xl">
          O problema não é falta de cuidado. É falta de uma rotina clara para observar, adaptar e
          repetir.
        </p>

        <div className="mt-8 flex justify-center">
          <PrimaryButton href="#oferta" size="md">
            Quero ver a solução
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
