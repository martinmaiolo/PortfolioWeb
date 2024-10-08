import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 will-change-transform">
      <div
        className={twMerge(shouldOrbit ? "animate-spin" : "")}
        style={{ animationDuration: shouldOrbit ? orbitDuration : "0s" }}
      >
        <div
          className="flex justify-start items-start"
          style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotation}deg)` }}
        >
          <div
            className={twMerge(shouldSpin ? "animate-spin" : "")}
            style={{ animationDuration: shouldSpin ? spinDuration : "0s" }}
          >
            <div className="inline-flex" style={{ transform: `rotate(${rotation * -1}deg)` }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
