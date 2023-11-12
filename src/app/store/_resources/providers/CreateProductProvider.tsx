"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/core/components/ui/form";
import useAddProduct from "@/core/hooks/products/useAddProduct";
import { useRouter } from "next/navigation";
import LoadingAnimation from "@/core/components/LoadingAnimation";
import { useToast } from "@/core/components/ui/use-toast";

export const createProductFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  image: z
    .custom<File | Buffer>((data) => {
      // @see https://github.com/colinhacks/zod/issues/387#issuecomment-1712177211
      return typeof window === "undefined"
        ? data instanceof Buffer
        : data instanceof File;
    })
    .or(z.null()),
  price: z.number(),
  category: z.enum(["goods", "sticker", "digital-art"]),
});

export type CreateProductSchemaType = z.infer<typeof createProductFormSchema>;

const CreateProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const addProduct = useAddProduct();
  const methods = useForm<CreateProductSchemaType>({
    defaultValues: {
      name: "",
      category: "goods",
      description: "",
      image: null,
      price: 0,
    },
  });

  const onSubmit: SubmitHandler<CreateProductSchemaType> = (data) => {
    const formData = new FormData();

    for (const key in data) {
      // @ts-ignore
      formData.append(key, data[key]);
    }

    // @ts-ignore
    addProduct.mutate(formData, {
      onError(error, variables, context) {
        console.log(error.response);
      },
      onSuccess(data, variables, context) {
        router.refresh();
        toast({
          title: "Success",
          description: "Product was created and ready to sell",
        });
        console.log(data.data);
      },
    });
  };

  if (addProduct.isPending) {
    return (
      <div>
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

export default CreateProductProvider;
