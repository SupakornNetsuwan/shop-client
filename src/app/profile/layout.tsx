import ContentWrapper from "@/core/layouts/ContentWrapper";
import React from "react";
import auth from "@/core/libs/auth/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mt-12">
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default layout;
