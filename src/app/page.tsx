import Box from "@/components/box/box";
import { MotivationCard } from "@/components/motivation/motivation-card";

const Home = () => {
  return (
    <main className="mb-12">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Welcome back to <span className="text-orange-500">WorkItOut</span> 🎯
          </h2>
          <p className="mt-1 text-base text-slate-500">
            Simplify your task management with ease and efficiency.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <MotivationCard />
        <div className="mt-6">
          <Box />
        </div>
      </div>
    </main>
  );
};
export default Home;
