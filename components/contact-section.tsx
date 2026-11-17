"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.62 1.62 0 1 0 1.62 1.62 1.63 1.63 0 0 0-1.62-1.62Z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const email = "tunhtetaung532@gmail.com";
  const phone = "09770909330";
  const linkedinUrl = "https://www.linkedin.com/in/tun-htet-aung-74315736a";

  const handleCopy = (text: string, type: "email" | "phone" | "linkedin") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLinkedin(true);
      setTimeout(() => setCopiedLinkedin(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-800 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S TALK CODE & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 font-normal">
            Currently building enterprise tools at Ace Plus Solutions. Open to discussing decoupled systems, full-stack engineering, and new development opportunities.
          </p>
        </div>

        {/* Contact Cards Grid (4 Cards: Email, Phone, LinkedIn, Location) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                <Mail className="w-5 h-5" />
              </span>
              <button
                onClick={() => handleCopy(email, "email")}
                type="button"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Direct Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all mt-1 block"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Phone className="w-5 h-5" />
              </span>
              <button
                onClick={() => handleCopy(phone, "phone")}
                type="button"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Direct Phone
              </p>
              <a
                href={`tel:${phone}`}
                className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mt-1 block"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                <LinkedInIcon className="w-5 h-5" />
              </span>
              <button
                onClick={() => handleCopy(linkedinUrl, "linkedin")}
                type="button"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy LinkedIn URL"
              >
                {copiedLinkedin ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                LinkedIn Profile
              </p>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mt-1"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5" />
              </span>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Location 
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                Insein , Yangon
              </p>
            </div>
          </div>
        </div>

        {/* Developer Philosophy Quote Card */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center max-w-3xl mx-auto shadow-md">
          <p className="text-base sm:text-lg font-mono text-slate-200 leading-relaxed italic">
            &ldquo;I believe great software is built at the intersection of decoupled system design, clean code, and genuine user empathy.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-sky-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Tun Htet Aung · Full-Stack Web Developer</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tun Htet Aung © {new Date().getFullYear()} · All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
