import { Navbar } from "@/components/Navbar";
import { Achievements } from "@/components/Achievements";
import dbConnect from "@/lib/mongodb";
import Achievement from "@/models/Achievement";

export const dynamic = "force-dynamic";

async function getAchievements() {
  await dbConnect();
  const achievements = await Achievement.find({}).lean();

  return achievements.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
  }));
}

export default async function AchievementsPage() {
  let achievements = [];
  try {
    achievements = await getAchievements();
  } catch (err) {
    console.error("Achievements Page Error:", err);
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-80px)]">
        <div className="container px-6 mx-auto mb-10">
          <h1 className="text-4xl font-serif font-bold text-foreground text-center mt-10">
            All Achievements
          </h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            A comprehensive list of my certifications and recognitions.
          </p>
        </div>
        <div className="pb-24">
          <Achievements achievements={achievements} title={null} />
        </div>
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
