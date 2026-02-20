"use client";

import { Countdown } from "@/app/challenges/countdown";
import { useChallenge } from "@/context/challenge-context";
import { useTask } from "@/context/task-context";

const Box = () => {
  const { tasks } = useTask();
  const { challenges } = useChallenge();
  const urgentTasks = tasks.filter((task) => task.priority === "urgent");
  const notUrgentTasks = tasks.filter((task) => task.priority === "not-urgent");
  const importantTasks = tasks.filter((task) => task.priority === "important");
  const notImportantTasks = tasks.filter(
    (task) => task.priority === "not-important"
  );
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex gap-0">
        {/* Eisenhower Matrix */}
        <div className="w-8/12 flex-col">
          {/* Header row */}
          <div className="flex items-center bg-slate-50 border-b border-slate-200">
            <div className="w-12 p-4" />
            <div className="w-2/4 p-3 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold tracking-wide">Urgent</span>
            </div>
            <div className="w-2/4 p-3 text-center border-l border-slate-200">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-bold tracking-wide">Not Urgent</span>
            </div>
          </div>

          {/* Important row */}
          <div className="flex min-h-44">
            <div className="w-12 flex justify-center items-center border-r border-slate-200 bg-slate-50">
              <span className="rotate-[270deg] text-slate-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Important
              </span>
            </div>
            {/* Q1 - Do First */}
            <div className="w-2/4 p-3 border-b border-slate-100 bg-red-50/40">
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-2">Do First</p>
              {urgentTasks.map((task, index) => (
                <div key={index} className="mb-2 px-3 py-2 rounded-lg bg-white border border-red-100 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-medium text-slate-700 truncate">{task.title}</h3>
                    <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-500">{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Q2 - Schedule */}
            <div className="w-2/4 p-3 border-b border-l border-slate-100 bg-blue-50/30">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">Schedule</p>
              {notUrgentTasks.map((task, index) => (
                <div key={index} className="mb-2 px-3 py-2 rounded-lg bg-white border border-blue-100 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-medium text-slate-700 truncate">{task.title}</h3>
                    <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-500">{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Not Important row */}
          <div className="flex min-h-44">
            <div className="w-12 flex justify-center items-center border-r border-t border-slate-200 bg-slate-50">
              <span className="rotate-[270deg] text-slate-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Not Important
              </span>
            </div>
            {/* Q3 - Delegate */}
            <div className="w-2/4 p-3 border-t border-slate-100 bg-amber-50/30">
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-2">Delegate</p>
              {importantTasks.map((task, index) => (
                <div key={index} className="mb-2 px-3 py-2 rounded-lg bg-white border border-amber-100 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-medium text-slate-700 truncate">{task.title}</h3>
                    <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-600">{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Q4 - Eliminate */}
            <div className="w-2/4 p-3 border-t border-l border-slate-100 bg-slate-50/60">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Eliminate</p>
              {notImportantTasks.map((task, index) => (
                <div key={index} className="mb-2 px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-medium text-slate-500 truncate">{task.title}</h3>
                    <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges sidebar */}
        <div className="w-4/12 border-l border-slate-200 bg-slate-50 flex flex-col">
          <div className="px-5 py-4 border-b border-slate-200 bg-white">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Challenges</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {challenges.length === 0 && (
              <p className="text-sm text-slate-400 text-center mt-6">No challenges yet.</p>
            )}
            {challenges.map((challenge: any, index: number) => (
              <div key={index} className="rounded-xl bg-white border border-slate-200 shadow-sm px-4 py-3 flex justify-between items-center gap-3 hover:shadow-md transition">
                <h3 className="text-sm font-semibold text-slate-700 truncate">{challenge.title}</h3>
                <div className="shrink-0">
                  <Countdown targetDate={challenge.date} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
