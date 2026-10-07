"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-slate-900">
      <div className="text-center mb-14">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">
          04. Get In Touch
        </p>
        <h2 className="section-heading">Contact Me</h2>
        <p className="section-subheading mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Let's work together
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether it's a freelance project, a full-time opportunity, or just
              a conversation about tech — my inbox is always open.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                <FiMail size={18} />
              </div>
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {personalInfo.email}
              </span>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <FiMapPin size={18} />
              </div>
              <span className="text-slate-600 dark:text-slate-300">
                {personalInfo.location}
              </span>
            </div>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                <FiGithub size={18} />
              </div>
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                GitHub
              </span>
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                <FiLinkedin size={18} />
              </div>
              <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <FiSend size={16} />
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 dark:text-red-400 text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
