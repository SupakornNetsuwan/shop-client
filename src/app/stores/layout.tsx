import auth from "@/core/libs/auth/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  
  return <>{children}</>;
};

export default layout;
