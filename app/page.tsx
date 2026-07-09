import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Code2,
  Layers,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* ── NAV ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-sky-100 shadow-sm shadow-sky-100/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-extrabold tracking-tight text-sky-600 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-pulse" />
            Tun Htet Aung
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            {["#about", "#projects", "#contact"].map((href) => (
              <a key={href} href={href}
                className="hover:text-sky-500 transition-colors capitalize">
                {href.replace("#", "")}
              </a>
            ))}
          </nav>
          <a href="#contact"
            className="px-5 py-2 text-sm font-bold rounded-full bg-sky-500 text-white hover:bg-sky-600 shadow-md shadow-sky-200 transition-all">
            Hire Me
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-sky-100/60 blur-2xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-slate-300 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110" />
              {/* Ring decoration */}
              <div className="absolute inset-0 rounded-full border-[6px] border-sky-200/60 scale-110" />
              <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-sky-200/60 transition-transform duration-500 group-hover:scale-[1.03]">
                <Image src="/img/Profile.jpg" alt="Tun Htet Aung" fill className="object-cover" priority />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-sky-100 shadow-lg rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs font-bold text-sky-600 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 border border-sky-200 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Junior Software Engineer · Ace Plus Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-slate-500 bg-clip-text text-transparent">
                Tun Htet Aung
              </span>{" "}
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
              I'm passionate about building robust, scalable web applications. With a solid foundation from{" "}
              <span className="text-slate-700 font-semibold">Polytechnic University (Maubin)</span>, I turn complex problems into clean, intuitive software.
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "PHP", "Laravel", "MySQL", "Tailwind CSS"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-white text-sky-600 border border-sky-200 shadow-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 font-bold text-white bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl shadow-lg shadow-sky-300/40 hover:shadow-sky-400/50 hover:scale-[1.02] transition-all duration-200">
                Let's Work Together <ChevronRight className="ml-1 w-4 h-4" />
              </a>
              <a href="#projects"
                className="inline-flex items-center justify-center px-7 py-3 font-bold text-sky-600 bg-white border-2 border-sky-200 rounded-xl hover:bg-sky-50 hover:border-sky-400 transition-all duration-200">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6 bg-white border-y border-sky-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-sky-400 to-blue-500" />
              <h2 className="text-3xl font-extrabold text-slate-900">Background & Experience</h2>
            </div>
            <p className="text-slate-500 leading-relaxed text-lg">
              My journey began at{" "}
              <span className="font-semibold text-slate-800">Polytechnic University (Maubin)</span>, where I built a strong foundation in system design, data structures, and algorithmic problem-solving. That academic grounding launched me directly into professional software development.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg">
              As a Junior Software Engineer at{" "}
              <span className="font-semibold text-slate-800">Ace Plus Solutions</span>, I collaborate on cross-functional teams to design and ship scalable features, always focused on clean code, performance, and user experience.
            </p>

            {/* Skill stat cards */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "Projects Built", value: "2+" },
                { label: "Tech Stacks", value: "6+" },
              ].map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-2xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-extrabold text-sky-500">{s.value}</p>
                  <p className="text-xs font-semibold text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h3 className="text-xl font-extrabold text-slate-900">Timeline</h3>
            <div className="relative border-l-2 border-sky-200 ml-4 pl-8 space-y-8">
              {/* Experience */}
              <div className="relative">
                <span className="absolute -left-[2.85rem] top-1 flex items-center justify-center w-9 h-9 rounded-full bg-sky-100 text-sky-600 border-2 border-white shadow">
                  <Briefcase className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-sky-500 uppercase tracking-widest">Present</span>
                <h4 className="text-base font-extrabold text-slate-900 mt-0.5">Junior Software Engineer</h4>
                <p className="text-sm text-slate-400 font-medium">Ace Plus Solutions</p>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Building web apps, maintaining RESTful APIs, and optimizing database performance.
                </p>
              </div>
              {/* Education */}
              <div className="relative">
                <span className="absolute -left-[2.85rem] top-1 flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 text-blue-600 border-2 border-white shadow">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">Graduated</span>
                <h4 className="text-base font-extrabold text-slate-900 mt-0.5">Computer Science</h4>
                <p className="text-sm text-slate-400 font-medium">Polytechnic University (Maubin)</p>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Specialized in software development, database design, and algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-sky-50/60 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold border border-sky-200 mb-4">
              <Code2 className="w-3.5 h-3.5" /> Featured Work
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900">Projects I've Built</h2>
            <p className="text-slate-400 mt-2 text-lg">Complex, full-stack applications from the ground up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gym Management */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-52 bg-gradient-to-br from-sky-400 via-blue-400 to-sky-300 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,white,transparent)]" />
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                <Code2 className="w-20 h-20 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  Full Stack
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 group-hover:text-sky-600 transition-colors">
                  Gym Management System
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">
                  A comprehensive platform for gym operations — member check-ins, membership plans, automated billing, trainer scheduling, and a real-time analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Node.js", "PostgreSQL", "Tailwind"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Management */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-52 bg-gradient-to-br from-slate-500 via-slate-400 to-sky-400 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,white,transparent)]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-8 -translate-x-8" />
                <Layers className="w-20 h-20 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  Full Stack
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 group-hover:text-slate-600 transition-colors">
                  Event Management System
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">
                  A powerful event platform with dynamic creation tools, attendee registration, QR-based ticketing, real-time analytics, and automated email reminders.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Laravel", "MySQL", "Tailwind CSS"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6 bg-white border-t border-sky-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold border border-sky-200 mb-4">
              <Mail className="w-3.5 h-3.5" /> Get In Touch
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900">Let's Connect</h2>
            <p className="text-slate-400 mt-2 text-lg">Have an opportunity or project in mind? Reach out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Email Box */}
            <a href="mailto:tunhtetaung532@gmail.com"
              className="group flex flex-col items-center text-center gap-4 p-8 bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
              <span className="flex-shrink-0 w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Mail className="w-7 h-7" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors mt-1">
                  tunhtetaung532@gmail.com
                </p>
              </div>
            </a>

            {/* Phone Box */}
            <a href="tel:09770909330"
              className="group flex flex-col items-center text-center gap-4 p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300">
              <span className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Phone className="w-7 h-7" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors mt-1">
                  09770909330
                </p>
              </div>
            </a>

            {/* Location Box */}
            <div className="flex flex-col items-center text-center gap-4 p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-3xl shadow-sm">
              <span className="flex-shrink-0 w-16 h-16 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shadow-sm">
                <MapPin className="w-7 h-7" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold text-slate-800 mt-1">Yangon, Myanmar</p>
              </div>
            </div>
          </div>

          {/* Decorative quote */}
          <div className="mt-12 max-w-3xl mx-auto p-8 bg-gradient-to-br from-sky-500 to-blue-500 rounded-3xl text-white shadow-lg shadow-sky-200 text-center">
            <p className="text-lg font-medium leading-relaxed italic opacity-95">
              "I believe great software is built at the intersection of clean code and genuine user empathy."
            </p>
            <p className="text-sm font-bold mt-4 opacity-75">— Tun Htet Aung</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-to-r from-sky-600 to-blue-600 py-6 text-center text-sm font-semibold text-white/80">
        © {new Date().getFullYear()} Tun Htet Aung · All Rights Reserved.
      </footer>
    </div>
  );
}
