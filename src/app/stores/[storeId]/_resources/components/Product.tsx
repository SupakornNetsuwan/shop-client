import React, { useState } from "react";
import { atom, ExtractAtomValue, useAtom } from "jotai";
import { Input } from "@/core/components/ui/input";
import { cn } from "@/core/libs/utils";
import { Star, StarHalf } from "lucide-react";
import type { ProductDetailsType } from "./Store";
const optionAtom = atom({ name: "x", price: 12 });
const productSelected = atom([])

/* ----------------- Outer work part ----------------- */

/**
 * @description เป็นส่วนที่ห่อหุมทั้งหมด
 */

const Container: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <div className="mt-12 lg:mt-24 flex w-full flex-col gap-4 lg:flex-row">
      {children}
    </div>
  );
};

/**
 * @description เป็นแถบเมนูสำหรับจัดการรายการสินค้า
 */
const Menu: React.FC<{ onSearchChange: (searchTerm: string) => void }> = ({ onSearchChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="flex rounded-lg bg-slate-50 p-4">
      <Input
        placeholder="Search"
        onChange={handleSearchChange}
        className="text-slate-800"
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
        "grid min-h-[75dvh] w-full grid-cols-2 md:grid-cols-3 gap-4 rounded-lg lg:grid-cols-5 content-start",
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

const Product: React.FC<{product:ProductDetailsType}> = ({product}) => {
  const [productInCart , setProductInCart] = useAtom(productSelected)
  return <div>
            <div className="bg-white  border rounded-lg p-4 cursor-pointer relative  hover:shadow-lg hover:scale-[1.1] ">
                      <div className="absolute left-4 top-4 flex gap-1">
                        <div className="aspect-square w-2.5 rounded-full bg-[#ea6a5e] hover:bg-[#db6156]" />
                        <div className="aspect-square w-2.5 rounded-full bg-[#f2be4e] hover:bg-[#d6b24d]" />
                        <div className="aspect-square w-2.5 rounded-full bg-[#6bc659] hover:bg-[#60b44f]" />
                      </div>
                      <div className="bg-white rounded-lg pt-4 mb-2 text-xl">
                        {product.name}
                      </div>
                      <div className="flex h-full flex-1 flex-col items-center justify-center rounded-lg border bg-slate-50 p-4 mb-1 text-9xl">
                        🐬
                      </div>
                      <div className="text-sx mt-2  mb-1">
                          รายละเอียดสินค้า
                        </div>
                      <div className=" rounded-lg ml-2 text-sm h-20 text-slate-500">
                          {product.description}
                      </div>
                      <div className="text-xs pt-1 flex items-center">
                       {product.rating} <Star className="ml-1" size={10}/>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-lg">
                          {product.price} Bath
                        </div>
                          <div className="ring-2 ring-green-500 p-1 hover:ring-green-500 hover:ring-offset-4  rounded-lg text-sm ">
                            Add to Cart
                          </div>
                      </div>
              </div>
            
        </div>
};

const productElements = { Menu, Container, Product, ProductContainer };
export default productElements;
