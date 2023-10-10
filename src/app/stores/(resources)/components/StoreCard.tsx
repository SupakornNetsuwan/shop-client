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

const Head: React.FC<{
  thumbnail: React.ReactElement;
  profilePicture: React.ReactElement;
}> = ({ profilePicture, thumbnail }) => {
  return (
    <div className="relative h-[20dvh] transition-all group-hover:-translate-y-1/2">
      {thumbnail}
      {profilePicture}
    </div>
  );
};

const Body: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({ children }) => {
  return (
    <div className="p-4 transition-all group-hover:-translate-y-6 ">
      {children}
    </div>
  );
};

const Store = React.forwardRef<
  React.ElementRef<"div">,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="store-card group select-none">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div
            ref={ref}
            className={cn(
              "min-h-40 w-full cursor-pointer overflow-hidden rounded-md border bg-slate-50 transition-shadow hover:shadow-lg",
              className,
            )}
          >
            <Head
              thumbnail={
                <Image
                  // Temporay random thumbnail
                  src={
                    _tempThumbnail[
                      Math.floor(Math.random() * _tempThumbnail.length)
                    ]
                  }
                  priority={true}
                  draggable={false}
                  fill={true}
                  sizes="100%"
                  alt="store-thumbnail"
                  className="rounded-lg object-cover p-1 blur-0 contrast-75 transition-all duration-500 ease-out group-hover:opacity-80 group-hover:blur-[2px]"
                />
              }
              profilePicture={
                <Image
                  src={profilePlaceholder}
                  alt="profile-placeholder"
                  className=" absolute bottom-4 right-4 ml-auto aspect-square w-14 translate-y-1/2 rounded-md transition-all group-hover:right-[calc(100%-4.5em)] group-hover:shadow-lg lg:bottom-0"
                />
              }
            />
            <Body>
              <h2 className="inline-block text-lg font-medium text-slate-800 group-hover:bg-slate-200 group-hover:px-2">
                Chubby store
              </h2>
              <p className="line-clamp-3 pt-2 text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                itaque.
              </p>
            </Body>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="min-w-[20vw]">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(5)].map((_, i) => (
              <div className="aspect-square w-full bg-red-500" key={i} />
            ))}
          </div>
          <HoverCardArrow className="fill-slate-300" />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
});

Store.displayName = "Store";

export default Store;
