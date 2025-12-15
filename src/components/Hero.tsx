"use client";
import React from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

/**
 * Hero Component
 * Redesigned for Professional Feminine Theme.
 * Focus on elegance, typography, and soft colors.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Soft Gradient Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="container px-6 mx-auto relative z-10 pt-20">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="space-y-2 animate-fade-in">
            <p className="text-secondary-foreground/80 font-medium tracking-widest uppercase text-sm md:text-base">
              Hello, I am
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground tracking-tight">
              Rithiga <span className="text-primary">S</span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A passionate{" "}
            <span className="text-foreground font-semibold">
              Full Stack Developer
            </span>{" "}
            crafting beautiful, intuitive, and scalable digital experiences.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 font-medium tracking-wide"
            >
              View Work
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full border border-border bg-background/50 hover:bg-secondary transition-all font-medium tracking-wide text-foreground"
            >
              Resume
            </Link>
          </div>

          <div
            className="flex items-center gap-8 mt-8 text-muted-foreground animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href={`https://github.com/${
                process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""
              }`}
              target="_blank"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={`https://linkedin.com/in/${
                process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || ""
              }`}
              target="_blank"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`}
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-foreground" />
      </div>
    </section>
  );
}
