"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
} from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "tunhtetaung532@gmail.com";
  const phone = "09770909330";

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
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

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
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
                className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all"
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
                className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {phone}
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
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
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
        </div>
      </footer>
    </section>
  );
}
