import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";

const CREDLY = "https://www.credly.com/users/theswagata1/badges";

/* Headline credentials — the ones worth a full card */
const featured = [
  {
    title: "Forward Deployed Engineer",
    issuer: "Scaler School of Technology",
    date: "Jun 2026",
    initial: "S",
  },
  {
    title: "AI Product Manager",
    issuer: "HelloPM",
    date: "May 2026",
    initial: "H",
  },
  {
    title: "McKinsey AI & Digital",
    issuer: "McKinsey & Company",
    date: "Jul 2025",
    initial: "M",
  },
  {
    title: "Gemini Enterprise Agent Ready",
    issuer: "Google",
    date: "May 2026",
    initial: "G",
  },
  {
    title: "GenAI Powered Data Analytics (Job Sim)",
    issuer: "Tata · Forage",
    date: "Jun 2026",
    initial: "T",
  },
  {
    title: "AWS APAC Solutions Architecture (Job Sim)",
    issuer: "Amazon · Forage",
    date: "Dec 2024",
    initial: "A",
  },
  {
    title: "AI Thinking Podium Member",
    issuer: "The AI Thinking Podium",
    date: "Apr 2026",
    initial: "Ai",
  },
  {
    title: "Google Certifications",
    issuer: "Google",
    date: "Feb 2025",
    initial: "G",
  },
];

/* Google Cloud skill badges — the full earned set, shown as compact chips */
/* Real Google Cloud Skills Boost badges (arcade trivia / levels excluded) */
const gcpBadges = [
  "Gen AI: Unlock Foundational Concepts",
  "Gen AI: Navigate the Landscape",
  "Gen AI: Beyond the Chatbot",
  "Gen AI Apps: Transform Your Work",
  "Gen AI Agents: Transform Your Organization",
  "Innovating with Google Cloud AI",
  "Customer Experience with Google AI Architecture",
  "Use Machine Learning APIs on Google Cloud",
  "Analyze Sentiment with Natural Language API",
  "Implement Speech and Language Solutions with Pre-trained APIs",
  "Analyze Speech and Language with Google APIs",
  "Using the Google Cloud Speech API",
  "Build a Data Warehouse with BigQuery",
  "Perform Predictive Data Analysis in BigQuery",
  "Engineer Data for Predictive Modeling with BigQuery ML",
  "Streaming Analytics into BigQuery",
  "Analyze BigQuery Data in Connected Sheets",
  "Build LookML Objects in Looker",
  "Exploring Data Transformation with Google Cloud",
  "Enrich Metadata and Discovery of Lakehouse Data",
  "Secure Lakehouse Data",
  "Share Data Using Google Data Cloud",
  "Manage Kubernetes in Google Cloud",
  "Develop Serverless Applications on Cloud Run",
  "Build Event-Driven Applications with Eventarc",
  "Implement Event-Driven Messaging and Automation Workflows",
  "Deploy and Secure Serverless APIs with API Gateway",
  "Deploy and Manage Applications on Google App Engine",
  "Implementing Cloud Load Balancing for Compute Engine",
  "Implement Cloud Storage and Data Protection Solutions",
  "Store, Process, and Manage Data — Console",
  "Store, Process, and Manage Data — Command Line",
  "Set Up an App Dev Environment on Google Cloud",
  "Build a Website on Google Cloud",
  "Monitor and Manage Google Cloud Resources",
  "Monitoring in Google Cloud",
  "Networking Fundamentals on Google Cloud",
  "The Basics of Google Cloud Compute",
  "Modernize Infrastructure and Applications",
  "Scaling with Google Cloud Operations",
  "Digital Transformation with Google Cloud",
  "Trust and Security with Google Cloud",
  "Google Workspace Core Services",
  "Google Workspace Security",
  "Google Workspace Data Governance",
  "Google Workspace Troubleshooting",
  "Google Workspace User and Resource Management",
];

/* Skills grouped by domain so 60+ entries stay scannable */
const skillGroups = [
  {
    label: "Languages",
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C / C++",
      "MATLAB",
      "OrCAD Capture CIS",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Electron.js",
      "Mastra",
      "Tailwind CSS",
      "Bootstrap",
      "Spring Boot",
    ],
  },
  {
    label: "Web & APIs",
    items: [
      "HTML5",
      "CSS3",
      "RESTful APIs",
      "JSON",
      "WebSockets",
      "WebRTC",
      "Responsive Design",
    ],
  },
  {
    label: "Databases",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Object-Relational Mapping (ORM)",
    ],
  },
  {
    label: "Cloud, DevOps & Tools",
    items: [
      "Google Cloud (GCP)",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "Vercel",
      "Firebase",
      "VS Code",
      "Microsoft 365",
    ],
  },
  {
    label: "AI & Data",
    items: [
      "AI Analytics",
      "Artificial Intelligence",
      "Generative AI",
      "BigQuery",
      "Exploratory Data Analysis",
      "Model Selection",
      "Data Analysis",
      "Analytic Reporting",
      "Regulatory Compliance",
      "Ethical Reasoning",
    ],
  },
  {
    label: "Architecture & CS Foundations",
    items: [
      "Full-Stack Web Development",
      "Microservices Architecture",
      "API Design",
      "Scalable Web Applications",
      "Cloud Deployment",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Debugging",
    ],
  },
  {
    label: "Design",
    items: [
      "UI / UX",
      "Design Thinking",
      "Graphic Design",
      "Figma",
      "Canva",
      "Adobe Illustrator",
    ],
  },
  {
    label: "GIS & Geospatial",
    items: [
      "Geographic Information Systems (GIS)",
      "GIS Modeling",
      "GIS Applications",
      "ArcMap",
      "Remote Sensing",
    ],
  },
  {
    label: "Leadership & Soft Skills",
    items: [
      "Leadership",
      "Collaboration",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Planning",
      "Time Management",
      "Adaptability",
      "Decision-Making",
      "Public Speaking",
      "Critical Thinking",
      "Project Management",
      "Agile",
    ],
  },
];

const gcpStats = [
  { to: 101012, suffix: "", group: true, label: "experience points" },
  { to: 295, suffix: "", group: false, label: "hands-on labs" },
  { to: 74, suffix: "", group: false, label: "skill badges" },
];

/* Full progress breakdown (Classroom 0 omitted) */
const gcpProgress = [
  { value: "52", label: "Courses" },
  { value: "295", label: "Lessons" },
  { value: "92", label: "Checks" },
  { value: "22", label: "Games" },
  { value: "2", label: "Paths" },
];

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <div className="mb-14">
        <Reveal className="mb-3 text-xs uppercase tracking-[0.35em] text-ink/50">
          (credentials)
        </Reveal>
        <Reveal
          as="h2"
          className="text-3xl font-medium tracking-tight text-ink md:text-5xl"
        >
          certified &amp; credentialed.
        </Reveal>
        <Reveal className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
          40+ industry certifications spanning cloud, data, generative AI, and
          product — from Google Cloud and McKinsey to Scaler and the AWS &amp;
          Tata job simulations.
        </Reveal>
      </div>

      {/* Featured credential cards */}
      <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div className="group flex h-full flex-col gap-4 bg-cream p-6 transition-colors duration-300 hover:bg-ink">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-semibold text-white">
                {c.initial}
              </span>
              <div className="mt-auto">
                <h3 className="text-lg font-medium leading-snug text-ink group-hover:text-cream">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-ink/60 group-hover:text-cream/70">
                  {c.issuer}
                </p>
                <p className="mono mt-2 text-xs uppercase tracking-wider text-ink/40 group-hover:text-cream/50">
                  {c.date}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Google Cloud achievement panel */}
      <Reveal
        data-theme="dark"
        className="mt-12 overflow-hidden rounded-3xl bg-ink p-8 text-cream md:p-12"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mono text-xs uppercase tracking-[0.3em] text-accent">
              Google Cloud · Arcade
            </span>
            <h3 className="mt-2 text-2xl font-medium md:text-3xl">
              295 labs. 74 skill badges. One relentless year.
            </h3>
          </div>
          <a
            href={CREDLY}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-300 hover:border-accent hover:text-accent md:mt-0"
          >
            verify on Credly
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-10 grid gap-8 border-t border-cream/15 pt-8 sm:grid-cols-3">
          {gcpStats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter to={s.to} suffix={s.suffix} group={s.group} />
              </div>
              <div className="mt-1 text-sm text-cream/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream/15 pt-6">
          {gcpProgress.map((p) => (
            <div key={p.label} className="flex items-baseline gap-2">
              <span className="text-xl font-semibold tracking-tight">
                {p.value}
              </span>
              <span className="text-sm text-cream/55">{p.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-cream/70">
          Built practical solutions across Compute Engine, BigQuery, and
          Kubernetes through challenge-based labs spanning cloud &amp; storage,
          data analytics, and AI/ML — earning every badge below.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {gcpBadges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-cream/20 px-3 py-1.5 text-xs text-cream/80 transition-colors hover:border-accent hover:text-accent"
            >
              {b}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Skills — grouped by domain */}
      <div className="mt-16">
        <Reveal className="mb-8 text-xs uppercase tracking-[0.35em] text-ink/50">
          (skills)
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 80}>
              <div className="border-t border-ink/15 pt-5">
                <h4 className="mono mb-4 text-xs uppercase tracking-[0.2em] text-accent">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink/20 px-3.5 py-1.5 text-sm text-ink/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
