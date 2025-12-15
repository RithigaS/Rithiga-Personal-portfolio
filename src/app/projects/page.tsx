import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export const dynamic = "force-dynamic";

async function getProjects() {
  await dbConnect();
  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

  return projects.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
    date: doc.date?.toISOString(),
  }));
}

export default async function ProjectsPage() {
  let projects = [];
  try {
    projects = await getProjects();
  } catch (err) {
    console.error("Projects Page Error:", err);
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-80px)]">
        <div className="container px-6 mx-auto mb-10">
          <h1 className="text-4xl font-serif font-bold text-foreground text-center mt-10">
            All Projects
          </h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            A comprehensive list of all my projects, creating functionality with
            elegance.
          </p>
        </div>
        <Projects projects={projects} title={null} description="" />
      </div>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-secondary/5 mt-auto">
        <p className="font-serif">
          © {new Date().getFullYear()} Rithiga S. Crafted with elegance and
          Next.js.
        </p>
      </footer>
    </main>
  );
}
