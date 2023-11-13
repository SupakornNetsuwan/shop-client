import axios, { AxiosError, AxiosResponse } from "axios";
import type { GetProductResponseType } from "@/core/libs/functions/getProduct";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
  );
}

const useGetProduct = (productId: string) => {
  const session = useSession();

  return useQuery<
    AxiosResponse<GetProductResponseType>,
    AxiosError<{ message: string }>
  >({
    queryFn: () => {
      return axios.get(`${url}/api/products/id/${productId}`, {
        headers: {
          Authorization: `Bearer ${session?.data?.user.token}`,
        },
      });
    },
    queryKey: ["getProducts", productId],
    enabled: !!session?.data?.user.token,
    staleTime: 1000 * 30,
  });
};

export default useGetProduct;
