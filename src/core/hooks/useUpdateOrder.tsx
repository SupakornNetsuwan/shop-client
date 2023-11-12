import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_ORDER_SERVICE_URL environment variable was not defined",
  );
}

const useUpdateOrder = (order_id: string, product_id: string) => {
  const session = useSession();

  return useMutation<AxiosResponse<any>, AxiosError, string>({
    mutationFn: async (payload) => {
      return await axios.put(
        `${url}/api/orders/${order_id}/${product_id}`,
        // `${url}/api/orders/${order_id}/${product_id}}`,
        {
          order_status: payload,
        },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token || ""}`,
          },
        },
      );
    },
    mutationKey: ["editProfile"],
  });
};

export default useUpdateOrder;
