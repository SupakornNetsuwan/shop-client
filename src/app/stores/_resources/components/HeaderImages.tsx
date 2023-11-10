"use client"
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import tree1 from "@/../../public/stores/tree-1.png";
import tree2 from "@/../../public/stores/tree-2.png";
import tree3 from "@/../../public/stores/tree-3.png";
import tree4 from "@/../../public/stores/tree-4.png";
import tree5 from "@/../../public/stores/tree-5.png";
import tree6 from "@/../../public/stores/tree-6.png";
import { animate, glide, stagger, timeline } from "motion";

const HeaderImages = () => {
  const imageRefs = useRef<React.ElementRef<typeof Image>[]>([]);

  useLayoutEffect(() => {
    if (!imageRefs.current.length) return;

    animate(
      imageRefs.current as HTMLElement[],
      {
        transform: ["translateX(15%) scaleX(0)", "none"],
        filter: ["blur(10px)", "none"],
      },
      {
        delay: stagger(0.2),
        easing: glide({
          velocity: 5,
          power: 10,
        }),
      },
    );
  }, [imageRefs]);

  return (
    <div className="absolute bottom-0 right-0">
      <Image
        ref={(el) => (imageRefs.current[0] = el)}
        src={tree1}
        alt="tree-1"
        className="relative z-20 w-44 rounded shadow-realistic-2"
      />
      <Image
        src={tree2}
        ref={(el) => (imageRefs.current[1] = el)}
        alt="tree-2"
        className="relative bottom-4 right-36 z-10 w-52 rounded opacity-70 blur-[5px]"
      />
      <Image
        src={tree3}
        ref={(el) => (imageRefs.current[2] = el)}
        alt="tree-3"
        className="absolute -left-[15em] bottom-4 top-12 z-20 w-64 rounded"
      />
      <Image
        src={tree4}
        ref={(el) => (imageRefs.current[3] = el)}
        alt="tree-4"
        className="absolute -bottom-12 -left-[18em] z-20 w-40 rounded "
      />
      <Image
        src={tree5}
        ref={(el) => (imageRefs.current[4] = el)}
        alt="tree-5"
        className="absolute -left-[14em] top-0 z-10 w-32 rounded opacity-40 blur-[4px]"
      />
      <Image
        src={tree6}
        ref={(el) => (imageRefs.current[5] = el)}
        alt="tree-6"
        className="absolute -left-[24em] bottom-0 z-10 w-32 rounded blur-[2px]"
      />
    </div>
  );
};

export default HeaderImages;
