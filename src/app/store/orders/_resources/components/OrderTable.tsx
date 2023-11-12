"use client";
import React, { useMemo } from "react";
import Order from "./Order";
import manPocket from "public/sammy-line-man-turned-out-the-empty-pockets.png";
import useGetShopByUserId from "@/core/hooks/useGetShopByUserId";
import useGetOrderOfShop from "@/core/hooks/useGetOrderOfShop";
import Image from "next/image";
import LoadingAnimation from "@/core/components/LoadingAnimation";

const OrderTable = () => {
  const shop = useGetShopByUserId();
  const orders = useGetOrderOfShop(shop.data?.data[0]._id || "");
  const orderList = useMemo(() => orders.data?.data || [], [orders.data?.data]);

  if (orders.isLoading || shop.isLoading) {
    return (
      <div>
        <div className="mx-auto  w-full max-w-[10em]">
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (orderList.length === 0) {
    return (
      <div className="flex min-h-[20em] flex-col items-center justify-center">
        <h1 className="text-center text-xl font-medium text-slate-800">
          No orders
        </h1>
        <p className="text-center text-base text-slate-500">
          You have no orders yet,
          <br /> please wait for the customer to order
        </p>
        <div className="relative mx-4 mt-4 h-60 w-full max-w-[30em]">
          <Image
            draggable={false}
            src={manPocket}
            alt="man pocket"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y">
      {orderList.map((order) => {
        return (
          <div key={order.order_id} className="pt-2 text-lg">
            <p className="text-sm text-slate-400">Order : {order.order_id}</p>
            <div>
              {order.products.map((product) => {
                return (
                  <Order
                    orderStatus={product.order_status}
                    productId={product._id}
                    orderId={order.order_id}
                    key={product._id}
                    price={product.price}
                    productName={product.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTable;
