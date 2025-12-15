"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  image?: string;
}

interface ProjectsProps {
  projects: Project[];
}

/**
 * Projects Component
 * Redesigned for Professional Feminine Theme.
 * Elegant cards with subtle interactions.
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Featured Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A curated selection of my work, showcasing my passion for clean code
            and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-border/50"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-secondary/30 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground bg-secondary/50">
                    <Github className="w-10 h-10 opacity-20" />
                    <span className="text-sm uppercase tracking-widest font-medium opacity-50">
                      No Image Preview
                    </span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-serif">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed font-light flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-full border border-transparent group-hover:border-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
