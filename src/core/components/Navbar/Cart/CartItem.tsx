import React from "react";
import { Button } from "../../ui/button";
import { Minus, Plus } from "lucide-react";
export type CartItemType = { _id: string; name: string; amount: number };
import useIncreaseItem from "@/core/hooks/navbar/Cart/useIncreaseItem";
import useReduceItem from "@/core/hooks/navbar/Cart/useReduceItem";

const CartItem: React.FC<CartItemType> = ({ amount, _id, name }) => {
  const increseItem = useIncreaseItem(_id, name)
  const reduceItem = useReduceItem(_id, name)
  return (
    <div className="relative rounded-lg bg-transparent p-4 py-2 transition-colors duration-200 hover:bg-slate-50/50">
      <p className="line-clamp-1 select-none text-slate-800 hover:line-clamp-2">{name}</p>
      <div className="mt-2">
        <Button size="icon" variant="outline" className="h-8 w-8" onClick={()=>reduceItem}>
          <Minus size={12} className="text-slate-500" />
        </Button>
        <span className="mx-2 text-sm text-slate-800">{amount}</span>
        <Button size="icon" variant="outline" className="h-8 w-8" onClick={()=>increseItem}>
          <Plus size={12} className="text-slate-500" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
