import React from "react";
import Image from "next/image";
import { cn } from "@/core/libs/utils";

const Thumbnail: React.FC<React.ComponentPropsWithoutRef<typeof Image>> = (
  props,
) => {
  return (
    <div className="relative left-0 right-0 top-0 z-0 h-[30dvh] md:h-[50dvh]">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent backdrop-blur-md" />
      <Image
        priority
        {...props}
        alt={props.alt}
        className={cn("object-cover", props.className)}
      />
    </div>
  );
};

export default Thumbnail;
