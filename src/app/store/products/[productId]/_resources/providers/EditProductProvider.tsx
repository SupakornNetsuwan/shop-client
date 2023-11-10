import React from "react";
import { Form } from "@/core/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateProductSchemaType as EditProductSchemaType } from "@/app/store/_resources/providers/CreateProductProvider"; // Reuse จากที่เคยทำตอนสร้าง Product

const EditProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const methods = useForm<EditProductSchemaType>({
    // values: {
    //   ...
    // },
    defaultValues: {
      name: "",
      category: "goods",
      description: "",
      img: null,
      price: 0,
    },
  });

  const onSubmit: SubmitHandler<EditProductSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default EditProductProvider;
