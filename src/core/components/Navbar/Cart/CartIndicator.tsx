"use client";
import React from "react";

const CartIndicator: React.FC<{ amount: number }> = ({ amount }) => {
  if (!amount) return <div className="h-1 flex-1 rounded-full bg-slate-200" />;

  return (
    <div className="flex flex-1 space-x-1">
      {[...Array(amount)].map((_, i) => (
        <div key={i} className="h-1 flex-1 rounded-full bg-green-500" />
      ))}
    </div>
  );
};

export default CartIndicator;
