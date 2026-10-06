import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {personalInfo.name}. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiTwitter size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
