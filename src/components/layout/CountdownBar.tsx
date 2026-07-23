"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { productConfig } from "@/config/product";

const STORAGE_KEY = "imperador:countdown-ends-at";

function formatRemaining(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}

// Define o instante em que o contador zera. Com `deadline` configurado o prazo é o mesmo para
// todo mundo; sem ele, cai no modo por sessão (guardado no sessionStorage para não reiniciar a
// cada rolagem ou recarregamento dentro da mesma visita).
function resolveEndsAt(): number {
  const { deadline, sessionMinutes } = productConfig.offerCountdown;
  if (deadline) return new Date(deadline).getTime();

  const stored = window.sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (Number.isFinite(parsed) && parsed > Date.now()) return parsed;
  }
  const endsAt = Date.now() + sessionMinutes * 60_000;
  window.sessionStorage.setItem(STORAGE_KEY, String(endsAt));
  return endsAt;
}

export function CountdownBar() {
  // `null` enquanto não montou no cliente: o tempo restante depende do relógio do navegador e
  // renderizá-lo no servidor causaria divergência de hidratação.
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (!productConfig.offerCountdown.enabled) return;

    const endsAt = resolveEndsAt();
    const tick = () => {
      setRemaining(Math.max(0, Math.floor((endsAt - Date.now()) / 1000)));
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!productConfig.offerCountdown.enabled) return null;
  // Prazo real já vencido: não faz sentido seguir anunciando a contagem.
  if (productConfig.offerCountdown.deadline && remaining === 0) return null;

  return (
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-vinho-900 via-vinho to-vinho-900 px-4 py-2 text-center">
      <Icon name="bolt" className="h-3.5 w-3.5 shrink-0 text-dourado-300" aria-hidden="true" />
      <span className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-pedra-100 sm:text-xs sm:tracking-[0.2em]">
        {productConfig.offerCountdown.label}
      </span>
      <span
        className="min-w-[3.75rem] rounded bg-carvao/70 px-2 py-0.5 font-display text-xs font-bold tabular-nums text-dourado-300 sm:text-sm"
        aria-live="off"
      >
        {remaining === null ? "--:--" : formatRemaining(remaining)}
      </span>
    </div>
  );
}
