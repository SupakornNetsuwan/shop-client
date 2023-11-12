import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import type { GetWalletResponseType , GetWalletErrorResponseType} from "../../libs/functions/getWallet";

export type TopupWalletType = {
  wallet_id: string;
  amount: number;
  description: string;
};

const url = process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PAYMENT_SERVICE_URL environment variable was not defined",
  );
}

const useTopup = () => {
  const session = useSession();

  return useMutation<
    AxiosResponse<GetWalletResponseType>,
    AxiosError<GetWalletErrorResponseType>,
    TopupWalletType
  >({
    mutationFn: async (body) => {
      return await axios.post(`${url}/api/wallets/topUp`, body, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
        },
      });
    },
  });
};

export default useTopup;
