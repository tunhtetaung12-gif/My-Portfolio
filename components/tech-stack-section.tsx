import { Server, Database, Cpu, Layers } from "lucide-react";

interface TechGroup {
  category: string;
  description: string;
  items: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

const techCategories: TechGroup[] = [
  {
    category: "Frontend",
    description: "Component-driven, type-safe web interfaces",
    items: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Zustand" },
      { name: "Vue.js" },
    ],
  },
  {
    category: "Backend",
    description: "Robust REST APIs and server-side business logic",
    items: [
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "Node.js" },
      { name: "REST API Design", highlight: true },
    ],
  },
  {
    category: "Database & DevOps",
    description: "Data persistence, container orchestration & VCS",
    items: [
      { name: "MySQL", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Git", highlight: true },
      { name: "GitLab", highlight: true },
      { name: "Ubuntu Linux", highlight: true },
    ],
  },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-800 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE TOOLING & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Tech Stack & Environment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            A battle-tested developer stack tailored for decoupled architectures, reliable API design, and automated Linux container workflows.
          </p>
        </div>

        {/* Modern Badges Grid (Frontend, Backend, Database & DevOps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                    {cat.category === "Frontend" && <Layers className="w-4 h-4" />}
                    {cat.category === "Backend" && <Server className="w-4 h-4" />}
                    {cat.category === "Database & DevOps" && <Database className="w-4 h-4" />}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        tech.highlight
                          ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold border border-slate-300 dark:border-slate-700 shadow-xs"
                          : "bg-slate-50 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
