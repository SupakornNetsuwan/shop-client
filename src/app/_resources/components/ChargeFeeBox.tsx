"use client";
import React, { useRef, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Laugh } from "lucide-react";
import { animate } from "motion";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const ChargeFeeBox: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  const [isHeroLoaded] = useIsHeroLoaded();
  const chargeFeeBoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!chargeFeeBoxRef.current || !isHeroLoaded) return;

    animate(
      chargeFeeBoxRef.current,
      {
        transform: "translate(0) scale(1)",
        opacity: 1,
      },
      {
        delay: 0.9,
      },
    );
  }, [isHeroLoaded]);

  return (
    <div
      ref={chargeFeeBoxRef}
      {...props}
      className={twMerge(
        "relative w-full -translate-x-3 -translate-y-12 flex-col rounded-xl bg-white opacity-0",
        className,
      )}
    >
      <div className="flex h-full w-full items-center gap-4 p-4">
        <div className="flex h-full flex-1 flex-col items-center justify-center rounded-lg border bg-slate-50 p-4">
          <p className="text-center text-xs text-slate-500 xl:text-sm">Only</p>
          <p className="text-center text-xl font-medium text-green-500 xl:text-3xl">
            1%
          </p>
          <p className="text-center text-xs text-slate-500 xl:text-sm">
            Charge
          </p>
        </div>
        <div className="relative">
          <ArrowRight size={24} className="text-slate-500" />
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-center rounded-lg border bg-slate-50 p-4 ring-2 ring-green-500 ring-offset-2">
          <Laugh className="text-slate-500" size={32} />
        </div>
      </div>
    </div>
  );
};

export default ChargeFeeBox;
