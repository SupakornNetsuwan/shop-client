import React from "react";
import Image from "next/image";
import storesBackdropGradient from "@/../../public/stores-backdrop-gradient.png";
import tree1 from "@/../../public/tree-1.png";
import tree2 from "@/../../public/tree-2.png";
import tree3 from "@/../../public/tree-3.png";
import tree4 from "@/../../public/tree-4.png";
import tree5 from "@/../../public/tree-5.png";
import tree6 from "@/../../public/tree-6.png";
import HeaderTypedText from "./HeaderTypedText";

const Header = () => {
  return (
    <div className="relative w-full p-16 pt-32 md:p-32 md:pt-44 z-10">
      <div className="relative z-20">
        <h1 className="text-slate-800s relative inline-block text-2xl font-bold before:absolute before:-bottom-2 before:block before:h-3 before:w-full before:bg-brand-primary/50 sm:text-4xl lg:text-7xl">
          Community stores
        </h1>
        <div className="pl-2">
          <HeaderTypedText />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0">
        <Image
          src={tree1}
          alt="tree-1"
          className="relative z-20 w-44 rounded shadow-realistic-2"
        />
        <Image
          src={tree2}
          alt="tree-2"
          className="relative bottom-4 right-36 z-10 w-52 rounded opacity-70 blur-[5px]"
        />
        <Image
          src={tree3}
          alt="tree-3"
          className="absolute -left-[15em] bottom-4 top-12 z-20 w-64 rounded"
        />
        <Image
          src={tree4}
          alt="tree-4"
          className="absolute -bottom-12 -left-[18em] z-20 w-40 rounded "
        />
        <Image
          src={tree5}
          alt="tree-5"
          className="absolute -left-[14em] top-0 z-10 w-32 rounded opacity-40 blur-[4px]"
        />
        <Image
          src={tree6}
          alt="tree-6"
          className="absolute -left-[24em] bottom-0 z-10 w-32 rounded blur-[2px]"
        />
      </div>
      <Image
        src={storesBackdropGradient}
        alt="stores-backdrop-gradient"
        fill={true}
        className="pointer-events-none z-10 -scale-y-100 object-fill"
      />
    </div>
  );
};

export default Header;
