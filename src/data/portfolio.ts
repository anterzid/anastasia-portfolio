export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/anastasia-terzidou-21526713a/",
  email: "mailto:anterzid@gmail.com",
  github: "https://github.com/anterzid",
};

export const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Talks", "#talks"],
  ["Academic", "#academic"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
].map(([label, href]) => ({ label, href }));

export const aboutIntro = `
I design and improve internal data and reporting systems used in real operational environments. My work focuses on turning complex data flows into reliable tools that teams can actually use to make decisions. I operate at the intersection of product, data, and system logic, translating business needs into structured, usable functionality.
`;

export const aboutHighlights = [
  [
    "Systems Thinking",
    "I design systems that remain stable, scalable, and consistent under real operational pressure.",
  ],
  [
    "Product Contribution",
    "I define what should be built, why it matters, and how it aligns with business goals.",
  ],
  [
    "Analytical Rigor",
    "I ensure data is validated, consistent, and reliable before decisions are made on top of it.",
  ],
].map(([title, text]) => ({ title, text }));

export const experience = [
  {
    period: "2023 – Present",
    title: "Data-driven Product Specialist",
    org: "RevitUp",
    summary:
      "Leading the evolution of internal reporting and revenue systems, with a focus on data reliability, product logic, reporting structures, and system functionality used in real operational environments.",
    bullets: [
      "Led the evolution of internal reporting systems used across ~100 active projects",
      "Improved product reliability by identifying and resolving critical data issues (e.g. ~30% revenue discrepancies), restoring trust in system outputs",
      "Defined reporting logic, KPIs, and system functionality aligned with business needs",
      "Coordinated development priorities and guided system evolution across product and engineering",
      "Introduced structured workflows (ticketing, task tracking, version control), reducing interruptions and improving delivery efficiency",
      "Defined and translated business requirements into system features, guiding development priorities and implementation",
      "Contributed to the development of a Revenue Management System (RMS), defining reporting logic, dashboards, and functional requirements",
      "Led system configuration and contributed to migration rollout, enabling adoption across ~30 projects initially and supporting scale-up to ~100 active projects",
      "Drove product adoption by improving usability, reducing manual workflows, and aligning system functionality with user needs",
      "Performed data validation and ensured reporting accuracy across multiple data sources",
      "Guided system improvements by identifying issues, defining solutions, and aligning development work with operational needs",
    ],
  },
  {
    period: "2020 – 2021",
    title: "Research Associate",
    org: "Aristotle University of Thessaloniki",
    summary:
      "Spectroscopic study of PAHs molecular systems within a co-funded national–EU research framework.",
    bullets: [
      "Project: Spectroscopic study of PAHs molecular systems",
      "Program: Partnership Agreement for the Development Framework 2014–2020 — Scholarships for new researchers",
      "Funding: Greece & European Union, Jan 2020 – Apr 2021",
      "Conducted spectroscopic analysis and contributed to academic research outputs",
    ],
  },
  {
    period: "2018 – 2026",
    title: "PhD Researcher in Physics",
    org: "Aristotle University of Thessaloniki",
    summary:
      "Research in solid-state physics with focus on fulleride materials, high-pressure studies, and Raman spectroscopy.",
    bullets: [
      "Study of condensed matter systems under pressure",
      "Research on fulleride materials and related physical behavior",
      "Use of spectroscopic methods with emphasis on Raman analysis",
      "Interpretation of experimental data with strong analytical and methodological focus",
      "PhD research funded by ELIDEK, Nov 2019 – Aug 2022",
    ],
  },
  {
    period: "2015 – 2017",
    title: "Post-graduate Researcher",
    org: "Chemistry Process & Energy Resources Institute (CPERI, Thessaloniki)",
    summary:
      "Post-graduate research at CPERI in Thessaloniki, linked to my Master’s thesis work on ferrite nanoparticles and bentonite-based nanofluids.",
    bullets: [
      "Master’s thesis: Ferrite nanoparticles & their bentonite nanofluids — synthesis and physicochemical analysis",
      "Conducted synthesis and characterization of nanoparticle-based systems",
      "Contributed to research activity in a scientific institute setting",
    ],
  },
  {
    period: "2013 – 2024",
    title: "Private Tutor",
    org: "Independent",
    summary:
      "Provided private tutoring across secondary-school and university-level subjects in physics, mathematics, chemistry, statistical physics, optics, and condensed matter physics.",
    bullets: [
      "Tutored high-school Physics, Math, and Chemistry",
      "Supported university-level coursework in Statistical Physics, Optics, and Condensed Matter Physics",
    ],
  },
];

export const projects = [
  {
    title: "Revelier Platform",
    text: "Led the evolution of an internal BI platform used across 100+ hotel accounts, focusing on data reliability, reporting logic, and system usability. Transformed the platform into a trusted system used for daily operational decisions.",
  },
  {
    title: "Reporting Logic & Automation",
    text: "Designed reporting structures and automated workflows that reduced manual reporting effort and improved consistency across projects, enabling faster and more reliable decision-making.",
  },
  {
    title: "System Reliability & Data Validation",
    text: "Identified and resolved critical data inconsistencies, eliminating the need for manual cross-checking and restoring trust in system outputs through stronger validation logic.",
  },
  {
    title: "RMS Functional Design",
    text: "Contributed to the functional design of a Revenue Management System, defining dashboards, reporting logic, and forecasting-related structures aligned with real operational and strategic needs.",
  },
];

export const publications = [
  {
    authors: "K. Matsui, N. Yoshikane, A.G.V. Terzidou, J. Arvanitidis, S. Kawaguchi, Y. Kubota, K. Prassides",
    title: "Electron injection into superconducting trivalent fullerides close to the Mott transition boundary",
    journal: "Modern Physics Letters B",
    volume: "38",
    pages: "2342001",
    year: "2024",
    doi: "10.1142/S0217984923420010",
    href: "https://doi.org/10.1142/S0217984923420010",
  },
  {
    authors: "A.G.V. Terzidou, N. Sorogas, F. Pinakidou, E.C. Paloura, and J. Arvanitidis",
    title: "The pressure-induced structural phase transition of fluorene studied by Raman spectroscopy",
    journal: "Vibrational Spectroscopy",
    volume: "115",
    pages: "103272",
    year: "2021",
    doi: "10.1016/j.vibspec.2021.103272",
    href: "https://doi.org/10.1016/j.vibspec.2021.103272",
  },
  {
    authors: "N. Yoshikane, K. Matsui, T. Nakagawa, A.G.V. Terzidou, Y. Takabayashi, H. Yamaoka, N. Hiraoka, H. Ishii, J. Arvanitidis, and K. Prassides",
    title: "Pressure-induced valence transition in the mixed-valence (Sm1/3Ca2/3)2.75C60 fulleride",
    journal: "Materials Chemistry Frontiers",
    volume: "4",
    pages: "3521",
    year: "2020",
    doi: "10.1039/D0QM00707B",
    href: "https://doi.org/10.1039/D0QM00707B",
  },
];

export const oralPresentations = [
  {
    authors: "A.G.V. Terzidou, D. Christofilos, S. Ves, K. Prassides, and J. Arvanitidis",
    title: "Pressure-induced structural and electronic phase transitions in (Ba3C60)",
    event: "58th European High Pressure Research Group International Conference (EHPRG)",
    location: "Tenerife, Spain",
    date: "6-11 September 2020",
  },
  {
    authors: "A.G.V. Terzidou, N. Sorogas, F. Pinakidou, E.C. Paloura, and J. Arvanitidis",
    title: "Pressure response of the lattice modes in the polycyclic aromatic hydrocarbon fluorene",
    event: "58th European High Pressure Research Group International Conference (EHPRG)",
    location: "Tenerife, Spain",
    date: "6-11 September 2020",
  },
  {
    authors: "A.G.V. Terzidou, A.V. Kuzmin, S.S. Khasanov, K.P. Meletov, A. Michtaris, H. Sakurai, K. Prassides, D. Christofilos, and J. Arvanitidis",
    title: "Pressure-induced structural phase transition of sumanene (C21H12) studied by Raman spectroscopy and X-ray diffraction",
    event: "XXXIV Panhellenic Conference on Solid State Physics and Materials Science",
    location: "Patras, Greece",
    date: "11-14 September 2019",
  },
];

export const posterPresentations = [
  {
    authors: "N. Sorogas, A.G.V. Terzidou, K. Papagelis, A.N. Anagnostopoulos, D. Christofilos, and J. Arvanitidis",
    title: "High-Pressure Raman spectroscopic study of the transition metal dichalcogenide alloy (SnS0.8Se1.2)",
    event: "58th European High Pressure Research Group International Conference (EHPRG)",
    location: "Tenerife, Spain",
    date: "6-11 September 2020",
    doi: "",
    href: "",
  },
  {
    authors: "A.G.V. Terzidou, T. Nakagawa, J. Rix, O. Karabinaki, S. Ves, K. Prassides, D. Christofilos, and J. Arvanitidis",
    title: "High-pressure Raman study of the (Ca2.75C60) fulleride",
    event: "XXXIV Panhellenic Conference on Solid State Physics and Materials Science",
    location: "Patras, Greece",
    date: "11-14 September 2019",
    doi: "",
    href: "",
  },
];

export const volunteering = [
  {
    title: "Student Action Refugees",
    organization: "Solidarity Now",
    date: "2020-2021",
    location: "",
  },
  {
    title: "Open Astronomy",
    organization: "Dionysus AstroFestival",
    date: "13 August 2016",
    location: "Dionysiou Bay, Chalkidiki, Greece",
  },
];

export const seminars = [
  {
    title: "Leadership",
    date: "07/02/2025",
    location: "",
    organization: "education & training link — business training series",
  },
  {
    title: "Time & Stress Management",
    date: "06/02/2025",
    location: "",
    organization: "education & training link — business training series",
  },
  {
    title: "International Summer School, Intensive Course in Layered Materials And Applications",
    date: "12-16 July 2021",
    location: "Chania, Greece",
    organization: "",
  },
];

export const talks = [
  {
    title: "RevUp BI – Από την αξία στην υπεραξία των δεδομένων",
    event: "5th Revenue Masterclass Crete 2025",
    role: "Speaker",
    date: "October 2025",
    location: "Crete, Greece",
    description:
      "Presentation on how BI systems translate data into operational decisions in revenue management environments.",
    link: "https://www.revenue-masterclass.com/en/events/5th-revenue-masterclass-crete-2025",
  },
];

export const skills = [
  "Team Spirit",
  "Business Intelligence",
  "Data Platforms",
  "System Design",
  "Python",
  "SQL",
  "Product Development",
  "Dashboards",
  "Scientific Research",
  "Time Management",
  "Data Visualization",
  "Analytics Workflows",
  "Resourcefulness",
  "Attention to Detail",
  "Communication",
  "Problem Solving",
  "Adaptability",
];

export const computerSkills = [
  "Python",
  "JavaScript",
  "SQL",
  "HTML",
  "CSS",
  "PHP",
];

export const languages = [
  "Greek",
  "English",
  "Spanish",
  "German",
];

export const publicationGroups = {
  papers: publications,
  oral: oralPresentations,
  posters: posterPresentations,
};

export const additionalSections = {
  volunteering,
  seminars,
};

export const skillGroups = [
  { title: "Professional Skills", items: skills },
  { title: "Computer Skills", items: computerSkills },
  { title: "Languages", items: languages },
];