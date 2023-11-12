export const revalidate = 600
import CustomGoBack from "@/core/components/CustomGoBack";
import React from "react";
import OrderTable from "./_resources/components/OrderTable";

const page = async () => {
  return (
    <>
      <CustomGoBack href="/store" customName="Store" />
      <div className="flex flex-col">
        <OrderTable />
      </div>
    </>
  );
};

export default page;
