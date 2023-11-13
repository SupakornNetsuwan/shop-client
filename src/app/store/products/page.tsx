import React from "react";
import Link from "next/link";
import { AspectRatio } from "@/core/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import CustomGoBack from "@/core/components/CustomGoBack";
import getShopByUserId from "@/core/libs/functions/getShopByUserId";
import { NextPage } from "next";
import getProductsByShop from "@/core/libs/functions/getProductsByShop";
import manPocket from "public/sammy-line-man-turned-out-the-empty-pockets.png";

const page: NextPage = async () => {
  const data = await getShopByUserId();
  const products = await getProductsByShop(data.data[0]._id);

  if (products.data.length === 0) {
    return (
      <>
        <CustomGoBack href="/store" customName="Store" />
        <div className="flex min-h-[20em] flex-col items-center justify-center">
          <h1 className="text-xl font-medium text-slate-800">No Products</h1>
          <p className="text-base text-slate-500">
            You need to create a new product here
          </p>
          <div className="relative mx-4 mt-4 h-60 w-full max-w-[30em]">
            <Image
              draggable={false}
              src={manPocket}
              alt="man pocket"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CustomGoBack href="/store" customName="Store" />
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {products.data.map((product) => (
            <Link
              href={`/store/products/${product._id}`}
              key={product._id}
              className="group cursor-pointer rounded-md border bg-slate-50/50 p-2 hover:shadow-realistic-1 lg:p-4"
            >
              <AspectRatio
                ratio={16 / 9}
                className="overflow-hidden rounded-md"
              >
                <Image
                  src={product.img_path}
                  fill
                  draggable={false}
                  alt="product image"
                  className="object-cover"
                  sizes="30vw, 20vw"
                />
              </AspectRatio>
              <div className="relative mt-2 overflow-hidden">
                <div className="absolute flex items-center transition-all group-hover:translate-y-1/2">
                  <h2 className="text-base font-semibold text-slate-800  lg:text-lg ">
                    {product.name}
                  </h2>
                  <ChevronRight
                    className="-translate-x-4 text-blue-500 opacity-0 transition-all  group-hover:translate-x-0 group-hover:opacity-100"
                    size={24}
                  />
                </div>
                <p className="line-clamp-2 pt-8 text-sm text-slate-500 transition-all ease-in-out group-hover:translate-y-4 group-hover:opacity-0">
                  {product.description}
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
