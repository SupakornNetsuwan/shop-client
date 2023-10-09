"use client"
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { animate } from "motion";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const WebsiteHeader: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  const [isHeroLoaded] = useIsHeroLoaded();
  const websiteHeaderRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!websiteHeaderRef.current || !isHeroLoaded) return;

    animate(
      websiteHeaderRef.current,
      {
        transform: "translate(0em) scale(1)",
        opacity: 1,
      },
      {
        delay: 1.2,
      },
    );
  }, [isHeroLoaded]);

  return (
    <div
      ref={websiteHeaderRef}
      {...props}
      className={twMerge(
        "relative origin-top-left -translate-x-12 -translate-y-12 scale-90 rounded-lg bg-white p-4 opacity-0 shadow-realistic-2",
        className,
      )}
    >
      <div className="absolute left-4 top-4 flex gap-1">
        <div className="aspect-square w-2.5 rounded-full bg-[#ea6a5e] hover:bg-[#db6156]" />
        <div className="aspect-square w-2.5 rounded-full bg-[#f2be4e] hover:bg-[#d6b24d]" />
        <div className="aspect-square w-2.5 rounded-full bg-[#6bc659] hover:bg-[#60b44f]" />
      </div>
      <div className="pt-6">
        <p className="text-2xl font-semibold text-slate-800 xl:text-4xl">
          Adorable store
        </p>
        <p className="text-base text-slate-500">
          Make your day a little more adorable with our stickers and art
        </p>
      </div>
    </div>
  );
};

export default WebsiteHeader;
