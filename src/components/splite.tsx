"use client";

import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  // width?: number;
  // height?: number;
}

export function SplineScene({
  scene,
  className,
  // width,
  // height,
}: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        // width={width}
        // height={height}
      />
    </Suspense>
  );
}
