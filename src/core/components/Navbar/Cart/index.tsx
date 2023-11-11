"use client";
import React, { useMemo, useState } from "react";
import CartIndicator from "./CartIndicator";
import CartItem from "./CartItem";
import type { CartItemType } from "./CartItem";
import useGetCart, { ProductEntity } from "@/core/hooks/navbar/Cart/useGetCart";
const Cart = () => {
  const {data, isLoading, error} = useGetCart()
  const items = useMemo(() => data?.data, [data?.data])

  // const [items, setItems] = useState<CartItemType[]>([
  //   { id: "1", name: "Tulip lovely season sticker", amount: 1 },
  //   { id: "2", name: "Dear sticker", amount: 1 },
  //   { id: "3", name: "Tulip the autumn poster", amount: 2 },
  // ]);
  const product = items?.product
  return (
    <div>
      <div className="flex items-center justify-end gap-1">
        <CartIndicator amount={product?.length || 0} />
        <h3 className="text-lg font-medium text-slate-800">
          { items == undefined  || items.product?.length? <span className="text-slate-300">Empty</span> : "🛒"}
        </h3>
      </div>
      <div className="flex flex-col mt-2 space-y-2">
        {product && product.map((item:ProductEntity) => (
          <CartItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
