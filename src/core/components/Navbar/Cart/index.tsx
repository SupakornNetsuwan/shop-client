"use client";
import React, { useState, useMemo } from "react";
import CartIndicator from "./CartIndicator";
import CartItem from "./CartItem";
import useGetCart from "@/core/hooks/navbar/Cart/useGetCart";
import type { ProductInCartType } from "@/core/hooks/navbar/Cart/type";
import { Cat, Loader } from "lucide-react";
import { Button } from "../../ui/button";
import useGetCartTotalPrice from "@/core/hooks/navbar/Cart/useGetCartTotalPrice";
import { useRouter } from "next/navigation";
import { CircleDollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import usePurchase from "@/core/hooks/navbar/Cart/usePurchase";

const Cart = () => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetCart();
  const cartTotalPrice = useGetCartTotalPrice();
  const purchase = usePurchase();

  const cartItems = useMemo(() => data?.data.product || [], [data?.data]);
  const price = useMemo(() => cartTotalPrice?.data?.data, [cartTotalPrice]);

  console.log(cartItems)

  if (isLoading) {
    return <h3 className="text-center text-slate-500">Loading...</h3>;
  }

  if (isError) {
    console.log(error.response?.data);

    if (error.response?.data.cause === "ไม่พบ cart") {
      return (
        <div className="flex items-center justify-center space-x-2 text-slate-500">
          <h3 className="">Empty</h3>
          <Cat size={20} />
        </div>
      );
    }

    return <h3 className="text-center text-red-500">Unknown error</h3>;
  }

  if (isOpenConfirm) {
    return (
      <div>
        <div
          className="relative rounded-lg bg-transparent p-4 py-2 transition-colors
        duration-200 hover:bg-slate-50/50"
        >
          <h2 className="text-center text-slate-800">Confirm the purchase</h2>
          <p className="text-center text-sm text-slate-500">
            Your credit will be deducted with 7% of VAT
          </p>
          <h2 className="my-4 flex items-center justify-center space-x-1">
            <span className="text-lg font-medium">{price}</span>
            <CircleDollarSign size={18} />
          </h2>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => setIsOpenConfirm(false)}
            className="flex-1"
            variant="secondary"
          >
            <ChevronLeft size={20} />
            <span>Cancel</span>
          </Button>
          {purchase.isPending ? (
            <div className="flex  items-center justify-center self-stretch rounded-lg bg-slate-50 px-12">
              <Loader className="animate-spin" size={18} />
            </div>
          ) : (
            <Button
              onClick={() =>
                purchase.mutate("_", {
                  onSuccess(data, variables, context) {
                    console.log(data.data);
                  },
                  onError(error, variables, context) {
                    console.log(error.response?.data);
                  },
                })
              }
              className="flex-1"
              variant="default"
            >
              <span>Yes</span>
              <ChevronRight size={20} />
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-1">
        <CartIndicator amount={cartItems.length || 0} />
        <h3 className="text-lg font-medium text-slate-800">
          {!cartItems.length ? (
            <span className="text-slate-300">Empty</span>
          ) : (
            "🛒"
          )}
        </h3>
      </div>
      <div className="mt-2 flex flex-col space-y-2">
        {cartItems.map((item: ProductInCartType) => (
          <CartItem key={item._id} {...item} />
        ))}

        {cartItems.length > 0 && (
          <Button
            onClick={() => setIsOpenConfirm(true)}
            variant="secondary"
            className=""
          >
            <span>Purchase</span>
            {Boolean(price) && (
              <span className="ml-2 flex items-center justify-center space-x-1">
                (<span>{price}</span>
                <CircleDollarSign size={12} />)
              </span>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
