import React from "react";
import { Package } from "lucide-react";
import tree from "public/stores/tree-4.png";
import Image from "next/image";
import { Separator } from "@/core/components/ui/separator";
import { ProductInOrder } from "@/core/libs/functions/getOrderByUserId";

const Wrapper: React.FC<{ children: React.ReactNode; orderId: string }> = ({
  children,
  orderId,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <div className="p-4 pb-0">
        <div className="inline-flex items-center space-x-2">
          <Package size={24} className="text-slate-800" />
          <h2 className=" font-medium text-slate-500">{orderId}</h2>
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </div>
      <div className="mt-4 flex flex-col space-y-4">{children}</div>
    </div>
  );
};

const Item: React.FC<{ product: ProductInOrder }> = ({ product }) => {
  return (
    <div className="flex justify-between from-slate-100 to-white p-4 pr-0 hover:bg-gradient-to-r">
      <div className="w-18 relative mr-4 aspect-square overflow-hidden rounded-lg lg:w-24">
        <Image src={tree} alt="Product image" fill />
      </div>
      <div className="flex flex-1 justify-between">
        <div>
          <h3 className="text-xl font-medium text-slate-800">{product.name}</h3>
          <p className="line-clamp-2 max-w-[20em] text-sm text-slate-500">
            {product.description}
          </p>
        </div>
        <div className="flex rounded-l-xl bg-slate-100 p-4">
          <div className="flex flex-col">
            <p className="w-24 truncate text-left text-sm text-slate-500">
              Status
            </p>
            <p className="w-24 truncate text-left text-sm text-slate-800">
              {product.order_status.charAt(0) +
                product.order_status.slice(1).toLowerCase()}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="w-24 truncate text-left text-sm text-slate-500">
              Price
            </p>
            <p className="w-24 truncate text-left text-sm text-slate-800">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Total: React.FC<{ price: number }> = ({ price }) => {
  return (
    <>
      <Separator orientation="horizontal" className="" />
      <div className="ml-auto inline-block p-4 pt-0 text-xl font-medium text-blue-500">
        {price}
      </div>
    </>
  );
};

const Order = {
  Wrapper,
  Item,
  Total,
};

export default Order;
