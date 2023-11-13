import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

export type AddProductResponseType = {
  _id: string;
  name: string;
  description: string;
  img_path: string;
  price: number;
  category: string;
  rating: number;
  create_at: string;
  edit_at: string;
  shop_id: string;
  reviews: [];
};

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
  );
}

const useAddProduct = () => {
  const session = useSession();

  return useMutation<
    AxiosResponse<AddProductResponseType>,
    AxiosError<{ message: string }>,
    typeof FormData
  >({
    mutationFn: async (formData) => {
      return await axios.post(`${url}/api/products`, formData, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
          "content-type": "multipart/form-data",
        },
      });
    },
  });
};

export default useAddProduct;
