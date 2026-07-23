import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { productConfig } from "@/config/product";

const learnItems = [
  { icon: "growth" as const, title: "Adaptação da alimentação para filhote, jovem, adulto e idoso" },
  { icon: "list" as const, title: "Mapa completo de ingredientes da base cozida e dos petiscos" },
  { icon: "pot" as const, title: "Como preparar a refeição principal cozida, de forma prática" },
  { icon: "treat" as const, title: "Petiscos naturais e como oferecer no horário certo" },
  { icon: "clock" as const, title: "Horários e frequência das refeições por fase" },
  { icon: "scale" as const, title: "Como ajustar textura e corte conforme a mastigação" },
  { icon: "home" as const, title: "Preparo, porcionamento e armazenamento para 1 ou vários cães" },
  { icon: "alert" as const, title: "Erros de preparo que devem ser evitados" },
];

export function LearnSection() {
  return (
    <section id="aprender" className="relative scroll-mt-24 overflow-hidden bg-carvao py-10 sm:py-20">
      <Image
        src="/images/learn/learn-bg-smoke.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="O que você vai aprender" />

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-[minmax(0,30rem)_1fr] lg:items-center lg:gap-14">
          <div className="relative mx-auto aspect-square w-full max-w-[16rem] sm:max-w-md lg:mx-0 lg:max-w-none">
            <Image
              src="/images/product/mockup-ebook.png"
              alt={`Mockup do e-book Alimentação do Imperador com ${productConfig.authorName}`}
              fill
              sizes="(min-width: 1024px) 30rem, (min-width: 640px) 28rem, 16rem"
              className="object-contain"
            />
          </div>

          {/* 2 colunas já no mobile: em 1 coluna os 8 cards deixavam a seção longa demais. */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {learnItems.map((item) => (
              <div key={item.title} className="flex h-full flex-col gap-2 rounded-lg border border-dourado/20 bg-grafite/50 p-3.5 sm:gap-3 sm:p-5">
                <Icon name={item.icon} className="h-6 w-6 text-dourado-300 sm:h-7 sm:w-7" />
                <p className="text-xs leading-snug text-pedra-100/85 sm:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
