"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Icon } from "@/components/ui/Icon";
import { VideoModal } from "@/components/ui/VideoModal";
import { videoTestimonials, exampleVideoTestimonials, type VideoTestimonial } from "@/config/testimonials";
import { trackEvent } from "@/lib/analytics";

// Usa depoimentos reais quando cadastrados em src/config/testimonials.ts; caso contrário,
// mostra dados de exemplo claramente identificados — nunca publicar sem substituir.
const items = videoTestimonials.length > 0 ? videoTestimonials : exampleVideoTestimonials;
const usingExamples = videoTestimonials.length === 0;

export function VideoTestimonials() {
  const [active, setActive] = useState<VideoTestimonial | null>(null);

  if (items.length === 0) return null;

  return (
    <section id="depoimentos" className="relative scroll-mt-24 overflow-hidden bg-carvao py-10 sm:py-20">
      <Image
        src="/images/testimonials/testimonials-bg-embers.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Veja o que tutores estão dizendo"
          subtitle={usingExamples ? "Espaço reservado para depoimentos reais e autorizados." : "Depoimentos reais de quem já aplica o método do Imperador."}
        />

        {usingExamples ? (
          <p className="mx-auto mt-6 max-w-2xl rounded-md border border-dourado/25 bg-vinho/10 px-4 py-2 text-center text-xs text-dourado-300">
            Depoimentos de exemplo (placeholder) — substituir por relatos reais e autorizados em
            src/config/testimonials.ts antes de publicar.
          </p>
        ) : null}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => {
                setActive(testimonial);
                trackEvent("view_testimonial", { id: testimonial.id });
                trackEvent("play_testimonial_video", { id: testimonial.id });
              }}
              className="group block w-full overflow-hidden rounded-lg border border-dourado/20 bg-grafite text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-dourado-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-grafite-700 to-carvao">
                {testimonial.videoSrc && testimonial.videoProvider === "local" ? (
                  <video
                    src={testimonial.videoSrc}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : null}
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-dourado/90 text-carvao transition-transform group-hover:scale-110">
                  <Icon name="play" className="h-4 w-4" />
                </span>
              </div>
              <div className="space-y-0.5 p-2.5">
                <p className="truncate text-xs font-semibold text-pedra-100">{testimonial.tutorName}</p>
                {testimonial.city ? (
                  <p className="truncate text-[11px] text-pedra-100/55">{testimonial.city}</p>
                ) : null}
              </div>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-pedra-100/50">
          Os relatos representam experiências individuais. Resultados e aceitação variam conforme o
          cão, a rotina, a saúde e o acompanhamento profissional.
        </p>

        <div className="mt-8 flex justify-center">
          <PrimaryButton href="#oferta" size="md">
            Quero começar também
          </PrimaryButton>
        </div>
      </div>

      <VideoModal testimonial={active} onClose={() => setActive(null)} />
    </section>
  );
}
