"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/core/components/ui/form";

const createProductFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  img: z
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
  const methods = useForm<CreateProductSchemaType>({
    defaultValues: {
      name: "",
      category: "goods",
      description: "",
      img: null,
      price: 0,
    },
  });

  const onSubmit: SubmitHandler<CreateProductSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default CreateProductProvider;
