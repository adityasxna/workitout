"use client";

import { useState, useEffect } from "react";

const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
];

export function MotivationCard() {
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  if (!quote) return null;

  return (
    <div className="max-w-screen-xl mx-auto mt-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 p-px shadow-lg">
        <div className="rounded-2xl bg-white px-8 py-7 flex gap-6 items-start">
          <span className="text-6xl leading-none text-orange-400 select-none mt-1" aria-hidden="true">&ldquo;</span>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.18em] mb-2">Daily Motivation</p>
            <blockquote className="text-xl font-semibold text-slate-800 leading-relaxed">
              {quote.text}
            </blockquote>
            <p className="mt-4 text-sm font-medium text-slate-400">— {quote.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
