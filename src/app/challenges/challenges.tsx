"use client";
import React, { useState } from "react";
import { useChallenge } from "@/context/challenge-context";
import { Countdown } from "./countdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "./components/date-time-picker";

interface Challenge {
  id: string;
  title: string;
  date: Date;
}


const Challenges = () => {
  const { challenges, deleteChallenge, updateChallenge } = useChallenge();
  const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(
    null
  );

  const handleTimeEdit = (challenge: any) => {
    setEditingChallenge(challenge);
  };

  const handleTimeSave = () => {
    if (editingChallenge) {
      updateChallenge(editingChallenge.id, editingChallenge);
      setEditingChallenge(null);
    }

  };

  const handleTimeCancel = () => {
    setEditingChallenge(null);
  };

  const handleDateTimeClick = (challenge: any) => {
    setEditingChallenge(challenge);
  };

  return (
    <>
      {challenges.length <= 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-4xl mb-3">🏁</p>
          <p className="text-lg font-semibold text-slate-600">No challenges yet</p>
          <p className="text-sm text-slate-400 mt-1">Add one above to start your countdown.</p>
        </div>
      ) : (
        <div className="space-y-3 mt-4">
          {challenges.map((challenge) => {
            const isEditing =
              editingChallenge && editingChallenge.id === challenge.id;

            return (
              <div
                key={challenge.id}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm flex justify-between items-center px-5 py-4 hover:shadow-md transition"
              >
                <Sheet>
                  <SheetTrigger>
                    <h1 className="text-2xl font-bold text-slate-800 hover:text-orange-500 transition-colors text-left">
                      {challenge.title}
                    </h1>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <span className="text-3xl font-semibold cursor-pointer">
                          {challenge.title}
                        </span>
                      </SheetTitle>
                      <SheetDescription>
                        <DateTimePicker
                          date={new Date(challenge.date)}
                          setDate={(newDate) =>
                            handleTimeEdit({ ...challenge, date: newDate })
                          }
                        />
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      {isEditing ? (
                        <>
                          <Button onClick={handleTimeSave}>Save</Button>
                          <Button onClick={handleTimeCancel}>Cancel</Button>
                        </>
                      ) : (
                        <Button onClick={() => deleteChallenge(challenge.id)}>
                          Delete
                        </Button>
                      )}
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                <Countdown
                  targetDate={
                    isEditing ? editingChallenge.date : challenge.date
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Challenges;
