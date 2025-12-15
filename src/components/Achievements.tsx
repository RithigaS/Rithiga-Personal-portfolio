"use client";

import { Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";

interface Achievement {
  _id: string;
  title: string;
  description: string;
  certificateImage?: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  viewMoreHref?: string;
  title?: React.ReactNode;
  description?: string;
}

export function Achievements({
  achievements,
  viewMoreHref,
  title = (
    <>
      Achievements<span className="text-primary">.</span>
    </>
  ),
  description,
}: AchievementsProps) {
  return (
    <div className="mb-24">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <Sparkles color="hsl(var(--primary))">
              <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
                {title}
              </h2>
            </Sparkles>
          )}
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((ach, index) => (
          <motion.div
            key={ach._id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-border/50"
          >
            {/* Certificate Image or Fallback */}
            <div className="relative h-56 bg-secondary/30 flex items-center justify-center overflow-hidden">
              {ach.certificateImage ? (
                <Image
                  src={ach.certificateImage}
                  alt={ach.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-primary opacity-50">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Award size={48} />
                  </div>
                  <span className="text-sm font-medium tracking-wide">
                    CERTIFICATE
                  </span>
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Achievement Info */}
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors font-serif">
                {ach.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {viewMoreHref && (
        <div className="mt-16 text-center">
          <Link
            href={viewMoreHref}
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20 inline-block"
          >
            View More Certificates
          </Link>
        </div>
      )}
    </div>
  );
}
