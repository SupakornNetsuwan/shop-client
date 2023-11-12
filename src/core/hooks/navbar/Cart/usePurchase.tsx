import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}

const usePurchase = () => {
  const session = useSession();

  return useMutation<
    AxiosResponse<string>,
    AxiosError<{ message: string; cause: string }>,
    string
  >({
    mutationFn: (payload) =>
      axios.get(`${url}/api/carts/order`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token}`,
        },
      }),
  });
};

export default usePurchase;
