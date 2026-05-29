import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "about", label: "Profil" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Parcours" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="section-container flex h-16 items-center justify-between gap-6">
        <Link href="#hero" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200/80 bg-white shadow-sm shadow-slate-900/10 dark:border-slate-700/80 dark:bg-slate-950/80">
            <Image
              src="../public/img/bahae-logo.png"
              alt="Logo Bahae"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Saim Bahaeddine
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium tracking-wide text-slate-600 transition hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-300"
            >
              <span>{item.label}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/cv/SAIM_Bahaeddine_CV_FR.pdf"
            download
            className="hidden rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-50 shadow-md shadow-slate-900/20 transition hover:bg-sky-500 hover:text-slate-950 dark:bg-slate-100 dark:text-slate-950 dark:shadow-sky-500/20 dark:hover:bg-sky-400 sm:inline-flex"
          >
            CV PDF
          </a>
        </div>
      </div>
    </header>
  );
}

