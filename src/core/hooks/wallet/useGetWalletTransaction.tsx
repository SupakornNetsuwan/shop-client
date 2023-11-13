import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import type {
  GetWalletErrorResponseType,
  GetWalletResponseType,
} from "../../libs/functions/getWallet";

const url = process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PAYMENT_SERVICE_URL environment variable was not defined",
  );
}

const useGetWalletTransaction = () => {
  const session = useSession();

  return useQuery<
    AxiosResponse<GetWalletResponseType>,
    AxiosError<GetWalletErrorResponseType>
  >({
    queryFn: async () => {
      return await axios.get(`${url}/api/wallets`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
          "ngrok-skip-browser-warning": "69420",
        },
      });
    },
    queryKey: ["getWallet"],
    staleTime: 1000 * 6,
    retry: false,
    enabled: !!session.data?.user.token,
  });
};

export default useGetWalletTransaction;
