import React from "react";
import { Separator } from "@/core/components/ui/separator";
import { Store } from "lucide-react";
import CreateProductAction from "./_resources/components/CreateProductAction";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Store
            className="box-content rounded-lg bg-slate-100 p-1"
            size={28}
          />
          <h2 className="text-2xl font-medium text-slate-800">Manage Store</h2>
        </div>
        <div className="flex gap-2">
          <CreateProductAction />
        </div>
      </div>
      <Separator orientation="horizontal" className="my-6" />
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {[...new Array(10).keys()].map((i) => (
            <div key={i}>{i}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
