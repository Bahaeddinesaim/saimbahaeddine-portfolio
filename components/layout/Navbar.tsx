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

interface NavbarProps {
  basePath?: string;
}

export function Navbar({ basePath = "" }: NavbarProps) {
  return (
    <header className="sticky inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/[0.82] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/[0.72]">
      <div className="section-container flex h-14 items-center justify-between gap-6">
        <Link href="#hero" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200/80 bg-white shadow-sm shadow-slate-900/10 transition duration-300 group-hover:scale-105 dark:border-slate-700/80 dark:bg-slate-950/80">
            <Image
              src={`${basePath}/img/bahae-logo.png`}
              alt="Logo Bahae"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[0.64rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
            <span className="font-display text-sm font-semibold text-slate-950 dark:text-slate-100">
              Saim Bahaeddine
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium tracking-wide text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-sky-200"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`${basePath}/cv/SAIM_Bahaeddine_CV_FR.pdf`}
            download
            className="hidden rounded-full bg-slate-950 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-50 shadow-md shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-500 hover:text-slate-950 dark:bg-slate-100 dark:text-slate-950 dark:shadow-sky-500/20 dark:hover:bg-sky-400 sm:inline-flex"
          >
            CV PDF
          </a>
        </div>
      </div>
    </header>
  );
}

