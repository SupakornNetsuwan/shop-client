import React from "react";
import { Button } from "../../ui/button";
import { Minus, Plus } from "lucide-react";
export type CartItemType = { _id: string; name: string; amount: number };
import useIncreaseItem from "@/core/hooks/navbar/Cart/useIncreaseCartItem";
import useReduceItem from "@/core/hooks/navbar/Cart/useDecreaseCartItem";
import { Skeleton } from "../../ui/skeleton";
import { useQueryClient } from "@tanstack/react-query";

const CartItem: React.FC<CartItemType> = ({ amount, _id, name }) => {
  const queryClient = useQueryClient();
  const increseItem = useIncreaseItem();
  const decreaseItem = useReduceItem();

  if (decreaseItem.isPending || increseItem.isPending)
    return (
      <div className="flex justify-center animate-pulse space-x-2 text-center text-slate-500">
        <Skeleton className="h-4 w-24 rounded-full" />
        <Skeleton className="h-4 w-24 rounded-full" />
      </div>
    );

  return (
    <div className="flex flex-col items-center relative rounded-lg bg-transparent p-4 py-2 transition-colors duration-200 hover:bg-slate-50/50">
      <p className="line-clamp-1 select-none text-slate-800 hover:line-clamp-2">
        {name}
      </p>
      <div className="mt-2">
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
          onClick={() =>
            decreaseItem.mutate([{ _id, name }], {
              onSuccess(data, variables, context) {
                queryClient.invalidateQueries({ queryKey: ["getCartTotal"] });
                queryClient.invalidateQueries({ queryKey: ["getCart"] });
              },
            })
          }
        >
          <Minus size={12} className="text-slate-500" />
        </Button>

        <span className="mx-2 text-sm text-slate-800">{amount}</span>
        <Button
          size="icon"
          variant="outline"
          className="h-8 w-8"
          onClick={() =>
            increseItem.mutate([{ _id, name }], {
              onSuccess(data, variables, context) {
                queryClient.invalidateQueries({ queryKey: ["getCartTotal"] });
                queryClient.invalidateQueries({ queryKey: ["getCart"] });
              },
            })
          }
        >
          <Plus size={12} className="text-slate-500" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
