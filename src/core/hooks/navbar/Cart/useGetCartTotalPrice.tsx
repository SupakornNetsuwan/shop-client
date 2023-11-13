import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios, { AxiosError, AxiosResponse } from "axios";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}
const useGetCartTotalPrice = () => {
  const session = useSession();

  return useQuery<AxiosResponse<number>, AxiosError>({
    queryFn: () =>
      axios.get(`${url}/api/carts/sum`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token}`,
        },
      }),
    queryKey: ["getCartTotal"],
    retry: false,
    staleTime: 1000 * 10,
    enabled: !!session.data?.user.token,
  });
};

export default useGetCartTotalPrice;
