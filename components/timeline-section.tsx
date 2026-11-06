"use client";

import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
} from "lucide-react";

interface TimelineItem {
  id: string;
  type: "work" | "internship" | "certification" | "education";
  organization: string;
  role: string;
  dateBadge: string;
  isCurrent?: boolean;
  description: string;
  bulletPoints?: string[];
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "aceplus",
    type: "work",
    organization: "Ace Plus Solutions",
    role: "Web Developer (Talent Professional Program Batch-9)",
    dateBadge: "Present",
    isCurrent: true,
    description:
      "Collaborated with team members on GitLab, managing subtasks and feature developments using custom SSH keys.",
    bulletPoints: [
      "Engineered decoupled enterprise frontend applications with Next.js (TypeScript) connecting to Laravel REST APIs",
      "Handled complex state management, dynamic table filters, and pagination state retention",
      "Managed feature development branching, peer code reviews, and subtask tracking in GitLab",
    ],
    tags: ["Next.js", "Laravel", "GitLab", "MySQL"],
  },
  {
    id: "ri-it",
    type: "internship",
    organization: "RI IT College",
    role: "Business Analysis Intern (April–June 2025)",
    dateBadge: "April – June 2025",
    description:
      "Gained strong understanding of translating business requirements into code.",
    bulletPoints: [
      "Translated high-level business stakeholder requirements into technical specifications and user stories",
      "Created functional project workflows, database relationship diagrams, and client endpoint scopes",
      "Bridged the communication gap between business objectives and engineering implementations",
    ],
    tags: [
      "Business Analysis",
      "Requirements Engineering",
      "Workflow Modeling",
    ],
  },
  {
    id: "certifications",
    type: "certification",
    organization: "Professional Certifications",
    role: "Specialized Software Development Programs",
    dateBadge: "Certified",
    description:
      "Intensive practical programs covering full-stack Laravel/Vue.js engineering and AI-assisted development tools.",
    bulletPoints: [
      "Code Lab AZ Batch 11 & 12 (Laravel/Vue.js)",
      "Technortal AI-powered software development",
    ],
    tags: ["Laravel", "Vue.js", "AI-Powered Dev", "Code Lab AZ", "Technortal"],
  },
  {
    id: "polytechnic",
    type: "education",
    organization: "Polytechnic University (Maubin)",
    role: "Computer Science",
    dateBadge: "Graduate",
    description:
      "Specialized in software development, relational database schemas, data structures, and algorithmic foundations.",
    tags: ["Computer Science", "Database Design", "Software Architecture"],
  },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-20 md:py-28 relative bg-slate-50/60 dark:bg-slate-900/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-800 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>CAREER PATH & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-normal">
            A chronological timeline of engineering roles, internships,
            specialized certifications, and university foundations.
          </p>
        </div>

        {/* Vertical Chronological Timeline */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-transform duration-200 group-hover:scale-110 shadow-sm ${
                  item.isCurrent
                    ? "bg-sky-500 text-white border-white dark:border-slate-950 ring-4 ring-sky-500/20"
                    : item.type === "certification"
                      ? "bg-amber-500 text-white border-white dark:border-slate-950"
                      : item.type === "internship"
                        ? "bg-blue-600 text-white border-white dark:border-slate-950"
                        : "bg-slate-800 text-slate-200 border-white dark:border-slate-950"
                }`}
              >
                {item.type === "work" && (
                  <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                )}
                {item.type === "internship" && (
                  <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                )}
                {item.type === "certification" && (
                  <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                )}
                {item.type === "education" && (
                  <GraduationCap className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                      {item.organization}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                      item.isCurrent
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {item.isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {item.dateBadge}
                  </span>
                </div>

                {/* Role / Subtitle */}
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3">
                  {item.role}
                </p>

                {/* Primary Description (Exact copy) */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Points if any */}
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <ul className="space-y-1.5 mb-4 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {item.bulletPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
