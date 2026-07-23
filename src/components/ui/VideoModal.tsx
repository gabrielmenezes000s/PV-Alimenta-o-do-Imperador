"use client";

import { useEffect } from "react";
import type { VideoTestimonial } from "@/config/testimonials";

type VideoModalProps = {
  testimonial: VideoTestimonial | null;
  onClose: () => void;
};

export function VideoModal({ testimonial, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!testimonial) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  const hasDetails =
    testimonial.dogName || testimonial.timeUsingMethod || testimonial.summary;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Depoimento em vídeo de ${testimonial.tutorName}`}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-carvao/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-carvao/80 text-pedra-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dourado-300"
      >
        ✕
      </button>

      {/* O vídeo dita o próprio tamanho a partir das dimensões reais do arquivo, limitado a quase
          a tela inteira: retratos preenchem a altura, paisagens preenchem a largura. Assim todos
          abrem "em tela cheia", sem cartão pequeno com barras pretas em volta. */}
      <div
        className="flex max-h-full min-h-0 w-full flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {testimonial.videoSrc ? (
          testimonial.videoProvider === "local" ? (
            <video
              src={testimonial.videoSrc}
              controls
              autoPlay
              playsInline
              className="max-h-[82vh] w-auto max-w-full rounded-lg border border-dourado/30 bg-black object-contain"
            >
              <track kind="captions" />
            </video>
          ) : (
            <iframe
              src={testimonial.videoSrc}
              className="aspect-[9/16] max-h-[82vh] w-auto max-w-full rounded-lg border border-dourado/30"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={`Depoimento de ${testimonial.tutorName}`}
            />
          )
        ) : (
          <div className="flex aspect-[9/16] max-h-[82vh] w-auto max-w-full items-center justify-center rounded-lg border border-dourado/30 bg-grafite px-6 text-center text-sm text-pedra-100/60">
            Vídeo ainda não cadastrado. Adicione o arquivo em src/config/testimonials.ts.
          </div>
        )}

        <div className="max-w-md text-center">
          <p className="font-display text-sm font-semibold text-dourado-300">
            {testimonial.tutorName}
            {testimonial.city ? ` · ${testimonial.city}` : ""}
          </p>
          {hasDetails ? (
            <>
              {testimonial.dogName ? (
                <p className="text-xs text-pedra-100/60">
                  {testimonial.dogName}
                  {testimonial.breed || testimonial.dogAge
                    ? ` (${[testimonial.breed, testimonial.dogAge].filter(Boolean).join(", ")})`
                    : ""}
                </p>
              ) : null}
              {testimonial.timeUsingMethod ? (
                <p className="text-xs text-pedra-100/60">Utiliza o método há {testimonial.timeUsingMethod}</p>
              ) : null}
              {testimonial.summary ? (
                <p className="pt-2 text-sm leading-relaxed text-pedra-100/85">{testimonial.summary}</p>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
