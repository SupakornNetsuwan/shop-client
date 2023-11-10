"use client";
import React from "react";
import Order from "./Order";

const OrderTable = () => {
  return (
    <div className="flex flex-col divide-y">
      {[...new Array(10).keys()].map((key) => {
        return <Order key={key} amount={5} price={100} productName="Product Name" />;
      })}
    </div>
  );
};

export default OrderTable;
