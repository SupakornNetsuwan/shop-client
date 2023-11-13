import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
  );
}

const useDeleteProduct = () => {
  const session = useSession();

  return useMutation<
    AxiosResponse<string>,
    AxiosError<{ message: string }>,
    string
  >({
    mutationFn: (productId) => {
      return axios.delete(`${url}/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${session?.data?.user.token}`,
        },
      });
    },
  });
};

export default useDeleteProduct;
