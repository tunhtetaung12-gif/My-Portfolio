"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Terminal, ArrowRight, Check, Copy, ExternalLink } from "lucide-react";
import ProfileCard from "./ProfileCard";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.62 1.62 0 1 0 1.62 1.62 1.63 1.63 0 0 0-1.62-1.62Z" />
    </svg>
  );
}

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const email = "tunhtetaung532@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/tun-htet-aung-74315736a";

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
              Web developer specializing in decoupled architectures using Laravel REST APIs and Next.js frontends. Currently building enterprise tools at Ace Plus Solutions, with a strong focus on complex state management, database migrations, and seamless UI/UX. Passionate about Linux environments and automated development workflows.
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

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-mono bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 transition-colors"
                title="Connect on LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (Profile Card) */}
          <div className="lg:col-span-5 flex justify-center items-center py-4">
            <ProfileCard
              name="Tun Htet Aung"
              title="Full-Stack Web Developer"
              avatarUrl="/img/Profile.jpg"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt={true}
              intro={true}
              showUserInfo={false}
              theme={resolvedTheme === "light" ? "light" : "dark"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
