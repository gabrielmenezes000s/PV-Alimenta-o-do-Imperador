import type { NextConfig } from "next";

// Content-Security-Policy: primeira linha de defesa contra injeção de scripts (inclusive um
// script que tentasse reescrever o link do checkout). Liberamos apenas os domínios realmente
// usados: Google Tag Manager/Analytics, Meta Pixel e o checkout da Hotmart.
// Obs.: 'unsafe-inline' em script-src é necessário porque o Next injeta scripts inline de
// hidratação e os pixels de rastreamento também inicializam inline. Para endurecer ainda mais
// no futuro, migrar para nonces (exige renderização dinâmica).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://*.facebook.com",
  "frame-src 'self' https://*.hotmart.com",
  // Impede que o site seja embutido em um iframe de terceiros (anti-clickjacking): ninguém
  // consegue sobrepor uma camada falsa por cima do botão de compra.
  "frame-ancestors 'none'",
  // Bloqueia a injeção de uma tag <base> que sequestraria a resolução de links relativos.
  "base-uri 'self'",
  "form-action 'self' https://*.hotmart.com",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Redundante com frame-ancestors, mas cobre navegadores antigos.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Força HTTPS por 2 anos, incluindo subdomínios.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Desliga APIs de navegador que o site não usa.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
