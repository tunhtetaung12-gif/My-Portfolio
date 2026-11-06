import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { TimelineSection } from "@/components/timeline-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <TimelineSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
