import React, { useState } from "react";
import { Input } from "@/core/components/ui/input";
import { cn } from "@/core/libs/utils";
import { Star, StarHalf } from "lucide-react";
import useIncreaseItem from "@/core/hooks/navbar/Cart/useIncreaseItem";
import useCreateCart from "@/core/hooks/navbar/Cart/useCreateCart";
import { Button } from "@/core/components/ui/button";
import type { GetProductsResponseType } from "@/core/hooks/useGetProductsByShop";
import { AspectRatio } from "@/core/components/ui/aspect-ratio";

/* ----------------- Outer work part ----------------- */

/**
 * @description เป็นส่วนที่ห่อหุมทั้งหมด
 */

const Wrapper: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <div className="relative mt-12 flex w-full flex-col gap-4 lg:mt-24">
      {children}
    </div>
  );
};

/**
 * @description เป็นแถบเมนูสำหรับจัดการรายการสินค้า
 */

const Menu: React.FC<{ onSearchChange: (searchTerm: string) => void }> = ({
  onSearchChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="z-10 flex justify-end rounded-lg bg-slate-50 p-4">
      <Input
        placeholder="Search"
        onChange={handleSearchChange}
        className="w-64 text-slate-800"
      />
    </div>
  );
};

/* ----------------- Product directly associated ----------------- */

/**
 * @description เป็นส่วนที่ห่อหุ้มสินค้า
 */

const ProductContainer: React.FC<
  {
    children: React.ReactElement[] | React.ReactElement;
  } & React.ComponentPropsWithoutRef<"div">
> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "grid min-h-[40em] w-full grid-cols-2 content-start gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * @description เป็นส่วนของสินค้า
 */

const Product: React.FC<{ product: GetProductsResponseType }> = ({
  product,
}) => {
  const createCart = useCreateCart(product._id, product.name);

  console.log(product);

  return (
    <div>
      <div className="relative rounded-lg border bg-white p-4 hover:shadow-md">
        <div className="absolute left-4 top-4 flex gap-1">
          <div className="aspect-square w-2.5 rounded-full bg-[#ea6a5e] hover:bg-[#db6156]" />
          <div className="aspect-square w-2.5 rounded-full bg-[#f2be4e] hover:bg-[#d6b24d]" />
          <div className="aspect-square w-2.5 rounded-full bg-[#6bc659] hover:bg-[#60b44f]" />
        </div>

        <AspectRatio
          className="mt-6 flex items-center justify-center rounded-lg border bg-slate-50 p-4 text-4xl"
          ratio={16 / 9}
        >
          <p>💖</p>
        </AspectRatio>
        <div className="flex items-start justify-between pt-4">
          <div>
            <div className="text-xl font-medium text-slate-800">
              {product.name}
            </div>
            <div className="text-sm text-slate-500">{product.description}</div>
          </div>
          <h2 className="text-xl text-blue-500">{product.price}</h2>
        </div>
      </div>
    </div>
  );
};

const productElements = { Menu, Wrapper, Product, ProductContainer };
export default productElements;
