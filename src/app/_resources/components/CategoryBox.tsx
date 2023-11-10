"use client"
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Badge } from "@/core/components/ui/badge";
import { twMerge } from "tailwind-merge";
import Box from "./Box";
import { animate } from "motion";
import useIsHeroLoaded from "@/core/hooks/useIsHeroLoaded";

const CategoryBox: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  const [isHeroLoaded] = useIsHeroLoaded();
  const categoryBoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!categoryBoxRef.current || !isHeroLoaded) return;

    animate(
      categoryBoxRef.current,
      {
        transform: "translate(0) scale(1)",
        opacity: 1,
      },
      {
        delay: 0.8,
      },
    );
  }, [isHeroLoaded]);

  return (
    <div
      ref={categoryBoxRef}
      {...props}
      className={twMerge(
        "box-border -translate-y-12 translate-x-3 overflow-hidden rounded-xl bg-white opacity-0 shadow",
        className,
      )}
    >
      <div className="flex w-full gap-1 border-b px-4 py-3">
        <Badge variant="default">All</Badge>
        <Badge variant="secondary" className="cursor-default">
          Animals
        </Badge>
        <Badge variant="secondary" className="cursor-default">
          Sales
        </Badge>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {[...new Array(10)].map((_, i) => {
            return <Box key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
