import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { CreateShopSchemaType } from "@/app/store/_resources/providers/CreateStoreProvider";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL;

type CreateShopResponseType = {
  _id: string;
  title: string;
  owner_id: string;
  account: string;
  edit_at: any;
  create_at: string;
};

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_SHOP_SERVICE_URL environment variable was not defined",
  );
}

const useCreateShop = () => {
  const session = useSession();

  return useMutation<
    AxiosResponse<CreateShopResponseType>,
    AxiosError,
    CreateShopSchemaType
  >({
    mutationFn: async (body) => {
      return await axios.post(
        `${url}/api/shops`,
        {
          account: body.account,
          title: body.title,
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

export default useCreateShop;
