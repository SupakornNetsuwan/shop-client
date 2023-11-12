"use client";
import { Form } from "@/core/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/core/components/ui/use-toast";
import useTopup from "@/core/hooks/wallet/useTopup";
import useGetWallet from "@/core/hooks/wallet/useGetWallet";
import LoadingAnimation from "@/core/components/LoadingAnimation";
import { useQueryClient } from "@tanstack/react-query";

const cashFormSchema = z.object({
  amount: z.string(),
  description: z.string().optional(),
});

export type CashFormSchemType = z.infer<typeof cashFormSchema>;

const CashFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();
  const topup = useTopup();
  const wallet = useGetWallet();
  const { toast } = useToast();
  const walletData = wallet.data?.data.data;

  const methods = useForm<CashFormSchemType>({
    defaultValues: {
      amount: "0",
      description: "เติมเงินค่าสติ๊กเกอร์",
    },
    resolver: zodResolver(cashFormSchema),
  });

  const onSubmit: SubmitHandler<CashFormSchemType> = (data) => {
    if (!walletData) throw new Error("Wallet data is not found");

    topup.mutate(
      {
        amount: parseFloat(data.amount),
        description: data.description || "",
        wallet_id: walletData.wallet._id,
      },
      {
        onSuccess(data, variables, context) {
          toast({
            title: "Success",
            description: "The balance has topped up",
          });
          queryClient.invalidateQueries({ queryKey: ["getWallet"] });
        },
        onError(error, variables, context) {
          toast({
            title: "Error",
            description: error.response?.data.message,
            variant: "destructive",
          });
        },
      },
    );
  };

  if (topup.isPending) {
    return (
      <div className="min-h-[30dvh] w-full">
        <div className="mx-auto w-1/2">
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};
export default CashFormProvider;
