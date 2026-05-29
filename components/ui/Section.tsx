import { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section-padding">
      <div className="section-container space-y-10">
        <header className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="pill bg-slate-100 text-slate-900 dark:bg-slate-950/80 dark:text-sky-300">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

