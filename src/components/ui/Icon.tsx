type IconName =
  | "bowl"
  | "drop"
  | "eye"
  | "fur"
  | "bolt"
  | "question"
  | "leaf"
  | "calendar"
  | "check-circle"
  | "trend"
  | "paw"
  | "shield"
  | "star"
  | "book"
  | "dog"
  | "home"
  | "list"
  | "pot"
  | "treat"
  | "clock"
  | "growth"
  | "swap"
  | "alert"
  | "scale"
  | "repeat"
  | "check"
  | "x"
  | "lock"
  | "card"
  | "gift"
  | "play"
  | "chat"
  | "instagram";

const paths: Record<IconName, React.ReactNode> = {
  bowl: (
    <>
      <path d="M4 12h16a8 6 0 0 1-16 0Z" />
      <path d="M8 12V8m4 4V6m4 6V8" />
    </>
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  fur: <path d="M4 18c1-4 2-8 1-12M9 18c1-5 1.5-9 .5-13M14 18c1-4.5 1.8-8.5 1-13M19 18c.8-4 1.2-8 .3-12" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  question: (
    <>
      <path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4" />
      <circle cx="12" cy="17.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  leaf: <path d="M20 4C10 4 4 10 4 18c0 .5 0 1 .1 1.4C13 19 20 13 20 4ZM4 20l6-6" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </>
  ),
  trend: <path d="M3 17 9 11l4 4 8-8M17 7h4v4" />,
  paw: (
    <>
      <circle cx="6" cy="9" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M12 12c-3.5 0-6 2-6 4.5S8 20 12 20s6-1 6-3.5S15.5 12 12 12Z" />
    </>
  ),
  shield: <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />,
  star: <path d="m12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z" />,
  book: <path d="M4 5c2-1 5-1 7 0v14c-2-1-5-1-7 0V5ZM20 5c-2-1-5-1-7 0v14c2-1 5-1 7 0V5Z" />,
  dog: (
    <>
      <circle cx="12" cy="13" r="6" />
      <path d="M7 8 4 4M17 8l3-4" />
    </>
  ),
  home: <path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9Z" />,
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
  pot: <path d="M4 11h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3ZM2 11h20M8 11V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />,
  treat: (
    <>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <circle cx="7" cy="16" r="3" />
      <circle cx="17" cy="16" r="3" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  growth: <path d="M4 20h4v-4H4v4Zm6 0h4v-9h-4v9Zm6 0h4V6h-4v14Z" />,
  swap: <path d="m4 8 4-4 4 4M8 4v12m8 4-4 4-4-4M16 20V8" />,
  alert: <path d="M12 3 2 20h20L12 3ZM12 10v4m0 3h.01" />,
  scale: <path d="M12 3v18M6 7l-3 6a3 3 0 0 0 6 0l-3-6Zm12 0-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14M9 3h6" />,
  repeat: <path d="M4 4v5h5M20 20v-5h-5M4.5 15a8 8 0 0 0 14.1 3.4M19.5 9A8 8 0 0 0 5.4 5.6" />,
  check: <path d="M4 12.5 9 18 20 6" />,
  x: <path d="M5 5l14 14M19 5 5 19" />,
  lock: (
    <>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M2 10h20" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="9" width="18" height="12" rx="1" />
      <path d="M3 13h18M12 9v12M12 9C9 9 8 7.5 8 6a2.5 2.5 0 0 1 4-2c1.5 1.5 0 5 0 5Zm0 0c3 0 4-1.5 4-3a2.5 2.5 0 0 0-4-2c-1.5 1.5 0 5 0 5Z" />
    </>
  ),
  play: <path d="M7 4.5v15l13-7.5-13-7.5Z" />,
  chat: <path d="M4 5h16v11H8l-4 4V5Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
