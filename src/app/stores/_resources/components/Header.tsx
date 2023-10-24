"server-only"
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import storesBackdropGradient from "@/../../public/stores-backdrop-gradient.png";
import HeaderTypedText from "./HeaderTypedText";
import HeaderImage from "./HeaderImages";

const Header = () => {

  return (
    <div className="relative z-10 w-full p-16 pt-32 md:p-32 md:pt-44">
      <div className="relative z-20">
        <h1 className="text-slate-800 relative inline-block text-2xl font-bold before:absolute before:-bottom-2 before:block before:h-3 before:w-full before:bg-brand-primary/50 sm:text-4xl lg:text-7xl">
          Community stores
        </h1>
        <div className="pl-2">
          <HeaderTypedText />
        </div>
      </div>
     <HeaderImage/>
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
