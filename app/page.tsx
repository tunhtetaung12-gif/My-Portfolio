"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Send, 
  Sparkles,
  CheckCircle,
  Code2,
  Layers,
  ArrowUpRight,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-1 hover:opacity-80 transition-opacity">
            Tun Htet Aung<span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-full hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-zinc-950 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col gap-24">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20 border-b border-zinc-200/50 dark:border-zinc-800/50">
          {/* Profile Photo (cols 1 to 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Premium Glow effect */}
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src="/img/Profile.jpg" 
                  alt="Tun Htet Aung"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Text (cols 6 to 12) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100/50 dark:border-blue-800/30 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Available for New Opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Tun Htet Aung</span> 👋
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mt-3">
              Junior Software Engineer @ Ace Plus Solutions
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed max-w-2xl">
              I am passionate about building robust, efficient, and scalable web applications. Equipped with a solid computer science background from Polytechnic University (Maubin), I thrive on translating complex technical architectures into simple, intuitive user experiences.
            </p>

            {/* Tech Badge Chips */}
            <div className="flex flex-wrap gap-2.5 mt-8 justify-center lg:justify-start">
              {["React", "Next.js", "TypeScript", "Node.js", "Laravel", "MySQL", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-zinc-200/50 dark:bg-zinc-800/60 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Let's Work Together
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 font-semibold bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About & Education Timeline Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-4">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
              Background & Experience
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>
                My journey into software development began at <span className="font-semibold text-zinc-900 dark:text-white">Polytechnic University (Maubin)</span>, where I cultivated a strong foundation in system architecture, data structures, and algorithmic problem-solving. This academic background seamlessly bridged the gap to my professional career, enabling me to work on enterprise-level applications from day one.
              </p>
              <p>
                Currently, as a Junior Software Engineer at <span className="font-semibold text-zinc-900 dark:text-white">Ace Plus Solutions</span>, I apply modern engineering practices to build reliable software. I thrive on collaborating in cross-functional teams to design, develop, and deploy scalable features, always with a strong focus on clean code, optimization, and maintaining developer-friendly documentation.
              </p>
            </div>
          </div>

          {/* Timeline Cards (cols 8 to 12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Timeline</h3>
            <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-8 space-y-8">
              
              {/* Experience Item */}
              <div className="relative">
                <span className="absolute -left-12 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-zinc-50 dark:border-zinc-950">
                  <Briefcase className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Present</span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-1">Junior Software Engineer</h4>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Ace Plus Solutions</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  Building responsive customer web applications, maintaining APIs, and collaborating on high-performing database systems.
                </p>
              </div>

              {/* Education Item */}
              <div className="relative">
                <span className="absolute -left-12 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-2 border-zinc-50 dark:border-zinc-950">
                  <GraduationCap className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Graduation</span>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mt-1">Computer Science Graduate</h4>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Polytechnic University (Maubin)</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  Specialized in software development, database design, and algorithmic problem solving.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-4 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Featured Projects</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">A look at some of the complex software applications I've built.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gym Management Card */}
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 flex items-center justify-center relative overflow-hidden group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-300">
                <Code2 className="w-16 h-16 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50">
                  Full Stack
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Gym Management System
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed flex-1">
                  A comprehensive application designed to simplify gym operations. Features include secure member check-in tracking, membership plan configurations, automated billing, booking schedules for trainer sessions, and an administrative dashboard showing operational analytics.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Node.js", "Express", "PostgreSQL", "Tailwind"].map(t => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Management Card */}
            <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 flex items-center justify-center relative overflow-hidden group-hover:from-purple-600/20 group-hover:to-indigo-600/20 transition-all duration-300">
                <Layers className="w-16 h-16 text-purple-600 dark:text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50">
                  Full Stack
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Event Management System
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed flex-1">
                  An elegant application built to facilitate seamless event organization. It features dynamic event creation, attendee registration forms, ticketing systems with QR codes, real-time analytics, automatic email reminders, and tools for check-ins.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Laravel", "MySQL", "Tailwind CSS"].map(t => (
                    <span key={t} className="px-2.5 py-0.5 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-4 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Panel (cols 1 to 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Let's Connect</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  Have a question, an exciting project, or a professional opportunity? Please feel free to reach out. I will get back to you as soon as possible.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                
                {/* Email Box */}
                <a 
                  href="mailto:tunhtetaung532@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Email Me</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      tunhtetaung532@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Box */}
                <a 
                  href="tel:09770909330"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Call Me</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      09770909330
                    </p>
                  </div>
                </a>

                {/* Location Box */}
                <div 
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Yangon, Myanmar
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form Panel (cols 6 to 12) */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-450 mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2 max-w-sm">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg shadow-lg shadow-blue-500/10 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 bg-white dark:bg-zinc-950 text-center text-sm text-zinc-500 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Tun Htet Aung. All rights reserved.</p>
      </footer>

    </div>
  );
}
