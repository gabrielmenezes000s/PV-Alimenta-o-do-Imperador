"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/config/faq";
import { trackEvent } from "@/lib/analytics";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="perguntas" className="relative scroll-mt-24 overflow-hidden bg-carvao py-10 sm:py-20">
      <Image
        src="/images/faq/faq-bg-embers.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-carvao/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title="Perguntas frequentes" />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="rounded-lg border border-dourado/15 bg-grafite/40">
                <h3>
                  <button
                    type="button"
                    onClick={() => {
                      const next = isOpen ? null : i;
                      setOpenIndex(next);
                      if (next !== null) trackEvent("faq_open", { question: item.question });
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-dourado-300 sm:px-5"
                  >
                    <span className="text-sm font-semibold text-pedra-100">{item.question}</span>
                    <span
                      className={`shrink-0 text-dourado-300 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-pedra-100/70 sm:px-5">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
