import { productConfig } from "@/config/product";

// Faixa dourada de reforço logo após o hero — usada com moderação, sem falsa urgência.
export function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-dourado-600 via-dourado to-dourado-600 py-2.5 text-center">
      <p className="px-4 font-display text-xs font-semibold uppercase tracking-[0.15em] text-carvao sm:text-sm">
        O método utilizado e ensinado por {productConfig.authorName}
      </p>
    </div>
  );
}
