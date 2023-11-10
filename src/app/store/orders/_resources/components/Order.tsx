import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const statuses: Readonly<["ORDERED", "CANCEL", "SHIPPED", "DELIVERIED"]> = [
  "ORDERED",
  "CANCEL",
  "SHIPPED",
  "DELIVERIED",
];

const orderSchema = z.object({
  orderStatus: z.enum(statuses),
});

type OrderSchemaType = z.infer<typeof orderSchema>;

const Order: React.FC<{
  productName: string;
  amount: number;
  price: number;
}> = ({ amount, price, productName }) => {
  const { control, watch } = useForm<OrderSchemaType>({
    defaultValues: {
      orderStatus: "ORDERED",
    },
  });

  return (
    <div className="flex items-center space-x-2 py-2">
      <p className="w-full max-w-[10em] truncate text-sm font-medium">
        Customer Name
      </p>
      <p className="text-blue-500">has ordered</p>
      <ArrowRight className="text-blue-500" size={24} />
      <p className="w-full max-w-[12em] truncate text-sm font-medium">
        {productName || "-"}
      </p>

      <div className="flex w-full max-w-[10em] items-center text-sm">
        <span className="mr-2 text-slate-500">Amount</span>
        <p className="flex aspect-square  items-center justify-center rounded bg-slate-100 px-3 py-2 font-medium text-slate-800">
          {amount || 0}
        </p>
      </div>
      <div className="flex items-center text-sm">
        <span className="mr-2 text-slate-500">Price</span>
        <p className="flex items-center justify-center rounded bg-slate-100 px-3 py-2 font-medium text-slate-800">
          {price || 0}
        </p>
      </div>
      <div>
        <Controller
          name="orderStatus"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <Select
              defaultValue={"ORDERED"}
              onValueChange={onChange}
              name={name}
              value={value}
            >
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Loading" />
              </SelectTrigger>
              <SelectContent>
                {["ORDERED", "CANCEL", "SHIPPED", "DELIVERIED"].map(
                  (status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() +
                        status.slice(1).toLowerCase()}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default Order;
