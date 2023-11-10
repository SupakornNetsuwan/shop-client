import CustomGoBack from "@/core/components/CustomGoBack";
import React from "react";
import OrderTable from "./_resources/components/OrderTable";

const page = () => {
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
