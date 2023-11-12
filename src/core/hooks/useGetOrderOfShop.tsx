import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { ResponseGetShopByUserId } from "../libs/functions/getShopByUserId";

export type OrderOfShopResponseType = {
  order_id: string;
  products: Product[];
}[];

type Product = {
  _id: string;
  name: string;
  description: string;
  img_path: string;
  price: number;
  category: string;
  shop_id: string;
  rating: number;
  order_status: string;
};

const url = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_ORDER_SERVICE_URL environment variable was not defined",
  );
}

const useGetOrderOfShop = (shopId: string) => {
  const session = useSession();

  return useQuery<AxiosResponse<OrderOfShopResponseType>>({
    queryKey: ["getOrderOfShop"],
    enabled: !!shopId,
    queryFn: () => {
      return axios.get<any>(`${url}/api/orders/shops/${shopId || ""}`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
        },
      });
    },
    refetchOnWindowFocus:false
  });
};

export default useGetOrderOfShop;
