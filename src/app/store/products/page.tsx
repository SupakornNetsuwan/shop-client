import React from "react";
import Link from "next/link";
import { AspectRatio } from "@/core/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import tree1 from "public/stores/tree-1.png";
import CustomGoBack from "@/core/components/CustomGoBack";

const page = () => {
  return (
    <>
      <CustomGoBack href="/store" customName="Store"/>
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...new Array(10).keys()].map((i) => (
            <Link
              href={`/store/products/${i}`}
              key={i}
              className="group cursor-pointer rounded-md border bg-slate-50/50 p-2 hover:shadow-realistic-1 lg:p-4"
            >
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-md"
              >
                <Image
                  src={tree1}
                  fill
                  draggable={false}
                  alt="product image"
                  className="object-cover"
                />
              </AspectRatio>
              <div className="relative mt-2 overflow-hidden">
                <div className="absolute flex items-center transition-all group-hover:translate-y-1/2">
                  <h2 className="text-base font-semibold text-slate-800  lg:text-lg ">
                    A prodroduct name
                  </h2>
                  <ChevronRight
                    className="-translate-x-4 text-blue-500 opacity-0 transition-all  group-hover:translate-x-0 group-hover:opacity-100"
                    size={24}
                  />
                </div>
                <p className="line-clamp-2 pt-8 text-sm text-slate-500 transition-all ease-in-out group-hover:translate-y-4 group-hover:opacity-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsa, ad? Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. In dicta eaque accusamus doloribus ex nihil tempora
                  exercitationem minus repellat repellendus.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
