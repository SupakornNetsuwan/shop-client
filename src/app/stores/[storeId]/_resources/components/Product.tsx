import React, { useState } from "react";
import { atom, ExtractAtomValue } from "jotai";
import { Input } from "@/core/components/ui/input";
import { cn } from "@/core/libs/utils";

const optionAtom = atom({ name: "x", price: 12 });

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
const Menu: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex rounded-lg bg-slate-50 p-4">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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

const Product: React.FC<{}> = () => {
  return <div className="bg-slate-50 rounded-lg p-4">Product</div>;
};

const productElements = { Menu, Container, Product, ProductContainer };
export default productElements;
