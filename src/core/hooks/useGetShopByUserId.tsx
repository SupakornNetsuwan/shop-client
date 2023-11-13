import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ResponseGetShopByUserId } from "../libs/functions/getShopByUserId";

const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_SHOP_SERVICE_URL environment variable was not defined",
  );
}

const useGetShopByUserId = () => {
  const session = useSession();

  return useQuery({
    queryKey: ["getShopByUserId"],
    queryFn: async () => {
      return await axios.get<ResponseGetShopByUserId>(`${url}/api/shops/me`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
        },
      });
    },
    enabled: !!session.data?.user.token,
  });
};

export default useGetShopByUserId;
