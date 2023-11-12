import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

export interface GetProductsResponseType {
  _id: string;
  name: string;
  description: string;
  img_path: string;
  price: number;
  category: string;
  shop_id: string;
  rating: number;
  create_at: string;
  edit_at: string;
  reviews:  {
    anonymous: boolean;
    content: string;
    owner_name: string;
    rate: number;
  }[];
}

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
  );
}

const useGetProductsByShop = (shopId: string) => {
  const session = useSession();

  return useQuery<AxiosResponse<GetProductsResponseType[]>>({
    queryFn: async () => {
      return axios.get(`${url}/api/products/shopId/${shopId}`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token}`,
        },
      });
    },
    queryKey: ["getProducts", shopId],
  });
};

export default useGetProductsByShop;
