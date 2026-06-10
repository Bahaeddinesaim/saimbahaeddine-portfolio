import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bahaeddine-saim",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/bahaeddinesaim",
    icon: Github
  },
  {
    label: "Email",
    href: "mailto:bahaeddine4info@gmail.com",
    icon: Mail
  }
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {LINKS.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:text-slate-950 dark:border-slate-700/70 dark:bg-slate-900/55 dark:text-slate-200 dark:shadow-slate-950/20 dark:hover:border-sky-400/60 dark:hover:text-sky-100"
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

