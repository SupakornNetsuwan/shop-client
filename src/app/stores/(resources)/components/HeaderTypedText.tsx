"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeaderTypedText = () => {
  return (
    <h2 className="py-6 text-lg text-slate-500 md:text-xl">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "find your love products here!",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "find your love merchant here!",
          1000,
          "find your love happiness here!",
          1000,
          () => {},
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={70}
        repeat={Infinity}
      />
    </h2>
  );
};

export default HeaderTypedText;
