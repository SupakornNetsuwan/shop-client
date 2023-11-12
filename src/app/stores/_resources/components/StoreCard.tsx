import React from "react";
import { cn } from "@/core/libs/utils";
import Image from "next/image";
import profilePlaceholder from "@/../../public/profile-placeholder.webp";
import { Store as StoreIcon } from "lucide-react";
import Link from "next/link";
import tree1 from "@/../../public/stores/tree-1.png";
import tree2 from "@/../../public/stores/tree-2.png";
import tree3 from "@/../../public/stores/tree-3.png";
import tree4 from "@/../../public/stores/tree-4.png";
import tree5 from "@/../../public/stores/tree-5.png";
import tree6 from "@/../../public/stores/tree-6.png";
import { GetShopResponseType } from "@/core/libs/functions/getShop";

const _tempThumbnail = [tree1, tree2, tree3, tree4, tree5, tree6];

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
  React.ComponentPropsWithoutRef<"div"> & { shop: GetShopResponseType }
>(({ className, shop, ...props }, ref) => {
  return (
    <Link
      href={`/stores/${shop._id}`}
      className="store-card group block select-none"
    >
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
            <div className="absolute bottom-4 right-4 ml-auto flex aspect-square w-14 translate-y-1/2 items-center justify-center rounded-md border bg-gray-200/80 transition-all group-hover:right-[calc(100%-4.5em)] group-hover:shadow-lg lg:bottom-0">
              <StoreIcon size={24} className="text-slate-800" />
            </div>
          }
        />
        <Body>
          <h2 className="inline-block text-lg font-medium text-slate-800 group-hover:bg-slate-200 group-hover:px-2">
            {shop.title}
          </h2>

          {/* <p className="line-clamp-3 pt-2 text-sm text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            itaque.
          </p> */}
        </Body>
      </div>
    </Link>
  );
});

Store.displayName = "Store";

export default Store;
