"use client";
import { Button } from "@/core/components/ui/button";
import Hero from "./(resources)/components/Hero";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
