"use client";

import { Briefcase } from "lucide-react";

interface Experience {
  _id: string;
  role: string;
  company: string;
  duration: string;
  description?: string;
  type: string;
}

interface ExperienceProps {
  experience: Experience[];
}

/**
 * Experience Component
 * Redesigned for Professional Feminine Theme.
 * Elegant timeline with soft colors.
 */
export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container px-6 mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">
          Experience<span className="text-primary">.</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((exp, index) => (
            <div
              key={exp._id}
              className="relative pl-8 md:pl-12 border-l-2 border-primary/20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 bg-background border-2 border-primary w-4 h-4 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-primary/80 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
