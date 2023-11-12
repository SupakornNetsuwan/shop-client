"use client";
import React, { useMemo } from "react";
import useGetCart from "@/core/hooks/navbar/Cart/useGetCart";
import useGetUserInfo from "@/core/hooks/useGetUserInfo";
import useGetCartTotalPrice from "@/core/hooks/navbar/Cart/useGetCartTotalPrice";
import useInvoice from "@/core/hooks/useInvoice";
import { Button } from "@/core/components/ui/button";
import useGetOrderByUserId from "@/core/hooks/useGetOrderByUserId";
import { GetOrderByUserIdResponseType } from "@/core/libs/functions/getOrderByUserId";

const Checkout = () => {
  const order = useGetOrderByUserId();
  const userInfo = useGetUserInfo();
  const cartTotalPrice = useGetCartTotalPrice();
  const invoice = useInvoice();
  //
  const ordersData = useMemo(() => order.data?.data, [order.data?.data]);
  const userData = useMemo(() => userInfo.data?.data, [userInfo.data?.data]);
  const priceData = useMemo(() => cartTotalPrice?.data?.data, [cartTotalPrice]);

  const downloadInvoiceHandler = (
    order: GetOrderByUserIdResponseType[number],
  ) => {
    if (order && userData) {
      const addressData = userData.info.address;
      const address = `${addressData.province} ${addressData.postalcode} ${addressData.tambon} ${addressData.amphur} ${addressData.more}`;
      invoice.mutate(
        {
          order_id: order._id,
          customer_id: userData._id,
          total_cost: order.total_cost,
          customer_details: {
            name_on_invoice: `${userData.info.first_name} ${userData.info.last_name}`,
            address: address,
          },
          product_details: order.products.map((product) => ({
            _id: product._id,
            name: product.name,
            description: product.description,
            img_path: product.img_path,
            price: product.price,
            category: product.category,
            shop_id: product.shop_id,
            rating: product.rating,
          })),
        },
        {
          onSuccess(data, variables, context) {
            const blob = new Blob([data.data], { type: "application/pdf" });
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, "_blank");
            URL.revokeObjectURL(blobUrl);
          },
          onError(error, variables, context) {
            console.log(error.response?.data);
          },
        },
      );
    }
  };

  return (
    <div>
      <h2 className="relative inline-block text-2xl font-bold text-slate-800 before:absolute before:-bottom-2 before:block before:h-3 before:w-full before:bg-brand-primary/50 sm:text-4xl lg:text-6xl">
        Invoice
      </h2>
      <div className="mt-12">
        <p className="max-w-[40em]">
          View your invoice and download it as PDF file.
        </p>
        <div className="mt-4">
          {ordersData?.map((order) => (
            <div
              key={order._id}
              className="flex items-center justify-between rounded-lg bg-slate-50 p-4"
            >
              <p className="text-slate-500">Invoice : {order._id}</p>
              <Button onClick={() => downloadInvoiceHandler(order)}>
                Download Invoice
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
