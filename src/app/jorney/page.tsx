"use client";
import { StarsBackground } from "@/components/stars-background";
import React from "react";
import { settings } from "../page";
import { HyperText } from "@/components/hyper-text";

export default function jorneyPage() {
  return (
    <main className="h-screen w-full bg-background relative overflow-hidden grid place-content-center ">
      <StarsBackground
        starDensity={settings.density}
        allStarsTwinkle={settings.allTwinkle}
        twinkleProbability={settings.twinkleProbability}
        minTwinkleSpeed={settings.minSpeed}
        maxTwinkleSpeed={settings.maxSpeed}
      />
      <HyperText
        className="text-5xl font-bold text-black dark:text-white"
        text="The Star Chronicles: Diary of a Space Traveler"
      />
    </main>
  );
}
