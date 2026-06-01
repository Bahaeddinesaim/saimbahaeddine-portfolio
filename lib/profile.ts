export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Project = {
  title: string;
  context: string;
  year: string;
  tags: string[];
  impact: string;
  role: string;
  challenge: string;
  result: string;
  tools: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  focus: string;
  stack?: string;
};

export type Education = {
  school: string;
  diploma: string;
  location: string;
  period: string;
  details?: string;
};

export type Certification = {
  issuer: string;
  title: string;
};

export const profile = {
  name: "Saim Bahaeddine",
  headline:
    "Data, gouvernance et produits digitaux à l’intersection entre technologie, stratégie et impact business.",
  currentStatus:
    "Étudiant en MSc Informatique & Management à l’EPITA, ouvert à l’alternance en data, BI, gouvernance et projets digitaux.",
  positioning:
    "Je conçois et pilote des produits data et digitaux qui concilient exigence technique, qualité de la donnée, expérience utilisateur et performance opérationnelle."
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Data \u0026 Analytics",
    skills: [
      "Python (exploration \u0026 notebooks)",
      "KPI design",
      "Data quality checks",
      "Data visualisation (Power BI, Looker Studio)",
      "Hadoop (bases)",
      "Storytelling data"
    ]
  },
  {
    name: "Data Management \u0026 Gouvernance",
    skills: [
      "Modélisation de données",
      "Approche data-driven",
      "Cadres PDCA, DIMA, DICT",
      "Gouvernance \u0026 qualité des données",
      "RGPD, AI Act, Cloud Act (sensibilisation)",
      "Analyse de risques EBIOS RM"
    ]
  },
  {
    name: "Développement Web \u0026 Produits",
    skills: [
      "React.js",
      "HTML, CSS, JavaScript",
      "Java / Spring Boot",
      "FastAPI",
      "Design UX \u0026 UI pragmatique",
      "Collaboration avec métiers \u0026 juristes"
    ]
  },
  {
    name: "Soft skills",
    skills: [
      "Analyse \u0026 structuration",
      "Rigueur \u0026 fiabilité",
      "Autonomie \u0026 adaptabilité",
      "Esprit critique",
      "Communication claire",
      "Travail d’équipe \u0026 leadership"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Audit de conformité \u0026 risques pour une scale-up Agritech",
    context:
      "Mission académique simulant un audit stratégique pour une scale-up Agritech en phase de croissance internationale.",
    year: "2025",
    tags: ["EBIOS RM", "RGPD", "AI Act", "Cloud Act", "Power BI", "Data Governance"],
    impact:
      "Cartographie des flux de données, analyse de risques, évaluation de conformité et création d’un dashboard de gouvernance permettant au comité de direction de piloter ses risques data par des KPI/KRI actionnables.",
    role:
      "Audit stratégique, cadrage des enjeux, construction de la cartographie des données et recommandations opérationnelles.",
    challenge:
      "Démontrer la conformité réglementaire sur des processus métier complexes et proposer un pilotage structuré pour un comité de direction.",
    result:
      "Livrables clairs, plan d’actions de conformité et tableau de bord de gouvernance utilisé pour prioriser les actions et suivre les risques.",
    tools: ["Power BI", "Excel", "EBIOS RM", "RGPD", "AI Act"]
  },
  {
    title: "Programme de gouvernance data \u0026 cybersécurité",
    context:
      "Conception d’un cadre de gouvernance unifiée dans le contexte de la fusion entre un groupe logistique et une startup.",
    year: "2025",
    tags: ["Gouvernance data", "Cybersécurité", "Classification data", "KPI/KRI"],
    impact:
      "Définition de la stratégie d’accès aux données, classification des informations, formalisation des politiques et mise en place d’un pilotage par KPI/KRI pour sécuriser la croissance et les opérations.",
    role:
      "Architecture de gouvernance data et alignement des responsabilités entre IT, métiers et sécurité.",
    challenge:
      "Harmoniser des règles de gestion et de sécurité dans un contexte de fusion avec des pratiques très différentes.",
    result:
      "Cadre de gouvernance opérationnel, matrice RACI et indicateurs de suivi qui réduisent les risques de rupture et facilitent la prise de décision.",
    tools: ["Matrice RACI", "Policy Framework", "Data Classification", "KPI/KRI"]
  },
  {
    title: "Application de gestion des contrats juridiques",
    context:
      "Projet de fin d’études au sein de Royal Air Maroc pour digitaliser le cycle de vie des contrats juridiques.",
    year: "2025",
    tags: ["React", "Spring Boot", "PostgreSQL", "Design orienté métier"],
    impact:
      "Conception, développement et déploiement d’une application facilitant le suivi, la traçabilité et la collaboration entre juristes et métiers, avec une structuration claire des données contractuelles.",
    role:
      "Design produit, front-end React et intégration avec back-end Java pour un usage métier fluide.",
    challenge:
      "Créer un parcours simple pour un suivi contractuel global tout en respectant les contraintes de sécurité et de conformité.",
    result:
      "Prototype opérationnel livré, validé par les juristes et prêt à être industrialisé sur la plateforme interne.",
    tools: ["React", "Spring Boot", "PostgreSQL", "Figma"]
  },
  {
    title: "Plateforme d’analyse prédictive des accidents routiers",
    context:
      "Projet Data visant à identifier les facteurs de risque routier à partir des données nationales d’accidents.",
    year: "2025",
    tags: ["Data Analytics", "Power BI", "PostgreSQL", "ETL"],
    impact:
      "Création d’indicateurs exploitables pour les collectivités afin de mieux comprendre les zones de risque et prioriser les actions de prévention.",
    role:
      "Data Engineering, modélisation analytique et visualisation décisionnelle.",
    challenge:
      "Traiter plusieurs jeux de données volumineux et produire des indicateurs exploitables par les collectivités.",
    result:
      "Tableaux de bord interactifs, indicateurs de gravité et analyse géographique des zones à risque.",
    tools: ["Python", "PostgreSQL", "Power BI", "ETL", "Data Analytics"]
  },
  {
    title: "Système de QA Automation pour applications web",
    context:
      "Développement d’une plateforme d’automatisation des tests fonctionnels et API.",
    year: "2025",
    tags: ["QA Automation", "CI/CD", "Tests fonctionnels", "Web"],
    impact:
      "Mise en place d’une suite de tests automatisés assurant une validation continue et une détection rapide des régressions.",
    role:
      "Conception des scénarios de tests et intégration CI/CD.",
    challenge:
      "Réduire les délais de validation tout en augmentant la couverture de tests.",
    result:
      "Suite automatisée permettant l’exécution continue des tests et la détection rapide des régressions.",
    tools: ["Cypress", "Selenium", "Playwright", "Jenkins", "Docker"]
  },
  {
    title: "Plateforme de suivi de mobilité urbaine durable",
    context:
      "Conception d’un système d’aide à la décision pour évaluer la mobilité dans les territoires urbains.",
    year: "2025",
    tags: ["Mobilité durable", "Visualisation", "Territoires", "Data"],
    impact:
      "Développement d’un indice de mobilité interprétable pour les décideurs publics et d’un tableau de bord territorial synthétique.",
    role:
      "Architecture data, définition des indicateurs et visualisation.",
    challenge:
      "Combiner des données de transport, d’accessibilité et d’environnement.",
    result:
      "Indice de mobilité interprétable et tableaux de bord destinés aux décideurs publics.",
    tools: ["Power BI", "Python", "PostgreSQL", "Machine Learning", "Data Visualization"]
  },
  {
    title: "Analyse de conformité AI Act pour systèmes d’IA",
    context:
      "Étude stratégique visant à évaluer la conformité de systèmes d’intelligence artificielle aux exigences européennes.",
    year: "2025",
    tags: ["Compliance", "AI Act", "RGPD", "Risk Assessment"],
    impact:
      "Production d’un registre IA et d’une matrice de conformité permettant de clarifier les obligations et les risques des systèmes d’IA.",
    role:
      "Cartographie réglementaire et analyse des risques.",
    challenge:
      "Classifier les systèmes IA selon les niveaux de risque définis par la réglementation.",
    result:
      "Registre IA, matrice de conformité et recommandations de gouvernance.",
    tools: ["AI Act", "RGPD", "Risk Assessment", "Governance Framework", "Compliance"]
  }
];

export const experiences: Experience[] = [
  {
    company: "Royal Air Maroc",
    role: "Stagiaire ingénieur – Application contrats juridiques",
    location: "Casablanca, Maroc",
    period: "Fév. – Juin 2025",
    focus:
      "Digitalisation du suivi des contrats juridiques : recueil du besoin, conception de l’architecture, développement et déploiement.",
    stack: "React, Java Spring Boot, PostgreSQL"
  },
  {
    company: "International Omega Consulting",
    role: "Stagiaire – Support projets",
    location: "Paris, France",
    period: "Août – Sept. 2024",
    focus:
      "Apport d’une vision informatique à des projets clients, articulation entre besoins métiers, contraintes techniques et pilotage."
  },
  {
    company: "Digital Garden Agency",
    role: "Stagiaire – Web \u0026 UX",
    location: "Oujda, Maroc",
    period: "Sept. 2023",
    focus:
      "Création \u0026 maintenance de sites web, production de supports visuels et optimisation UX pour des clients locaux."
  },
  {
    company: "Algolus",
    role: "Stagiaire – Front-end e-commerce",
    location: "Oujda, Maroc",
    period: "Août 2023",
    focus:
      "Développement front-end pour une plateforme e-commerce et participation à des campagnes digitales (LeBonCoin)."
  }
];

export const education: Education[] = [
  {
    school: "EPITA, Paris",
    diploma: "MSc Informatique \u0026 Management – Stratégie \u0026 Valorisation de la Data",
    location: "Paris, France",
    period: "2025 – 2027"
  },
  {
    school: "EHEI, Oujda",
    diploma: "Ingénieur d’État en Informatique \u0026 Gestion",
    location: "Oujda, Maroc",
    period: "2020 – 2025"
  },
  {
    school: "UMP, Oujda",
    diploma: "Licence (1re année) Études Anglaises",
    location: "Oujda, Maroc",
    period: "2019 – 2020"
  }
];

export const certifications: Certification[] = [
  { issuer: "SkillFront", title: "ISO 27001 Information Security Associate™" },
  { issuer: "HP LIFE", title: "Agile Project Management" },
  { issuer: "HP LIFE", title: "Data Science \u0026 Analytics" },
  { issuer: "Google", title: "Google Analytics Certification" },
  {
    issuer: "The Open University",
    title: "Interpreting data: Boxplots and tables"
  },
  {
    issuer: "The Open University",
    title: "Project Governance \u0026 PMO"
  }
];

export const languages = [
  "Arabe (natif)",
  "Français (C1)",
  "Anglais (avancé)"
];

export const extracurricular = [
  "Représentant EPITA pour les salons étudiants \u0026 JPO (présentation du master, échanges avec candidats et familles).",
  "Ambassadeur du Club Polytechnique CPM (EHEI) lors d’événements universitaires.",
  "Communication \u0026 media manager du club sportif EHEI.",
  "Président du BDE EHEI : management d’une équipe de 40 membres et organisation d’événements de 200 à 20 000 participants."
];

