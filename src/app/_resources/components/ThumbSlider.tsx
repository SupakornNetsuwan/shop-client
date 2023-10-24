"use client";
import React, { useLayoutEffect, useRef } from "react";
import { animate } from "motion";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const ThumbSlider = () => {
  const [isHeroLoaded] = useIsHeroLoaded();
  const thumbSliderRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!thumbSliderRef.current || !isHeroLoaded) return;

    animate(
      thumbSliderRef.current,
      {
        transform: "translate(0) scale(1)",
        opacity: 1,
      },
      {
        delay: 1,
      },
    );
  }, [isHeroLoaded]);
  
  return (
    <div
      ref={thumbSliderRef}
      className="absolute right-0 top-0 h-1/3 w-2 translate-y-full rounded-full bg-white/70 opacity-0 hover:bg-white"
    />
  );
};

export default ThumbSlider;
