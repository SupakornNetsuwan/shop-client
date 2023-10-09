"use client";
import React, { useRef, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";
import { animate } from "motion";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const SaleCountBox: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  const [isHeroLoaded] = useIsHeroLoaded();
  const saleCountBox = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!saleCountBox.current || !isHeroLoaded) return;

    const controller = animate(
      saleCountBox.current,
      {
        transform: "translate(0) scale(1)",
        opacity: 1,
      },
      {
        delay: 0.7,
      },
    );

    controller.finished.then(() => {
      animate(
        (progress) => {
          if (!saleCountBox.current) return;
          saleCountBox.current.getElementsByTagName(
            "p",
          )[0].innerHTML = `${Math.floor(progress * 10000)}+`;
        },
        { duration: 2, easing: "ease-in-out" },
      );
    });
  }, [isHeroLoaded]);

  return (
    <div
      ref={saleCountBox}
      {...props}
      className={twMerge(
        "relative flex min-h-[7em] w-full -translate-x-4 translate-y-4 flex-col items-center justify-center overflow-hidden rounded-xl bg-white text-center opacity-0",
        className,
      )}
    >
      <p className="text-xl font-medium text-green-500 xl:text-4xl">0</p>
      <p className="pb-2 text-sm text-slate-500 xl:text-base">
        sales per month
      </p>
      <div className="absolute inset-2 border-[10px] border-x-0 border-t-0 border-green-500/80 blur-xl" />
      <div className="absolute inset-2 border-[12px] border-slate-50 blur-md" />
      <div className="absolute -bottom-1 left-1/2 grid -translate-x-1/2 grid-cols-7 gap-0.5 [&>div]:aspect-square [&>div]:w-2 [&>div]:rounded ">
        <div className="bg-transparent" />
        <div className="bg-transparent" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-transparent" />
        <div className="bg-transparent" />
        <div className="bg-transparent" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-transparent" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
        <div className="bg-green-500" />
      </div>
    </div>
  );
};

export default SaleCountBox;
