import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "Saim Bahaeddine – Data & Digital Portfolio",
  description:
    "Portfolio de Saim Bahaeddine, étudiant en MSc Informatique & Management à l’EPITA, spécialisé en data, gouvernance, BI et projets digitaux.",
  metadataBase: new URL("https://bahaeddinesaim.github.io/saimbahaeddine-portfolio"),
  openGraph: {
    title: "Saim Bahaeddine – Data & Digital Portfolio",
    description:
      "Profil à l’intersection entre technologie, stratégie et valorisation de la donnée. Projets data, BI, gouvernance et web.",
    url: "https://bahaeddinesaim.github.io/saimbahaeddine-portfolio",
    siteName: "Portfolio – Saim Bahaeddine",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

