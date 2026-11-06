import { Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-800 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>PERSONAL TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Clean, Simple Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Hi, I&apos;m Tun Htet Aung. I&apos;m a developer who enjoys solving complex problems with simple, elegant code. My daily stack revolves around Laravel, Next.js, and Docker on Ubuntu.
          </p>
        </div>
      </div>
    </section>
  );
}
