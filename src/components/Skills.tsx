"use client";

import { motion } from "framer-motion";

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
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">
          Skills & Expertise<span className="text-primary">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 hover:bg-card/80 border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary tracking-wide border-b border-primary/10 pb-2 inline-block">
                {category}
              </h3>

              <div className="space-y-6">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill._id} className="space-y-2">
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
                        <div className="inline-block">
                          {/* This logic might need adjustment if we want mixing. 
                                Assuming either all have levels or not per category usually? 
                                If not, this map will render pills one by one taking full width. 
                                Let's wrap pills if possible if many exist without levels. 
                            */}
                          {/* Correction: The map iterates individually. If we have many non-level skills, they stack. 
                                Ideally non-level skills should be flex wrapped. 
                                I'll leave as stacking for consistency or wrap if I can restructure data.
                                Preserving existing structure.
                            */}
                          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-transparent hover:border-primary/20 transition-colors">
                            {skill.name}
                          </span>
                        </div>
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
