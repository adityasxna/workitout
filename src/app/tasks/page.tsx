import Tasks from "./tasks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkItOut - Task and Issue Tracker",
  description:
    "Efficiently manage tasks and track issues with WorkItOut, your dedicated task and issue tracker.",
};

export default function TaskPage() {
  return (
    <main className="mb-12">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Task <span className="text-orange-500">Tracker</span>
          </h2>
          <p className="mt-1 text-base text-slate-500">
            Manage, prioritise, and track all your tasks in one place.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-6">
        <Tasks />
      </div>
    </main>
  );
}
