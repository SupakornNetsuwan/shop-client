"use client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/core/components/ui/form";
import useCreateShop from "@/core/hooks/useCreateShop";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/core/components/ui/use-toast";
import useGetWallet from "@/core/hooks/wallet/useGetWallet";

const createShopSchema = z.object({
  title: z.string().min(5, {
    message: "Title must atleast 5 characters",
  }),
  account: z.string().min(5, {
    message: "Account Number must atleast 5 characters",
  }),
});

export type CreateShopSchemaType = z.infer<typeof createShopSchema>;

const CreateStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const wallet = useGetWallet();
  const router = useRouter();
  const createShop = useCreateShop();
  const methods = useForm<CreateShopSchemaType>({
    defaultValues: {
      account: "",
      title: "",
    },
    resolver: zodResolver(createShopSchema),
  });

  useEffect(() => {
    if (wallet.data?.data.data.wallet._id) {
      methods.setValue("account", wallet.data?.data.data.wallet._id || "");
    }
  }, [wallet.data?.data.data.wallet._id, methods]);

  const onSubmit: SubmitHandler<CreateShopSchemaType> = (data) => {
    createShop.mutate(data, {
      onSuccess(data, variables, context) {
        router.refresh();
        toast({ title: "Success", description: "Shop has been created" });
      },
      onError(error, variables, context) {
        console.log(error.response?.data);
      },
    });
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default CreateStoreProvider;
