"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/data/portfolio";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-14">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">
          04. Where I've Worked
        </p>
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading mx-auto">
          My professional journey so far.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative sm:pl-20"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 border-2 border-primary-200 dark:border-primary-700 items-center justify-center text-primary-600 dark:text-primary-400">
                <FiBriefcase size={18} />
              </div>

              <div className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm text-slate-500 dark:text-slate-400 block">
                      {job.period}
                    </span>
                    <span className="text-sm text-slate-400 dark:text-slate-500">
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.description.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="text-primary-500 flex-shrink-0 mt-0.5">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
