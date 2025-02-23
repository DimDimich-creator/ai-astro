import { StarsBackground } from "@/components/stars-background";
import React from "react";
import { settings } from "./page";

export default function loading() {
  return (
    <div className="grid place-content-center h-screen">
      <StarsBackground
        starDensity={settings.density}
        allStarsTwinkle={settings.allTwinkle}
        twinkleProbability={settings.twinkleProbability}
        minTwinkleSpeed={settings.minSpeed}
        maxTwinkleSpeed={settings.maxSpeed}
      />
      <div className="loader" />
    </div>
  );
}
