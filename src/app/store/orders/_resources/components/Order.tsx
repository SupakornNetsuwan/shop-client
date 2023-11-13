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
import useUpdateOrder from "@/core/hooks/useUpdateOrder";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/core/components/ui/use-toast";

const statuses: Readonly<["ORDERED", "CANCEL", "SHIPPED", "DELIVERED"]> = [
  "ORDERED",
  "CANCEL",
  "SHIPPED",
  "DELIVERED",
];

const orderSchema = z.object({
  orderStatus: z.enum(statuses),
});

type OrderSchemaType = z.infer<typeof orderSchema>;

const Order: React.FC<{
  productName: string;
  productId: string;
  price: number;
  orderId: string;
  orderStatus: string;
}> = ({ price, productName, orderId, productId, orderStatus }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const updateOrder = useUpdateOrder(orderId, productId);
  const { control } = useForm<OrderSchemaType>({
    values: {
      orderStatus: orderStatus as OrderSchemaType["orderStatus"],
    },
  });

  return (
    <div className="flex items-center space-x-2 py-2">
      <p className="text-blue-500">Has ordered</p>
      <ArrowRight className="text-blue-500" size={24} />
      <p className="w-full max-w-[12em] truncate text-sm font-medium">
        {productName || "-"}
      </p>

      <div>
        <Controller
          name="orderStatus"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <Select
              defaultValue={"ORDERED"}
              onValueChange={(value) => {
                updateOrder.mutate(value, {
                  onError(error, variables, context) {
                    console.log(error.response?.data);
                  },
                  onSuccess(data, variables, context) {
                    queryClient.invalidateQueries({
                      queryKey: ["getOrderOfShop"],
                    });
                    toast({
                      title: "Updated",
                      description: "Order status updated",
                    });
                  },
                });
                onChange(value);
              }}
              name={name}
              value={value}
            >
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Loading" />
              </SelectTrigger>
              <SelectContent>
                {["ORDERED", "CANCEL", "SHIPPED", "DELIVERED"].map((status) => (
                  <SelectItem key={status} value={status}>
                    {status.charAt(0).toUpperCase() +
                      status.slice(1).toLowerCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default Order;
