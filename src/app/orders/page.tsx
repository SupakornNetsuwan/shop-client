"server only";
import React from "react";
import Order from "./_resources/components/Order";
import getOrderByUserId from "@/core/libs/functions/getOrderByUserId";
import { NextPage } from "next";

const page: NextPage = async () => {
  const orders = await getOrderByUserId();

  return (
    <div className="flex flex-col space-y-4">
      {orders.data.map((order) => {
        return (
          <Order.Wrapper key={order._id} orderId={order._id}>
            {order.products?.map((product) => (
              <Order.Item key={product._id} product={product} />
            ))}
            <Order.Total price={order.total_cost} />
          </Order.Wrapper>
        );
      })}
    </div>
  );
};

export default page;
