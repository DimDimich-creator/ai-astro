import { InteractiveHoverButton } from "@/components/interactive-hover-button";
import { ShootingStars } from "@/components/shooting-stars";
import { SplineScene } from "@/components/splite";
import { StarsBackground } from "@/components/stars-background";
import { siteConfig } from "@/site/config";

export const settings = {
  density: 0.00015,
  allTwinkle: true,
  twinkleProbability: 0.7,
  minSpeed: 0.7,
  maxSpeed: 1,
};

export default function Home() {
  return (
    <div className="h-screen w-full bg-background relative overflow-hidden ">
      <StarsBackground
        starDensity={settings.density}
        allStarsTwinkle={settings.allTwinkle}
        twinkleProbability={settings.twinkleProbability}
        minTwinkleSpeed={settings.minSpeed}
        maxTwinkleSpeed={settings.maxSpeed}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl">
            {siteConfig.description}
          </p>
          <InteractiveHoverButton text="Journey" className="mt-8" />
        </div>

        {/* Right content */}
        <div className="hidden md:block md:flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/bAnq74APLU5Vgdnk/scene.splinecode"
            className="w-full h-full"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}
