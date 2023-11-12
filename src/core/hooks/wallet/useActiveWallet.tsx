import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import type { GetWalletResponseType } from "../../libs/functions/getWallet";

export type ActiveWalletSchemaType = {
  user_id: string;
};


const url = process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PAYMENT_SERVICE_URL environment variable was not defined",
  );
}

const useActiveWallet = () => {
  const session = useSession()

  return useMutation<
    AxiosResponse<GetWalletResponseType>,
    AxiosError,
    ActiveWalletSchemaType
  >({
    mutationFn: async (body) => {
      return await axios.post(
        `${url}/api/wallets/activate`,
        {
          user_id: body.user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token} `,
          },
        },
      );
    },
  });
};

export default useActiveWallet;
