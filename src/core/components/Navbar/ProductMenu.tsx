import React from "react";
import Image from "next/image";
import {
  NavigationMenuLink,
  ListItem,
} from "@/core/components/ui/navigation-menu";
import stickerThumbnail from "../../../../public/sticker-thumbnail.png";

const ProductMenu = () => {
  return (
    <ul className="grid grid-cols-2 gap-2 p-4 md:w-[400px] lg:w-[500px]">
      <li className="group relative col-span-2 h-36  cursor-pointer  overflow-hidden rounded-lg p-3 text-sm font-medium text-slate-800">
        <div className="pointer-events-none relative z-10 flex flex-col items-start">
          <p className="bg-reen-500 inline-flex animate-pulse rounded bg-green-500 px-2 py-1 text-white">
            New
          </p>
          <h3 className="mt-2 inline-flex bg-slate-50/50 px-2 text-4xl font-semibold text-slate-800">
            Boba Cat collection
          </h3>
          <h3 className="mt-2 inline-flex bg-slate-50/50 px-2 text-4xl font-semibold text-slate-800">
            Out now
          </h3>
        </div>
        <Image
          src={stickerThumbnail}
          fill
          alt="sticker-thumbnail"
          className="object-cover opacity-50 transition-transform hover:scale-105 group-hover:blur-[5px] "
        />
      </li>
      <ListItem href="/docs" title="Digital art">
        Re-usable components built using Radix UI and Tailwind CSS.
      </ListItem>
      <ListItem href="/docs" title="Poster">
        Re-usable components built using Radix UI and Tailwind CSS.
      </ListItem>
      <ListItem href="/docs/installation" title="Installation">
        How to install dependencies and structure your app.
      </ListItem>
      <ListItem href="/docs/primitives/typography" title="Typography">
        Styles for headings, paragraphs, lists...etc
      </ListItem>
    </ul>
  );
};

export default ProductMenu;
