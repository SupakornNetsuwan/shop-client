"use client"
import { animate, timeline } from "motion";
import { useEffect } from "react";

const SwipeAnimation = () => {
  useEffect(() => {
    animate(
      ".hero-shiny",
      {
        transform: "rotate(-45deg) translate(-25%, 55vw)",
      },
      {
        repeat: Infinity,
        duration: 3,
        delay: 4,
        endDelay: 4,
        easing: "ease-out",
      },
    );
  }, []);

  return (
    <div className="hero-shiny pointer-events-none absolute right-0 top-0 z-20 h-12 w-[50vw] origin-left -rotate-45 bg-gradient-to-tr from-slate-100/50 via-white/20 to-transparent" />
  );
};

export default SwipeAnimation