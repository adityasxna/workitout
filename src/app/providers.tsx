"use client";

import * as React from "react";
import { TaskProvider } from "@/context/task-context";
import { ChallengeProvider } from "@/context/challenge-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChallengeProvider>
      <TaskProvider>{children}</TaskProvider>
    </ChallengeProvider>
  );
}
