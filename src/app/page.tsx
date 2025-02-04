import { StarsBackground } from "@/components/stars-background";

export default function Home() {
  const settings = {
    density: 0.00015,
    allTwinkle: true,
    twinkleProbability: 0.7,
    minSpeed: 0.7,
    maxSpeed: 1,
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden ">
      <StarsBackground
        starDensity={settings.density}
        allStarsTwinkle={settings.allTwinkle}
        twinkleProbability={settings.twinkleProbability}
        minTwinkleSpeed={settings.minSpeed}
        maxTwinkleSpeed={settings.maxSpeed}
      />
      {/* <h1 className="text-white text-8xl font-bold text-center ">
        Welcome to <span className="text-pink-400">AI Astro</span>
      </h1> */}
      {/* <p className="text-white text-2xl">A place for AI-powered astronomy</p> */}
    </div>
  );
}
