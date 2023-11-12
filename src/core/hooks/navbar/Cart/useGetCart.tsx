import { useQuery } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { useSession } from "next-auth/react";
import type { CartErrorResponseType, GetCartResponseType } from "./type";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}

const useGetCart = () => {
  const session = useSession();

  return useQuery<
    AxiosResponse<GetCartResponseType>,
    AxiosError<CartErrorResponseType>
  >({
    queryFn: () =>
      axios.get(`${url}/api/carts/me`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token}`,
        },
      }),
    queryKey: ["getCart"],
    retry: false,
    staleTime: 1000 * 6,
  });
};

export default useGetCart;
