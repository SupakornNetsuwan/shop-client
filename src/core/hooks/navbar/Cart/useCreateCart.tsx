import { useMutation } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import {
  GetCartResponseType,
  CartPayloadType,
  CartErrorResponseType,
} from "./type";
import { useToast } from "@/core/components/ui/use-toast";

const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL;

if (!url) {
  throw new Error(
    "No NEXT_PUBLIC_CART_SERVICE_URL environment variable was not defined",
  );
}

const queryClient = new QueryClient();

const useCreateCart = () => {
  const { toast } = useToast();

  const session = useSession();

  return useMutation<
    AxiosResponse<GetCartResponseType>,
    AxiosError<CartErrorResponseType>,
    CartPayloadType
  >({
    mutationFn: (payload) =>
      axios.post(
        `${url}/api/carts`,
        { product: payload },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token}`,
          },
        },
      ),
    onSuccess(data, variables, context) {
      console.log(data, "FROM CART CREATE REQUEST");
    },
    onError(error, variables, context) {
      toast({
        title: "Error",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    mutationKey: ["createCart"],
  });
};
export default useCreateCart;
