import SectionWrapper from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiMail, FiDownload } from "react-icons/fi";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "30+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Open Source PRs", value: "50+" },
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-900">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">
            01. About Me
          </p>
          <h2 className="section-heading">Who I Am</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <FiMapPin className="text-primary-500 flex-shrink-0" size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <FiMail className="text-primary-500 flex-shrink-0" size={18} />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>

        {/* Right: stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
