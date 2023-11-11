import React from "react";
import { Package } from "lucide-react";
import tree from "public/stores/tree-4.png";
import Image from "next/image";
import { Separator } from "@/core/components/ui/separator";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="rounded-lg border bg-white overflow-hidden">
      <div className="p-4 pb-0">
        <div className="inline-flex items-center space-x-2">
          <Package size={24} className="text-slate-800" />
          <h2 className="text-lg font-medium text-blue-500">12abbc2f</h2>
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </div>
      <div className="mt-4 flex flex-col space-y-4">{children}</div>
    </div>
  );
};

const Item = () => {
  return (
    <div className="flex justify-between p-4 hover:bg-slate-50">
      <div className="flex space-x-4">
        <div className="w-18 relative aspect-square overflow-hidden rounded-lg lg:w-24">
          <Image src={tree} alt="Product image" fill />
        </div>
        <div>
          <h3 className="text-xl font-medium text-slate-800">A Product name</h3>
          <p className="truncate text-sm text-slate-500">
            Status : Delivered
          </p>
          <p className="truncate text-sm text-slate-500">
            Amount : 2
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Order = {
  Wrapper,
  Item,
};

export default Order;
