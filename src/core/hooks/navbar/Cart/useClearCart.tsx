import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "No NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}

const useClearCart = () => {
  const session = useSession();

  return useMutation<AxiosResponse<string>, AxiosError, string>({
    mutationFn: () =>
      axios.put(
        `${url}/api/carts/clear`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token}`,
          },
        },
      ),
    mutationKey: ["clearCart"],
  });
};

export default useClearCart;
