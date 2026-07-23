import { productConfig } from "@/config/product";

type ProductMockupProps = {
  className?: string;
  size?: "md" | "lg";
};

// Mockup do e-book construído em CSS/SVG (sem depender de arte final).
// Trocar por render fotográfico real assim que a capa definitiva existir — ver ASSETS-NECESSARIOS.md.
export function ProductMockup({ className = "", size = "lg" }: ProductMockupProps) {
  const dims = size === "lg" ? "w-64 sm:w-72 md:w-80" : "w-48 sm:w-56";

  return (
    <div className={`relative ${dims} aspect-[3/4] ${className}`} style={{ perspective: "1000px" }}>
      <div
        className="relative h-full w-full rounded-r-md rounded-l-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-rotate-2"
        style={{
          background:
            "linear-gradient(160deg, #23201c 0%, #14110f 55%, #0e0c0a 100%)",
          transform: "rotateY(-12deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-r-md rounded-l-sm border border-dourado/40" />
        <div className="absolute inset-3 rounded-sm border border-dourado-300/30" />

        {/* lombada */}
        <div
          className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-vinho-600 via-vinho to-vinho-900"
          style={{ transform: "translateX(-100%) rotateY(90deg)", transformOrigin: "right" }}
        />

        <div className="flex h-full flex-col items-center justify-between px-6 py-8 text-center">
          <span className="font-display text-[10px] tracking-[0.35em] text-dourado-300/90">
            CANIL IMPERADOR ROMANO
          </span>

          <div className="flex flex-col items-center gap-3">
            <svg
              viewBox="0 0 64 64"
              className="h-12 w-12 text-dourado-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M32 6 L38 20 L54 20 L41 30 L46 46 L32 36 L18 46 L23 30 L10 20 L26 20 Z" />
            </svg>
            <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-pedra-100">
              ALIMENTAÇÃO
              <br />
              DO IMPERADOR
            </h3>
            <div className="h-px w-16 bg-dourado" />
            <p className="font-display text-[11px] tracking-[0.2em] text-dourado-300/80">
              GUIA DE ALIMENTAÇÃO NATURAL
            </p>
          </div>

          <span className="font-display text-[10px] tracking-[0.3em] text-pedra-100/60">
            {productConfig.authorName.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
