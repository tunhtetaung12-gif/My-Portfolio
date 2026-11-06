"use client";

import { useState } from "react";
import Image from "next/image";
import { Terminal, ArrowRight, Check, Copy } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const email = "tunhtetaung532@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle Background Dev Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Atmospheric Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Candidate Name & Title */}
            <div className="space-y-2 mb-4">
              <p className="text-sm sm:text-base font-mono font-medium text-sky-600 dark:text-sky-400 tracking-wide uppercase">
                Tun Htet Aung
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                Full-Stack Web Developer
              </h1>
            </div>

            {/* Exact Required Bio */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mt-2 mb-8 max-w-2xl">
              Web developer specializing in decoupled architectures using
              Laravel REST APIs and Next.js frontends. Currently building
              enterprise tools at Ace Plus Solutions, with a strong focus on
              complex state management, database migrations, and seamless UI/UX.
              Passionate about Linux environments and automated development
              workflows.
            </p>

            {/* Tech Focus Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Laravel REST APIs",
                "Next.js Frontends",
                "Decoupled Architectures",
                "Ubuntu Linux",
                "Docker Containers",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800/80"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-slate-950 text-white hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 shadow-sm hover:shadow transition-all active:scale-95"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#tech-stack"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
              >
                <Terminal className="w-4 h-4 text-sky-500" />
                View Tech Stack
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                title="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>tunhtetaung532@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (Profile Image) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Container Frame with Linux Dev Aesthetic */}
            <div className="w-full max-w-[380px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-300/80 dark:border-slate-800 shadow-xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* View Content: Professional Profile Photo */}
              <div className="p-4 sm:p-5 flex flex-col items-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 group shadow-inner">
                  <Image
                    src="/img/Profile.jpg"
                    alt="Tun Htet Aung - Full-Stack Web Developer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay Terminal Badge */}
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md border border-slate-800/80 rounded-md py-1 px-2.5 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Ace Plus Solutions</span>
                    </span>
                    <span className="text-sky-400 text-[10px]">
                      Dev / Batch-9
                    </span>
                  </div>
                </div>

                {/* Developer Telemetry Bar */}
                <div className="w-full mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-1.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      ROLE
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-0.5">
                      Full-Stack
                    </p>
                  </div>
                  <div className="p-1.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      STACK
                    </p>
                    <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mt-0.5">
                      Next+Laravel
                    </p>
                  </div>
                  <div className="p-1.5 rounded bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      ENV
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-0.5">
                      Ubuntu/CLI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
