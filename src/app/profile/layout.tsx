import ContentWrapper from "@/core/layouts/ContentWrapper";
import React from "react";
import auth from "@/core/libs/auth/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/core/components/ui/separator";
import { UserCircle2 } from "lucide-react";
import CashConfigureAction from "./_resources/components/CashConfigureAction";
import ProfileConfigureAction from "./_resources/components/ProfileConfigureAction";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mt-12">
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UserCircle2
              className="box-content rounded-lg bg-slate-100 p-1"
              size={28}
            />
            <h2 className="text-2xl font-medium text-slate-800">Account</h2>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex self-stretch">
              <Link
                href="/profile"
                className="flex items-center rounded-md px-4 text-slate-800 hover:bg-slate-50"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <CashConfigureAction />
            <ProfileConfigureAction />
          </div>
        </div>
        <Separator orientation="horizontal" className="my-6" />
        {children}
      </ContentWrapper>
    </div>
  );
};

export default layout;
