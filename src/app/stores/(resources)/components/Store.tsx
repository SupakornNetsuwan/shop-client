import React, { HTMLAttributes } from "react";
import { cn } from "@/core/libs/utils";
import Image from "next/image";
import profilePlaceholder from "@/../../public/profile-placeholder.webp";
import tree1 from "@/../../public/stores/tree-1.png";
import tree2 from "@/../../public/stores/tree-2.png";
import tree3 from "@/../../public/stores/tree-3.png";
import tree4 from "@/../../public/stores/tree-4.png";
import tree5 from "@/../../public/stores/tree-5.png";
import tree6 from "@/../../public/stores/tree-6.png";

const _tempThumbnail = [tree1, tree2, tree3, tree4, tree5, tree6];

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardArrow,
} from "@/core/components/ui/hover-card";

const Card = React.forwardRef<
  React.ElementRef<"div">,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <HoverCard openDelay={200}>
      <HoverCardContent>
        The React Framework - created and maintained by @vercel.
        <HoverCardArrow className="fill-slate-300" />
      </HoverCardContent>
      <HoverCardTrigger asChild>
        <div
          ref={ref}
          className={cn(
            "min-h-40 group w-full cursor-default overflow-hidden rounded-md border bg-slate-50 transition-shadow hover:shadow-lg",
            className,
          )}
        >
          <div className="relative">
            <div className="relative h-[20dvh] min-h-[10em] w-full overflow-hidden bg-none">
              <Image
                // Temporay random thumbnail
                src={
                  _tempThumbnail[
                    Math.floor(Math.random() * _tempThumbnail.length)
                  ]
                }
                fill={true}
                priority={true}
                draggable={false}
                alt="store-thumbnail"
                className="rounded-lg object-cover p-1 contrast-75 transition-all group-hover:blur-[2px]"
              />
            </div>
            <Image
              src={profilePlaceholder}
              alt="profile-placeholder"
              className="absolute bottom-0 right-4 ml-auto aspect-square w-14 translate-y-1/2 rounded-md"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-medium text-slate-800">Chubby store</h2>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              itaque.
            </p>
          </div>
        </div>
      </HoverCardTrigger>
    </HoverCard>
  );
});

Card.displayName = "Card";

const Wrapper = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    children: React.ReactElement[] | React.ReactElement;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "grid grid-cols-1 gap-4 p-12 md:grid-cols-3 md:p-36 2xl:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
});

Wrapper.displayName = "Wrapper";

const store = {
  Card,
  Wrapper,
};

export default store;
