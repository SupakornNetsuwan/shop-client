"server only";
import ContentWrapper from "@/core/layouts/ContentWrapper";
import { Store } from "lucide-react";
import Link from "next/link";
import React, { FormEvent } from "react";
import CreateProductAction from "./_resources/components/CreateProductAction";
import { Separator } from "@/core/components/ui/separator";
import auth from "@/core/libs/auth/auth";
import { redirect } from "next/navigation";
import getShopByUserId from "@/core/libs/functions/getShopByUserId";
import handsLaptop from "public/hands-laptop.gif";
import Image from "next/image";
import { AspectRatio } from "@/core/components/ui/aspect-ratio";
import { FormSubmitHandler } from "react-hook-form";
import { Input } from "@/core/components/ui/input";
import CreateStoreForm from "./_resources/components/CreateStoreForm";
import CreateStoreProvider from "./_resources/providers/CreateStoreProvider";

const layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
  ...props
}) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const shopByUserId = await getShopByUserId();
  const shopByUserIdData = shopByUserId.data;

  if (shopByUserIdData.length === 0) {
    return (
      <div className="mb-24 mt-12">
        <ContentWrapper className="flex flex-col items-center">
          <div className="mx-4 max-w-[50em]">
            <div className="text-center text-3xl font-medium">
              Create your
              <div className="relative ml-1 inline-block">
                <span className="relative z-10 px-2">own store</span>
                <div className="absolute -bottom-0 -top-0 left-0 right-0 z-0 rounded-sm bg-brand-primary/50" />
              </div>
              ✨
            </div>
            <p className="w-full max-w-[40em] pt-4 text-center text-sm text-slate-500">
              Turn your passion into a business with our easy-to-use online
              store builder. No coding or design experience required. Get your
              store up and running in minutes, and start selling your products
              to the world.
            </p>
            <div className="mx-auto w-full max-w-[25em]">
              <AspectRatio ratio={16 / 12}>
                <Image
                  priority
                  src={handsLaptop}
                  alt="hands laptop"
                  fill
                  draggable={false}
                  className="object-cover"
                />
              </AspectRatio>
            </div>
            <CreateStoreProvider>
              <CreateStoreForm />
            </CreateStoreProvider>
          </div>
        </ContentWrapper>
      </div>
    );
  }

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
