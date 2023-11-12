import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { CartPayloadType, CartErrorResponseType } from "./type";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "No NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}

const useDecreaseCartItem = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse,
    AxiosError<CartErrorResponseType>,
    CartPayloadType
  >({
    mutationFn: (payload) =>
      axios.put(
        `${url}/api/carts/del`,
        {
          product: payload,
        },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token}`,
          },
        },
      ),
    mutationKey: ["decreaseCartItem"],
    onSettled(data, error, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["decreaseCartItem"] });
    },
  });
};
export default useDecreaseCartItem;
