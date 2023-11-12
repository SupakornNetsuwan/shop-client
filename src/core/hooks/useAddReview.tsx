import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios, { AxiosError, AxiosResponse } from "axios";

export type AddReviewPayloadType = {
  content: string;
  rate: number;
  owner_name: string;
  isAnonymous: boolean;
};

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
  );
}

const useAddReview = (productId: string) => {
  const session = useSession();

  return useMutation<AxiosResponse<string>, AxiosError, AddReviewPayloadType>({
    mutationFn: async (payload) => {
      return await axios.post(
        `${url}/api/products/${productId}/reviews`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token} `,
          },
        },
      );
    },
  });
};

export default useAddReview;
