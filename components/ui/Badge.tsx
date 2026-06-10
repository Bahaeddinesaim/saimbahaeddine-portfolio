import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300/70 bg-white/70 px-2.5 py-1 text-[0.72rem] font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/80 hover:text-slate-950 dark:border-slate-700/70 dark:bg-slate-900/55 dark:text-slate-300 dark:shadow-slate-950/20 dark:hover:border-sky-400/40 dark:hover:text-slate-50">
      {children}
    </span>
  );
}

