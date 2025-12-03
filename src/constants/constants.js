export const projects = [
  {
    id: 1,
    title: "SecScan – High-Performance Secret Scanner (Rust)",
    description:
      "A fast Rust-based scanner that recursively audits directories or GitHub orgs/users for secrets. Uses configurable regex rules, masks findings, and can open GitHub Issues automatically.",
    tags: ["Rust", "Security", "GitHub API", "Regex Engine"],
    source: "https://github.com/mub4shir/secscan",
    visit: "",
  },
  {
    id: 2,
    title: "TS Monolith Splitter",
    description:
      "Automatically splits massive (10,000+ line) TypeScript controller-service monoliths into clean modules. Uses heuristics such as Swagger/OpenAPI tags, naming patterns, and fallback grouping.",
    tags: ["TypeScript", "Code Mod", "AST", "Refactoring Automation"],
    source: "https://github.com/mub4shir/ts-monolith-splitter",
    visit: "",
  },

  {
    id: 3,
    title: "LedgerDB – Double-Entry Engine",
    description:
      "Financial-grade double-entry ledger with immutable entries, ACID semantics, and complete auditability.",
    tags: ["PostgreSQL", "PL/pgSQL", "Drizzle/Prisma", "Zod"],
    source: "https://github.com/mub4shir/ledgerdb",
    visit: "",
  },
  {
    id: 4,
    title: "SearchKit – Elastic Facets",
    description:
      "Elasticsearch query + facet abstraction with pagination, typo tolerance, and aggregations.",
    tags: ["Elasticsearch", "TypeScript", "API Design"],
    source: "https://github.com/mub4shir/searchkit",
    visit: "",
  },
  {
    id: 5,
    title: "ETL Pipelines – Mongo → Postgres",
    description:
      "Incremental ETL with change capture, aggregation pipelines, and schema mapping.",
    tags: ["MongoDB", "Aggregation Pipeline", "PostgreSQL", "ETL"],
    source: "https://github.com/mub4shir/mongo-to-pg-etl",
    visit: "",
  },
  {
    id: 6,
    title: "AuthCore – Passwordless & Sessions",
    description:
      "Passwordless magic links, hardened sessions, and role-based access control.",
    tags: ["Auth", "JWT", "RBAC", "TOTP", "Node.js"],
    source: "https://github.com/mub4shir/authcore",
    visit: "",
  },
  {
    id: 7,
    title: "EdgeCache – CDN Functions",
    description:
      "Edge runtime transforms, request signing, and cache invalidation strategies.",
    tags: ["Cloudflare/Vercel Edge", "TypeScript", "Caching"],
    source: "https://github.com/mub4shir/edgecache",
    visit: "",
  },
  {
    id: 8,
    title: "OpsKit – CI/CD Templates",
    description:
      "Reusable pipelines with build caching, preview envs, and automated security gates.",
    tags: ["CI/CD", "GitHub Actions", "Docker", "Trivy/Sonar"],
    source: "https://github.com/mub4shir/opskit",
    visit: "",
  },
  {
    id: 9,
    title: "NotifX – Async Notifications",
    description:
      "Queue-driven email/SMS/webhook dispatcher with retries, DLQ, and observability hooks.",
    tags: ["Node.js", "BullMQ", "Redis", "AWS SES", "Webhooks"],
    source: "https://github.com/mub4shir/notifx",
    visit: "",
  },

  {
    id: 10,
    title: "EventStream – Low-Latency Ingest",
    description:
      "High-throughput Node service with backpressure, Redis buffering, and idempotent writes into Postgres.",
    tags: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "CQRS"],
    source: "https://github.com/mub4shir/eventstream",
    visit: "",
  },
  {
    id: 11,
    title: "EdTech-Management API",
    description:
      "Backend API where schools register and manage students. CRUD operations, authentication, and admin flows.",
    tags: ["MongoDB", "Express", "Node"],
    source: "https://github.com/mub4shir/EdTech-Management",
    visit: "https://github.com/mub4shir/EdTech-Management",
  },

  {
    id: 12,
    title: "Personal Portfolio",
    description:
      "My earlier personal portfolio showcasing skills, education, and experience.",
    tags: ["React", "JavaScript"],
    source: "https://www.alimubashir.com/",
    visit: "https://github.com/mub4shir/portfolio_website",
  },

  {
    id: 13,
    title: "Quran Verse Generator",
    description: "Generates a random verse every time a button is pressed.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    source: "https://anyquranverse.netlify.app/",
    visit: "https://github.com/mub4shir/Quran-Verse",
  },

  {
    id: 14,
    title: "Weather App",
    description:
      "Simple weather app that fetches real-time weather based on input or current location.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    source: "https://github.com/mub4shir",
    visit: "https://github.com/mub4shir",
  },

  {
    id: 15,
    title: "Hotel BT",
    description:
      "A simple website showcasing features of the fictional Hotel BT.",
    tags: ["HTML", "CSS"],
    source: "https://focused-curie-8db7fa.netlify.app/",
    visit: "https://github.com/mub4shir/HBT",
  },
];
export const TimeLineData = [
  {
    year: 2002,
    text: "Started schooling at St. Joseph's Higher Secondary School, Baramulla",
  },
  { year: 2011, text: "Completed primary/secondary education (St. Joseph's)" },
  { year: 2012, text: "Joined SSM Higher Secondary School, Srinagar" },
  { year: 2015, text: "Completed higher secondary education (SSM Srinagar)" },
  { year: 2016, text: "Started B.Tech in Information Technology at BGSBU" },
  { year: 2020, text: "Graduated B.Tech in Information Technology (BGSBU)" },
  {
    year: 2021,
    text: "Started as Software Development Engineer (Backend) at Lythouse",
  },
  { year: 2023, text: "Promoted to SDE-2 (Backend) at Lythouse" },
  { year: 2024, text: "Joined RMT Engineering as Senior Software Engineer" },
];
