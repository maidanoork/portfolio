"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-900">
      <div className="text-center mb-14">
        <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-3">
          03. What I've Built
        </p>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading mx-auto">
          A selection of projects I've worked on — from side experiments to production apps.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: i * 0.1 }}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Project image / placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-slate-800 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary-200 dark:text-primary-800 select-none">
                    {project.title[0]}
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub size={18} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > displayed.length || showAll ? (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary"
          >
            {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
          </button>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
