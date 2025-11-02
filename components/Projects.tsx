import React, { useState } from 'react';
import Section from './Section';
import { PROJECT_CATEGORIES } from '../constants';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

interface ProjectsProps {
  id: string;
  title: string;
  onProjectSelect: (project: Project) => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const PROJECTS_TO_SHOW = 3;

const Projects: React.FC<ProjectsProps> = ({ id, title, onProjectSelect }) => {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategoryExpansion = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  return (
    <Section id={id} title={title}>
      <div className="space-y-16">
        {PROJECT_CATEGORIES.map((category) => {
          const isExpanded = expandedCategories[category.title] || false;
          const visibleProjects = isExpanded ? category.projects : category.projects.slice(0, PROJECTS_TO_SHOW);

          return (
            <motion.div key={category.title} layout>
              <h3 className="font-bold text-xl mb-8 text-slate-200">{category.title}</h3>
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {visibleProjects.map((project) => (
                    <motion.div
                      key={project.name}
                      layoutId={`card-${project.name}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onClick={() => onProjectSelect(project)}
                      className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col group cursor-pointer"
                      whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                        <span className="font-mono text-xs text-slate-500">{project.date}</span>
                      </div>
                      <p className="text-sm text-slate-400 flex-grow mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-cyan-400/10 text-cyan-300 text-xs font-mono px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                          <i className="fas fa-expand-alt mr-2"></i>View Details
                        </span>
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-md transition-colors text-sm flex items-center gap-2"
                          >
                            View Site <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {category.projects.length > PROJECTS_TO_SHOW && (
                <div className="mt-12 text-center">
                  <motion.button
                    onClick={() => toggleCategoryExpansion(category.title)}
                    className="bg-white/10 hover:bg-white/20 text-slate-200 font-bold py-2 px-6 rounded-md transition-colors flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? 'Show Less' : `Show ${category.projects.length - PROJECTS_TO_SHOW} More`}
                    <i className={`fas fa-chevron-down ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
                  </motion.button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;