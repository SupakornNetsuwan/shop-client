import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

export type CheckoutBillResponseType = {
  order_id: string;
  customer_id: string;
  total_cost: number;
  product_details: {
    _id: string;
    name: string;
    description: string;
    img_path: string;
    price: number;
    category: string;
    shop_id: string;
    rating: number;
  }[];
  customer_details: {
    name_on_invoice: string;
    address: string;
  };
};

const url = process.env.NEXT_PUBLIC_INVOICE_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_INVOICE_SERVICE_URL environment variable was not defined",
  );
}

const useInvoice = () => {
  return useMutation<AxiosResponse, AxiosError, CheckoutBillResponseType>({
    mutationFn: (payload) => {
      return axios.post(
        `${url}/api/v1/invoice`,
        {
          order_id: payload.order_id,
          customer_id: payload.customer_id,
          total_cost: payload.total_cost,
          customer_details: {
            name_on_invoice: payload.customer_details.name_on_invoice,
            address: payload.customer_details.address,
          },
          product_details: payload.product_details,
        },
        {
          headers: {
            Accept: "application/pdf",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
          responseType: "arraybuffer",
        },
      );

      // if (response.status == 200) {
      //   const blob = new Blob([response.data], { type: "application/pdf" });
      //   const blobUrl = URL.createObjectURL(blob);
      //   window.open(blobUrl, "_blank");
      //   URL.revokeObjectURL(blobUrl);
      // } else {
      //   console.log("Failed to generate PDF:", response.statusText);
      // }
    },
    mutationKey: ["checkoutBill"],
  });
};

export default useInvoice;
