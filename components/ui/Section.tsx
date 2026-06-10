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
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-padding reveal-on-scroll"
    >
      <div className="section-container space-y-7 sm:space-y-8">
        <header className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="pill text-sky-700 dark:text-sky-300">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="font-display text-balance text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-pretty text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.97rem]">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

