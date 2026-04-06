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
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Volunteering", "#volunteering"],
  ["Courses & Events", "#seminars"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
].map(([label, href]) => ({ label, href }));

export const aboutIntro = `
I work on the development, configuration, and evolution of internal reporting and revenue management systems used in hospitality consulting environments. My role combines product thinking, system design, data validation, reporting logic, and workflow optimization, with a strong focus on translating operational needs into usable system functionality.
`;

export const aboutHighlights = [
  [
    "Systems Thinking",
    "I approach platform problems structurally, focusing on how logic, configuration, reporting, and usability work together inside a system.",
  ],
  [
    "Product Contribution",
    "I contribute to the design and evolution of internal tools and a new Revenue Management System (RMS), with emphasis on dashboards, reporting logic, future forecasting functionality, and usability improvements.",
  ],
  [
    "Analytical Rigor",
    "My academic background in physics shapes the way I work: analytically, methodically, and with strong attention to precision and validation.",
  ],
].map(([title, text]) => ({ title, text }));

export const experience = [
  {
    period: "2023 – Present",
    title: "Data-driven Product Specialist",
    org: "RevitUp",
    summary:
      "Leading the evolution of internal reporting and revenue systems, with a focus on product-oriented system improvements, reporting automation, configuration logic, developer coordination, and user-facing functionality.",
    bullets: [
      "Defined and translated business requirements into system features, guiding development priorities and implementation",
      "Led the development team’s work on Revelier by defining priorities, coordinating implementation, and guiding system evolution",
      "Contributed to product development of internal reporting and revenue systems by defining reporting logic, feature behavior, and system functionality",
      "Contributed to the development of a Revenue Management System (RMS), defining reporting logic, dashboards, and system functionality, including future features",
      "Led system configuration and contributed to migration rollout, enabling adoption across ~30 projects initially and supporting scale-up to ~100 active projects",
      "Contributed to the evolution of the platform from separate reporting systems (~40 projects) to a unified solution supporting ~100 active projects",
      "Improved product reliability by identifying and resolving critical data issues (e.g. ~30% revenue discrepancies), restoring system trust and enabling full adoption",
      "Defined reporting requirements, KPIs, and dashboard structures aligned with business needs",
      "Drove product adoption by improving usability, reducing manual workflows, and aligning system functionality with user needs",
      "Introduced structured workflows (ticketing, task tracking, version control), reducing interruptions (~90%) and improving delivery efficiency",
      "Supported reporting and analytics operations across ~40 hotel projects (Platforms 1 & 2), prior to platform consolidation and scale-up",
      "Collaborated with stakeholders to translate business needs into reporting outputs",
      "Assisted in migration from Excel-based workflows to structured reporting systems",
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
    title: "Revelier Platform Development",
    text: "Contributed to the ongoing development of Revelier through reporting improvements, configuration logic, usability enhancements, and structured system refinement aligned with operational needs.",
  },
  {
    title: "Reporting Logic & Automation",
    text: "Designed reporting structures and automated workflows that improved consistency, reduced manual effort, and supported decision-making in hospitality environments.",
  },
  {
    title: "System Reliability & Data Validation",
    text: "Supported validation, debugging, and configuration processes to improve reporting accuracy, resolve system issues, and strengthen trust in platform outputs.",
  },
  {
    title: "RMS Functional Design",
    text: "Contributed to the functional design of a Revenue Management System, focusing on dashboards, reporting logic, forecasting capabilities, and usability improvements.",
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
  {
    authors: "A.G.V. Terzidou, T. Nakagawa, N. Yoshikane, R. Rountou, J. Rix, O. Karabinaki, D. Christofilos, J. Arvanitidis, and K. Prassides",
    title: "High-pressure Raman study of the alkaline-earth metal fulleride, Ca2.75C60",
    journal: "Modern Physics Letters B",
    volume: "34",
    pages: "2040056-2040066",
    year: "2020",
    doi: "10.1142/S0217984920400564",
    href: "https://doi.org/10.1142/S0217984920400564",
  },
  {
    authors: "Z. Vryzas, V. Zaspalis, L. Nalbantian, A. Terzidou, and V.C. Kelessidis",
    title: "Rheological and HP/HT fluid loss behavior of nano-based drilling fluids utilizing Fe3O4 nanoparticles",
    journal: "Materials Today: Proceedings",
    volume: "5",
    pages: "27387-27396",
    year: "2018",
    doi: "10.1016/j.matpr.2018.09.056",
    href: "https://doi.org/10.1016/j.matpr.2018.09.056",
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
  {
    authors: "A. Terzidou, V. Zaspalis, Z. Vryzas, V.C. Kelessidis, and L. Nalbantian",
    title: "Optimization of drilling fluids utilizing nanoparticles",
    event: "Panhellenic Conference of Chemical Engineering",
    location: "Thessaloniki, Greece",
    date: "25-27 May 2017",
  },
  {
    authors: "Z. Vryzas, V. Zaspalis, L. Nalbantian, and A. Terzidou",
    title: "Development of smart drilling fluids using Fe3O4 nanoparticles for the optimization of drilling",
    event: "Panhellenic Conference of Chemical Engineering",
    location: "Thessaloniki, Greece",
    date: "25-27 May 2017",
  },
  {
    authors: "V.C. Kelessidis, Z. Vryzas, V. Zaspalis, L. Nalbantian, and A. Terzidou",
    title: "Advances in development of nano-based drilling fluids for optimizations in Hydrocarbon exploration",
    event: "14th International Conference on NanoSciences & Nanotechnologies",
    location: "Thessaloniki, Greece",
    date: "4-7 July 2017",
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
  {
    authors: "M. Sall, N. Chandran, A. Terzidou, C.B. Lioutas, and E.K. Polychroniadis",
    title: "TEM Characterization of a Complex Twinning System in 3C-SiC",
    event: "2nd International Multidisciplinary Microscopy and Microanalysis Congress & Exhibition (InterM)",
    location: "Oludeniz, Turkey",
    date: "16-19 October 2014",
    doi: "10.1007/978-3-319-16919-4",
    href: "https://doi.org/10.1007/978-3-319-16919-4",
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
    title: "Playing with light, understanding its behavior and... vanishing objects!",
    organization: "Aristotle University of Thessaloniki on Sundays",
    date: "6-13 May 2018",
    location: "Thessaloniki, Greece",
  },
  {
    title: "Open Astronomy",
    organization: "Dionysus AstroFestival",
    date: "13 August 2016",
    location: "Dionysiou Bay, Chalkidiki, Greece",
  },
  {
    title: "12th International Conference, Nanosciences & Nanotechnologies",
    organization: "",
    date: "07-10 July 2015",
    location: "Thessaloniki, Greece",
  },
  {
    title: "9th International Summer School, N&N: Electronics & Nanomedicine",
    organization: "",
    date: "04-11 July 2015",
    location: "Thessaloniki, Greece",
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
  {
    title: "International Summer School, Natural Products: Chemistry, Biological Activities & Technological Applications",
    date: "27-29 April 2018",
    location: "Thessaloniki, Greece",
    organization: "",
  },
  {
    title: "Μαθησιακές Δυσκολίες και Αντιμετώπιση (για παιδιά) (online)",
    date: "29 Νοεμβρίου-19 Δεκεμβρίου 2017",
    location: "Λαμία, Ελλάδα",
    organization: "",
  },
  {
    title: "Digital Learning: Current Trends in Language Education Technology 2017-2020 and how we can keep our schools innovative",
    date: "2017",
    location: "11th Foreign Languages Forum",
    organization: "by Michael Carrier",
  },
  {
    title: "The special learning difficulties in teaching a foreign language",
    date: "2017",
    location: "11th Foreign Languages Forum",
    organization: "by Dr Eleni Livaniou",
  },
  {
    title: "Dealing with Discipline Problems: ten practical tips",
    date: "2017",
    location: "11th Foreign Languages Forum",
    organization: "by Dr. Luke Prodromou",
  },
  {
    title: "12th International Conference, Nanosciences & Nanotechnologies",
    date: "07-10 July 2015",
    location: "Thessaloniki, Greece",
    organization: "",
  },
  {
    title: "9th International Summer School, N&N: Electronics & Nanomedicine",
    date: "04-11 July 2015",
    location: "Thessaloniki, Greece",
    organization: "",
  },
  {
    title: "Effective Thinking Through Mathematics",
    date: "2014",
    location: "University of Texas, MOOC on edx.org",
    organization: "",
  },
  {
    title: "The Science of Everyday Thinking",
    date: "2014",
    location: "University of Queensland, MOOC on edx.org",
    organization: "",
  },
  {
    title: "Reason & Persuasion: Thinking through three dialogues of Plato",
    date: "2014",
    location: "National University of Singapore, MOOC on Coursera.org",
    organization: "",
  },
  {
    title: "Vital Signs: Understanding What the Body Is Telling Us",
    date: "2014",
    location: "University of Pennsylvania, MOOC on Coursera.org",
    organization: "",
  },
  {
    title: "10th International Conference, Nanosciences & Nanotechnologies",
    date: "09-12 July 2013",
    location: "Thessaloniki, Greece",
    organization: "",
  },
  {
    title: "7th International Summer School, N&N: Organic Electronics & Nanomedicine",
    date: "06-13 July 2013",
    location: "Thessaloniki, Greece",
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
      "Presented at the 5th Revenue Masterclass Crete 2025, focusing on transforming data into business value through BI systems.",
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