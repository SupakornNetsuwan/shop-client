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
        <NavigationMenuLink
          href="/stores"
          className="relative z-10 flex flex-col items-start"
        >
          <p className="bg-reen-500 inline-flex animate-pulse rounded bg-green-500 px-2 py-1 text-white pointer-events-none">
            New
          </p>
          <h3 className="mt-2 inline-flex bg-slate-50/50 px-2 text-4xl font-semibold text-slate-800 pointer-events-none">
            Community stores
          </h3>
        </NavigationMenuLink>

        <Image
          src={stickerThumbnail}
          fill
          alt="sticker-thumbnail"
          className="object-cover opacity-50 transition-all group-hover:blur-[5px] "
        />
      </li>
      <ListItem href="/stores" title="Art">
        Commercial art for your business or private usage
      </ListItem>
      <ListItem href="/stores" title="Poster">
        Choose your favorite poster collections
      </ListItem>
      <ListItem href="/stores" title="Goods & Accessories">
        Find some cool stuffs for brighten your day
      </ListItem>
    </ul>
  );
};

export default ProductMenu;
