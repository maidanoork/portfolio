"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="bg-slate-50 dark:bg-slate-950"
    >
      <div className="text-center mb-14">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">
          02. What I Work With
        </p>
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="section-subheading mx-auto">
          A snapshot of the tools and technologies I use to build products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
            className="card p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
              {group.category}
            </h3>
            <ul className="space-y-5">
              {group.items.map((skill, si) => (
                <li key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: gi * 0.1 + si * 0.05 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
