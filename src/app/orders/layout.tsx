import { Separator } from "@/core/components/ui/separator";
import ContentWrapper from "@/core/layouts/ContentWrapper";
import React from "react";
import { Truck } from "lucide-react";
import auth from "@/core/libs/auth/auth";
import { redirect } from "next/navigation";

const layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mt-12">
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck
              className="box-content rounded-lg bg-slate-100 p-1"
              size={28}
            />
            <h2 className="text-2xl font-medium text-slate-800">My Orders</h2>
          </div>
        </div>
        <Separator orientation="horizontal" className="my-6" />
        {children}
      </ContentWrapper>
    </div>
  );
};

export default layout;
