"use client";

import {
  Kanban,
  LayoutDashboard,
  Dumbbell,
  Share2,
  CheckCircle2,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imagePlaceholderText: string;
  highlight: string;
  features: string[];
  tags: string[];
  visualMockup: "tms" | "gms" | "foodshare";
}

const projects: ProjectItem[] = [
  {
    id: "tms",
    title: "Ticket Management System (TMS)",
    subtitle: "Enterprise Customer Support & Task Engine",
    badge: "Next.js + Laravel API",
    imagePlaceholderText: "Dashboard UI showing Gantt charts or Kanban boards",
    highlight:
      "Engineered a complete customer support system with a Next.js (TypeScript) frontend and Laravel backend.",
    features: [
      "Developed Gantt chart components & Kanban data migration scripts",
      "Dynamic report filters & advanced pagination state retention",
      "Built an export drawer UI with CSV/PDF output streaming",
      "Complex status filtering and role-based access control (RBAC)",
    ],
    tags: ["Next.js", "TypeScript", "Laravel", "REST API", "Tailwind CSS", "MySQL"],
    visualMockup: "tms",
  },
  {
    id: "gms",
    title: "GMS Elite Gym Management System",
    subtitle: "Membership, Scheduling & Subscription Portal",
    badge: "Decoupled Architecture",
    imagePlaceholderText: "Gym management portal UI",
    highlight:
      "Clean decoupled architecture separating a Laravel API backend from a Next.js frontend.",
    features: [
      "Decoupled API architecture with secure token-based authentication",
      "Member check-in portal & recurring membership plan workflows",
      "Trainer scheduling dashboard with automated booking conflicts handling",
      "Real-time attendance metrics & financial reporting graphs",
    ],
    tags: ["Next.js", "React", "TypeScript", "Laravel", "Tailwind CSS", "REST API"],
    visualMockup: "gms",
  },
  {
    id: "foodshare",
    title: "FoodShare Portal",
    subtitle: "Community Resource Allocation & Donation Feed",
    badge: "Blade & Tailwind CSS",
    imagePlaceholderText: "Community donation portal UI",
    highlight:
      "Community-driven project demonstrating proficiency with Laravel Blade templates, routing, and Tailwind CSS.",
    features: [
      "Community donation listings with live reservation and claim tracking",
      "Clean route design leveraging Laravel route model binding & middleware",
      "Responsive, accessible UI components crafted exclusively with Tailwind CSS",
      "Donation categorization, surplus pickup alerts, and donor dashboard",
    ],
    tags: ["Laravel", "Blade Templates", "Tailwind CSS", "PHP", "Routing"],
    visualMockup: "foodshare",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-800 mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>PORTFOLIO / FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            Enterprise tools, decoupled full-stack systems, and production web applications built with Laravel REST APIs and Next.js frontends.
          </p>
        </div>

        {/* Clean 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              {/* ── PROMINENT IMAGE PLACEHOLDER (Top of Card) ── */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
                {/* Mock Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800/80 text-xs font-mono text-slate-400 z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] truncate max-w-[200px] text-slate-400">
                    {project.id}.preview.local
                  </span>
                  <span className="text-[10px] font-semibold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                    {project.badge}
                  </span>
                </div>

                {/* Exact Required Placeholder Banner */}
                <div className="bg-sky-950/90 border-b border-sky-800/60 px-3.5 py-1.5 flex items-center justify-between text-sky-300 text-[11px] font-mono z-10">
                  <span className="font-semibold truncate">
                    [Image Placeholder: {project.imagePlaceholderText}]
                  </span>
                  <span className="text-[10px] text-sky-400 uppercase tracking-widest hidden sm:inline">
                    Wireframe / Mock
                  </span>
                </div>

                {/* Stylized Mock UI Graphic Inside Placeholder */}
                <div className="relative flex-1 p-4 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* UI Renderings by project */}
                  {project.visualMockup === "tms" && (
                    <div className="relative z-1 space-y-2 font-mono text-xs">
                      {/* Mini Gantt / Timeline Row */}
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-inner">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                          <span className="text-sky-400 font-bold flex items-center gap-1">
                            <Kanban className="w-3 h-3" /> TMS Gantt & Kanban View
                          </span>
                          <span className="text-emerald-400 text-[10px]">Active Sprint</span>
                        </div>
                        {/* Timeline bars */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-400 w-16 truncate">Export UI</span>
                            <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-sky-400 h-full w-[85%] rounded-full" />
                            </div>
                            <span className="text-[9px] text-slate-400">85%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-400 w-16 truncate">Gantt Sync</span>
                            <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-blue-500 h-full w-[100%] rounded-full" />
                            </div>
                            <span className="text-[9px] text-emerald-400">Done</span>
                          </div>
                        </div>
                      </div>

                      {/* Mini Kanban Columns */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Backlog</p>
                          <div className="p-1 rounded bg-slate-800/90 text-[10px] text-slate-300">
                            Status Filter
                          </div>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <p className="text-[10px] text-amber-400 font-bold uppercase mb-1">In Progress</p>
                          <div className="p-1 rounded bg-slate-800/90 text-[10px] text-amber-200">
                            Pagination Retention
                          </div>
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <p className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Done</p>
                          <div className="p-1 rounded bg-slate-800/90 text-[10px] text-emerald-300">
                            Kanban Migration
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.visualMockup === "gms" && (
                    <div className="relative z-1 space-y-2.5 font-mono text-xs">
                      {/* Metric Tiles */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                          <p className="text-[10px] text-slate-400">MEMBERS</p>
                          <p className="text-base font-bold text-sky-400 mt-0.5">1,280</p>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                          <p className="text-[10px] text-slate-400">TRAINERS</p>
                          <p className="text-base font-bold text-slate-200 mt-0.5">24 Active</p>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                          <p className="text-[10px] text-slate-400">API STATUS</p>
                          <p className="text-base font-bold text-emerald-400 mt-0.5">200 OK</p>
                        </div>
                      </div>
                      {/* Schedule Row */}
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-sky-400" />
                          <div>
                            <p className="text-xs font-bold text-slate-200">Decoupled Laravel API</p>
                            <p className="text-[10px] text-slate-400">Next.js Client · JWT Bearer Auth</p>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                          Synchronized
                        </span>
                      </div>
                    </div>
                  )}

                  {project.visualMockup === "foodshare" && (
                    <div className="relative z-1 space-y-2 font-mono text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="flex items-center justify-between text-[11px] mb-2">
                          <span className="text-amber-400 font-bold flex items-center gap-1.5">
                            <Share2 className="w-3.5 h-3.5" /> Community FoodShare Listings
                          </span>
                          <span className="text-slate-400 text-[10px]">Blade + Tailwind</span>
                        </div>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 rounded bg-slate-800 flex items-center justify-between text-slate-300">
                            <span>Fresh Produce Care Package (Yangon West)</span>
                            <span className="text-emerald-400 font-bold">Available</span>
                          </div>
                          <div className="p-1.5 rounded bg-slate-800 flex items-center justify-between text-slate-300">
                            <span>Surplus Bakery Assortment (Pickup: 6PM)</span>
                            <span className="text-amber-400 font-bold">Claimed</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-2.5 py-1.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>{"@extends('layouts.app')"} · Tailwind Responsive</span>
                        <span className="text-sky-400">Routes OK</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── CARD CONTENT (Below Image Placeholder) ── */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Title and Category */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Highlight Callout (Exact required copy) */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border-l-4 border-sky-500 mb-5">
                  <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    <span className="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px] block mb-0.5">
                      Highlight
                    </span>
                    {project.highlight}
                  </p>
                </div>

                {/* Short, Readable List of Features (Exact required copy) */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Key Features & Implementations:
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
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
