"use client";
import React, { useState } from "react";
import CartIndicator from "./CartIndicator";
import CartItem from "./CartItem";
import type { CartItemType } from "./CartItem";

const Cart = () => {
  const [items, setItems] = useState<CartItemType[]>([
    { id: "1", name: "Tulip lovely season sticker", amount: 1 },
    { id: "2", name: "Dear sticker", amount: 1 },
    { id: "3", name: "Tulip the autumn poster", amount: 2 },
  ]);

  return (
    <div>
      <div className="flex items-center justify-end gap-1">
        <CartIndicator amount={items.length} />
        <h3 className="text-lg font-medium text-slate-800">
          {!items.length ? <span className="text-slate-300">Empty</span> : "🛒"}
        </h3>
      </div>
      <div className="flex flex-col mt-2 space-y-2">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
