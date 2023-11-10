import ContentWrapper from "@/core/layouts/ContentWrapper";
import { Store } from "lucide-react";
import Link from "next/link";
import React from "react";
import CreateProductAction from "./_resources/components/CreateProductAction";
import { Separator } from "@/core/components/ui/separator";
import auth from "@/core/libs/auth/auth";

const layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
  ...props
}) => {
  const session = await auth();
  console.log(session)
  
  return (
    <div className="mt-12">
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Store
              className="box-content  bg-slate-100 p-1 marker:rounded-lg"
              size={28}
            />
            <h2 className="  text-2xl font-medium text-slate-800">
              Manage Store
            </h2>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex self-stretch">
              <Link
                href="/store"
                className="flex items-center rounded-md px-4 text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/store/products"
                className="flex items-center rounded-md px-4 text-slate-800 hover:bg-slate-50"
              >
                Products
              </Link>
              <Link
                href="/store/orders"
                className="flex items-center rounded-md px-4 text-slate-800 hover:bg-slate-50"
              >
                Orders
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <CreateProductAction />
          </div>
        </div>
        <Separator orientation="horizontal" className="my-6" />
        {children}
      </ContentWrapper>
    </div>
  );
};

export default layout;
