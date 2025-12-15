"use client";

import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";

interface Skill {
  _id: string;
  name: string;
  category: string;
  level?: number;
}

interface SkillsProps {
  skills: Skill[];
}

/**
 * Skills Component
 * Redesigned for Professional Feminine Theme.
 * Soft UI cards with clean progress indicators.
 */
export function Skills({ skills }: SkillsProps) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <Sparkles color="hsl(var(--primary))">
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Skills & Expertise<span className="text-primary">.</span>
            </h2>
          </Sparkles>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(var(--primary), 0.2)",
              }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-sm transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold mb-6 text-primary tracking-wide border-b border-primary/10 pb-2 inline-block relative z-10">
                {category}
              </h3>

              <div className="space-y-6">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill._id} className="space-y-2 relative z-10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-xs text-muted-foreground font-mono">
                            {skill.level}%
                          </span>
                        )}
                      </div>

                      {skill.level ? (
                        <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      ) : (
                        // For skills without specific level, show as pills within the category card
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-transparent hover:border-primary/20 transition-colors shadow-sm"
                        >
                          {skill.name}
                        </motion.span>
                      )}
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
