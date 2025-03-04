import { StarsBackground } from "@/components/stars-background";
import React from "react";
import { settings } from "../page";
import { getData } from "@/actions/astro-days-action";

import { TextScramble } from "@/components/text-scramble";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { ShimmerDiv } from "@/components/shimmer-div";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/footer";

export default async function jorneyPage() {
  const data = await getData();
  return (
    <>
      <StarsBackground
        starDensity={settings.density}
        allStarsTwinkle={settings.allTwinkle}
        twinkleProbability={settings.twinkleProbability}
        minTwinkleSpeed={settings.minSpeed}
        maxTwinkleSpeed={settings.maxSpeed}
      />
      <main className="container mx-auto relative grid place-content-center">
        <TextScramble className="mt-8 text-3xl md:text-5xl font-bold text-black dark:text-white">
          The Star Chronicles: Diary of a Space Traveler
        </TextScramble>
        <ul className="text-black dark:text-white z-10 mt-8 md:mt-52">
          <li>
            <p className="font-light">
              {new Date(data[0].timestamp).toLocaleDateString()}
            </p>
            <TextGenerateEffect
              duration={0.1}
              filter={false}
              words={data[0].text}
              className="text-xl"
            />
          </li>
          {data.slice(1).map((d) => (
            <li key={d.id} className="mt-8 max-w-3xl">
              <p className="font-light">
                {new Date(d.timestamp).toLocaleDateString()}
              </p>
              <p className="text-xl">{d.text}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
