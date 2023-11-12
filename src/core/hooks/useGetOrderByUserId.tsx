import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {
  GetOrderByUserIdResponseType,
  GetOrderByUserIdResponseErrorType,
} from "../libs/functions/getOrderByUserId";

const url = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_ORDER_SERVICE_URL environment variable was not defined",
  );
}

const useGetOrderByUserId = () => {
  const session = useSession();

  return useQuery<
    AxiosResponse<GetOrderByUserIdResponseType>,
    AxiosError<GetOrderByUserIdResponseErrorType>
  >({
    queryFn: async () => {
      return await axios.get(
        `${url}/api/orders/users/${session.data?.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token} `,
          },
        },
      );
    },
    queryKey: ["getOrderByUserId"],
    staleTime: 1000 * 30,
    retry: false,
    enabled: !!session.data?.user.token,
  });
};

export default useGetOrderByUserId;
