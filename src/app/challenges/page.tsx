import type { NextPage } from "next";
import AddChallenges from "./components/add-challenges";
import Challenges from "./challenges";

const ChallengesPage: NextPage = () => {
  return (
    <main className="mb-12">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Your <span className="text-orange-500">Challenges</span>
          </h2>
          <p className="mt-1 text-base text-slate-500">
            Set deadlines and race against the clock.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-6">
        <AddChallenges />
        <Challenges />
      </div>
    </main>
  );
};

export default ChallengesPage;
