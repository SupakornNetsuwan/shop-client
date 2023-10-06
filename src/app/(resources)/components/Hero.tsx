"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";
import LoadingAnimation from "@/core/components/LoadingAnimation";
import { twMerge } from "tailwind-merge";

const Hero = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useIsHeroLoaded();
  const onLoad = (e: Application) => {
    setIsHeroLoaded(true);
  };

  return (
    <>
      <div className="h-12 w-full bg-gradient-to-t from-[#ffd1d2] to-[#ffd1d2]/80" />

      <div className="relative flex h-[80dvh] w-full items-center justify-end bg-[#ffd1d2] p-4">
        <div className="relatibe z-10 flex w-2/5 flex-col rounded bg-white/50 p-8 backdrop-blur-sm">
          <div className="">
            <p className="pb-4 font-mitr text-4xl font-semibold">
              Adorable shop
            </p>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              dolor vero iste odit quisquam. Minima aperiam expedita corrupti
              quas est?
            </p>
          </div>
          <p>x</p>
        </div>
        <Spline
          className="absolute inset-0 block opacity-50 sm:opacity-100"
          scene="https://prod.spline.design/O-SdUOIul5oR0Bc6/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <div className="h-12 w-full bg-gradient-to-b from-[#ffd1d2] to-white" />
    </>
  );
};

export default Hero;
