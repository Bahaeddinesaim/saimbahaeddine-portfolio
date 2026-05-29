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
      className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-6 text-slate-900 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-950/85 dark:text-slate-100 dark:shadow-slate-950/25 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-x-16 -top-24 h-40 bg-gradient-to-br from-sky-500/15 via-cyan-400/5 to-transparent blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </Component>
  );
}

