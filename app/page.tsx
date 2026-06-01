import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Timeline } from "@/components/ui/Timeline";
import {
  certifications,
  education,
  experiences,
  extracurricular,
  languages,
  profile,
  projects,
  skillCategories
} from "@/lib/profile";
import GalleryCarousel from "@/components/ui/GalleryCarousel";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/saimbahaeddine.github.io"
    : "";

const cvUrl = `${basePath}/cv/SAIM_Bahaeddine_CV_FR.pdf`;

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar basePath={basePath} />

      <main id="hero" className="flex-1">
        {/* Hero */}
        <section className="section-padding border-b border-slate-200/70 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="space-y-6">
              <p className="pill bg-slate-900/90 text-sky-300/90">
                Data · Gouvernance · BI · Produits digitaux
              </p>

              <div className="space-y-4">
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                  Saim Bahaeddine
                </h1>

                <p className="text-pretty text-xs font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 sm:text-sm">
                  MSc Informatique &amp; Management – EPITA · Ingénieur d’État
                  Informatique &amp; Gestion
                </p>

                <p className="text-pretty text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                  {profile.headline}
                </p>
              </div>

              <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[0.95rem]">
                {profile.positioning}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  Discuter d’une opportunité
                </a>

                <a
                  href={cvUrl}
                  download="SAIM_Bahaeddine_CV_FR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-900/10 transition hover:border-sky-500/70 hover:text-sky-600 dark:border-slate-700/80 dark:bg-slate-950/80 dark:text-slate-100 dark:shadow-slate-900/80 dark:hover:border-sky-400/70 dark:hover:text-sky-100"
                >
                  Télécharger mon CV
                </a>
              </div>

              <SocialLinks />

              <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-300">
                    Localisation
                  </dt>
                  <dd>Île-de-France</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-300">
                    Recherche
                  </dt>
                  <dd>Alternance data / BI / gouvernance / produit</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-300">
                    Langues
                  </dt>
                  <dd>{languages.join(" · ")}</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4 lg:justify-self-end">
              <div className="relative max-w-sm rounded-3xl border border-slate-200/90 bg-white/90 p-5 shadow-soft-glow dark:border-slate-800/90 dark:bg-slate-950/80">
                <div className="absolute -inset-x-10 -top-16 h-32 bg-gradient-to-br from-sky-500/25 via-indigo-500/10 to-transparent blur-3xl" />
                <div className="relative space-y-4">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">
                    Positionnement
                  </p>

                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {profile.currentStatus}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/80">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                        Focales
                      </p>
                      <p>Data, BI, gouvernance, produits digitaux.</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-950/80">
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                        Atouts
                      </p>
                      <p>Double culture ingénieur / management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section
          id="about"
          eyebrow="Profil"
          title="À l’intersection entre technologie, data et transformation."
          subtitle="Je construis des ponts entre les équipes techniques, métiers et juridiques pour sécuriser, valoriser et rendre actionnable la donnée."
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Formé à la fois à l’ingénierie informatique et au management,
                j’ai évolué dans des environnements où la donnée n’est pas
                seulement un actif technique, mais un levier de décision,
                d’efficacité opérationnelle et de conformité.
              </p>

              <p>
                Mes expériences m’ont amené à travailler sur des projets
                digitaux, des audits de risques, des problématiques de
                gouvernance data et des applications métiers, en gardant
                constamment en tête l’expérience utilisateur et l’impact
                business.
              </p>

              <p>
                Je recherche une alternance où je pourrai contribuer à des
                projets data, BI ou gouvernance au sein d’équipes
                pluridisciplinaires, tout en continuant à renforcer ma maîtrise
                des outils, méthodes et bonnes pratiques du domaine.
              </p>
            </div>

            <div className="space-y-4">
              <Card as="section">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  En résumé
                </h3>

                <ul className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li>
                    • Double formation : ingénieur d’État (Maroc) et MSc EPITA
                    (France).
                  </li>
                  <li>
                    • Intérêt fort pour la valorisation de la donnée, la
                    gouvernance, la cybersécurité et les produits digitaux.
                  </li>
                  <li>
                    • Expériences variées en stage : compagnies aériennes,
                    conseil, agences digitales, e-commerce.
                  </li>
                  <li>
                    • Implication associative importante : BDE, clubs, rôle
                    d’ambassadeur et de représentant.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          eyebrow="Compétences"
          title="Un socle technique solide au service de la donnée."
          subtitle="Compétences techniques, data et humaines structurées pour accompagner des projets exigeants."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <Card key={category.name}>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {category.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          eyebrow="Projets"
          title="Quelques projets représentatifs."
          subtitle="Sélection de projets académiques et professionnels autour de la data, de la gouvernance et des applications web."
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50/90 p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-slate-950/20 sm:p-6">
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-3 scrollbar-hide">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  as="section"
                  className="min-w-[320px] flex-shrink-0 snap-start sm:min-w-[360px]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-[0.8rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.context}
                  </p>

                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <div>
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Rôle
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.role}
                      </p>
                    </div>

                    <div>
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Défi
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Résultat
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-[0.7rem] font-medium text-slate-700 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-slate-950/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sky-100 px-2.5 py-1 text-[0.7rem] font-semibold text-sky-700 dark:bg-sky-500/15 dark:text-sky-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience & Education */}
        <Section
          id="experience"
          eyebrow="Parcours"
          title="Expériences & formation."
          subtitle="Un parcours construit entre ingénierie, management, data et engagement associatif."
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Expériences professionnelles
              </h3>

              <Timeline
                variant="experience"
                items={experiences.map((exp) => ({
                  id: `${exp.company}-${exp.period}`,
                  title: exp.company,
                  subtitle: exp.role,
                  period: exp.period,
                  location: exp.location,
                  description: exp.focus,
                  meta: exp.stack ? `Stack : ${exp.stack}` : undefined
                }))}
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Formation
                </h3>

                <Timeline
                  variant="education"
                  items={education.map((edu) => ({
                    id: `${edu.school}-${edu.period}`,
                    title: edu.diploma,
                    subtitle: edu.school,
                    period: edu.period,
                    location: edu.location
                  }))}
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Certifications
                </h3>

                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge key={`${cert.issuer}-${cert.title}`}>
                      {cert.issuer} · {cert.title}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Engagements & associatif
                </h3>

                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {extracurricular.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <GalleryCarousel basePath={basePath} />
              </div>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Discutons de votre besoin."
          subtitle="Disponible pour échanger autour d’opportunités en data, BI, gouvernance ou projets digitaux."
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-5">
              <Card as="section">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Me contacter
                </h3>

                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                  Pour un échange informel, une opportunité d’alternance ou un
                  retour sur mon profil, vous pouvez me contacter directement :
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
                  <p>
                    Email :{" "}
                    <a
                      href="mailto:bahaeddine4info@gmail.com"
                      className="text-sky-600 transition hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      bahaeddine4info@gmail.com
                    </a>
                  </p>

                  <p>
                    LinkedIn :{" "}
                    <a
                      href="https://linkedin.com/in/bahaeddine-saim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 transition hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                      linkedin.com/in/bahaeddine-saim
                    </a>
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-xs text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-400">
                <p className="font-semibold text-slate-900 dark:text-slate-200">
                  Informations pratiques
                </p>

                <ul className="mt-2 space-y-1">
                  <li>• Localisation : Île-de-France</li>
                  <li>• Mobilité : Permis B</li>
                  <li>
                    • Périmètre privilégié : data, BI, gouvernance, pilotage
                    data de la performance, produits digitaux.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}