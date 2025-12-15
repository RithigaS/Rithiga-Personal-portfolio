"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "./Sparkles";

/**
 * About Component
 * Redesigned for Professional Feminine Theme.
 * Glass card layout with elegant typography and subtle motion.
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/20 relative overflow-hidden"
    >
      {/* Decorative Floating Blobs */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -z-10"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary/40 rounded-full blur-[60px] -z-10"
      />

      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Sparkles color="hsl(var(--primary))">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                About Me<span className="text-primary">.</span>
              </h2>
            </Sparkles>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass p-8 md:p-12 rounded-2xl md:rounded-[2rem] shadow-xl border border-white/40 dark:border-white/10 relative overflow-hidden group"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

            {/* Quote icon decoration with float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 text-primary/20"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12H12V5H15C17.2091 5 19 6.79086 19 9V15V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V11C5 11.5523 4.55228 12 4 12H3V5H6C8.20914 5 10 6.79086 10 9V15V21H5.01697Z" />
              </svg>
            </motion.div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light relative z-20">
              <p>
                I am a Computer Science and Engineering student (2023–2027) at
                Sri Eshwar College of Engineering, maintaining a strong academic
                record with a CGPA of 8.50. I have a solid foundation in
                full-stack web development, with hands-on experience building
                modern, scalable applications using MERN stack and Next.js.
              </p>
              <p>
                I have completed multiple full-stack internships where I built
                responsive, production-ready applications using Next.js, React,
                Node.js, Express, MongoDB, and Tailwind CSS, working on features
                like authentication, CRUD operations, and admin dashboards,
                while developing projects such as math tools, blog platforms,
                e-commerce websites, and task management systems with a strong
                focus on clean UI, performance, and usability. Passionate about
                problem-solving and continuous learning, I actively practice
                DSA, participate in hackathons, and explore modern web
                technologies to build scalable and impactful solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
