import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  as?: "div" | "article" | "section";
  className?: string;
};

export function Card({
  children,
  as: Component = "article",
  className = ""
}: CardProps) {
  return (
    <Component
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-premium shadow-slate-900/10 ring-1 ring-white/70 transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-xl hover:shadow-slate-900/[0.12] dark:border-slate-800/80 dark:bg-slate-950/[0.78] dark:text-slate-100 dark:ring-white/5 dark:shadow-slate-950/25 dark:hover:border-sky-500/35 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
        <div className="absolute -inset-x-16 -top-24 h-40 bg-gradient-to-br from-sky-400/10 via-cyan-300/5 to-transparent blur-2xl" />
      </div>
      <div className="relative">{children}</div>
    </Component>
  );
}

