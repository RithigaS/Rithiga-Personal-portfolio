"use client";

/**
 * About Component
 * Redesigned for Professional Feminine Theme.
 * Glass card layout with elegant typography.
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/20 relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
            About Me<span className="text-primary">.</span>
          </h2>

          <div className="glass p-8 md:p-12 rounded-2xl md:rounded-[2rem] shadow-xl border border-white/40 dark:border-white/10 relative">
            {/* Quote icon decoration */}
            <div className="absolute -top-6 -left-6 text-primary/20">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H15C14.4477 8 14 8.44772 14 9V11C14 11.5523 13.5523 12 13 12H12V5H15C17.2091 5 19 6.79086 19 9V15V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10C10.5523 16 11 15.5523 11 15V9C11 8.44772 10.5523 8 10 8H6C5.44772 8 5 8.44772 5 9V11C5 11.5523 4.55228 12 4 12H3V5H6C8.20914 5 10 6.79086 10 9V15V21H5.01697Z" />
              </svg>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
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
          </div>
        </div>
      </div>
    </section>
  );
}
