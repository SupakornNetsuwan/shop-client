"use client";
import React from "react";
import { Application } from "@splinetool/runtime";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";
import WebsiteHeader from "./WebsiteHeader";
import CategoryBox from "./CategoryBox";
import SaleCountBox from "./SaleCountBox";
import ChargeFeeBox from "./ChargeFeeBox";
import ThumbSlider from "./ThumbSlider";
import SwipeAnimation from "../animation/SwipeAnimation";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader className="animate-spin" />
    </div>
  ),
});

const Hero = () => {
  const [_, setIsHeroLoaded] = useIsHeroLoaded();

  const onLoad = (e: Application) => {
    setIsHeroLoaded(true);
  };

  return (
    <>
      <div className="relative flex h-[90dvh] w-full items-center justify-end bg-brand-primary p-4 xl:p-24">
        <div className="border-t-1 relative z-10 rounded-xl border border-b-0 border-l-2 border-r-0 border-white/50 bg-gradient-to-r from-white/30 to-transparent p-2 backdrop-blur 2xl:w-2/5">
          <WebsiteHeader className="mb-2" />
          <div className="relative flex gap-2 overflow-hidden pr-4">
            <CategoryBox className="flex-1" />
            <div className="box-border flex flex-1 flex-col gap-2">
              <SaleCountBox className="flex-1" />
              <ChargeFeeBox className="flex-1" />
            </div>
            <ThumbSlider />
            <SwipeAnimation />
          </div>
        </div>

        <Spline
          className="absolute inset-0 block opacity-50 sm:opacity-100"
          scene="https://draft.spline.design/u3UJCNecVm0PXv6P/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
      <div className="h-12 w-full bg-gradient-to-b from-brand-primary to-white" />
    </>
  );
};

export default Hero;
