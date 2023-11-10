import React, { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Tilt } from "react-tilt";

const tiltOption = {
  transition: true,
  reverse: false,
  scale: 1,
  speed: 1000,
  perspective: 700,
};
const randomFromArray = <P,>(members: P[]): P => {
  return members[Math.floor(Math.random() * members.length)];
};

const Box = () => {
  const box = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!box.current) return;

    box.current.style.backgroundColor = randomFromArray([
      // "#fef3c7",
      // "#fee2e2",
      // "#ecfccb",
      // "#ccfbf1",
      // "#f3f4f6",
      // "#e5e7eb",
      // "#fae8ff",
      // "#e0e7ff",
      "#f1f5f9",
      "#f3f4f6",
      "#f4f4f5",
      "#f5f5f5",
    ]);

    box.current.innerHTML = randomFromArray([
      "🐕",
      "✨",
      "🚀",
      "💖",
      "💐",
      "🌹",
      "🚙",
      "🏗️",
      "🐈",
      "🐳",
      "😏",
      "🤧",
      "🤡",
      "👺",
      "💀",
      "🤖",
      "👾",
      "👽",
      "👻",
      "😽",
      "🐺",
      "🐷",
      "🐔",
      "🦄",
      "🫀",
      "🧌",
      "🦠",
      "🪲",
      "🐞",
      "🐤",
      "🕊️",
      "🐓",
      "🦆",
      "🐬",
    ]);
  }, [box]);

  return (
    <Tilt options={tiltOption}>
      <div
        ref={box}
        className={twMerge(
          "flex aspect-square cursor-pointer items-center justify-center rounded-sm bg-slate-50 text-base ring-2 ring-transparent transition-all hover:scale-[0.8] hover:shadow-lg hover:ring-blue-500 hover:ring-offset-4 xl:text-2xl",
        )}
      >
        ⏱️
      </div>
    </Tilt>
  );
};

export default Box;
