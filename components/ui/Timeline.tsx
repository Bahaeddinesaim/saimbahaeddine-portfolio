import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
  description?: string;
  meta?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  variant: "experience" | "education";
};

export function Timeline({ items, variant }: TimelineProps) {
  const Icon = variant === "experience" ? Briefcase : GraduationCap;

  return (
    <ol className="relative space-y-4 border-l border-slate-200/80 pl-4 dark:border-slate-800/80 md:pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.15)]" />
          </span>

          <div className="group rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm shadow-slate-900/5 ring-1 ring-white/60 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/80 hover:shadow-lg hover:shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-950/[0.78] dark:ring-white/5 dark:shadow-slate-950/20">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 dark:bg-slate-900 dark:text-sky-300 dark:ring-sky-500/30">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-semibold text-slate-950 dark:text-slate-100">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-[0.75rem] text-slate-500 dark:text-slate-400">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <div className="shrink-0 text-right text-[0.7rem] text-slate-500 dark:text-slate-500">
                <p>{item.period}</p>
                {item.location && <p>{item.location}</p>}
              </div>
            </div>

            {item.description && (
              <p className="mt-3 text-[0.78rem] leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            )}
            {item.meta && (
              <p className="mt-2 text-[0.7rem] text-slate-500 dark:text-slate-400">
                {item.meta}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

