import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-pedra-100" : "text-carvao";
  const subtitleColor = tone === "light" ? "text-pedra-100/75" : "text-carvao/75";

  return (
    <div className={`flex flex-col gap-3 sm:gap-4 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <span className="font-display text-xs sm:text-sm tracking-[0.25em] uppercase text-dourado-300">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-display text-xl sm:text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-sm sm:text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
