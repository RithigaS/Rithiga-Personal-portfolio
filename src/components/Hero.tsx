"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Floating Particles Background
 * Creates a premium, dynamic feel with moving glowing orbs.
 */
const Particles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random particles only on the client side
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20 blur-sm"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* 1. Dynamic Background Elements */}
      <Particles />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/40 dark:bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-multiply filter opacity-50 dark:opacity-70" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/60 dark:bg-secondary/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-50 dark:opacity-70" />

      {/* Main Content Container */}
      <div className="container px-6 mx-auto relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Content (Left Side) */}
          <div className="flex justify-center items-center relative order-1 lg:order-1 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              {/* Decorative blobs behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />

              {/* Image Container with Border/Shape */}
              <div className="relative w-full h-full rounded-[2rem] -rotate-3 overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-2xl group">
                <Image
                  src="/profile.jpg"
                  alt="Rithiga S"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Glass overly highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating elements near image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content (Right Side) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 max-w-4xl mx-auto lg:mx-0 order-2 lg:order-2">
            {/* Animated Entrance Wrapper */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Greeting */}
              <p className="text-foreground/60 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                Hello, I am
              </p>

              {/* 2. Gradient Glow & 3. Animated Gradient Text */}
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl opacity-50 rounded-full animate-text-gradient" />
                <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground animate-text-gradient bg-[length:200%_auto]">
                    Rithiga S
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Subtitle with slight delay */}
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed font-light"
            >
              A passionate{" "}
              <span className="text-foreground font-medium relative inline-block">
                Full Stack Developer
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30" />
              </span>{" "}
              crafting beautiful, intuitive, and scalable digital experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-2"
            >
              <Link
                href="/#projects" // Changed to absolute path for routing consistency
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
              >
                View Work
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all font-semibold text-foreground hover:-translate-y-1"
              >
                Resume
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8 mt-4 text-muted-foreground"
            >
              {[
                {
                  icon: Github,
                  href: `https://github.com/${
                    process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""
                  }`,
                },
                {
                  icon: Linkedin,
                  href: `https://linkedin.com/in/${
                    process.env.NEXT_PUBLIC_LINKEDIN_USERNAME || ""
                  }`,
                },
                {
                  icon: Mail,
                  href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`,
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="hover:text-primary hover:scale-110 transition-all duration-300 p-2 hover:bg-secondary/20 rounded-full"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
