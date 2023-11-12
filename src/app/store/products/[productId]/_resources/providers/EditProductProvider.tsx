import React, { useMemo } from "react";
import { Form } from "@/core/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateProductSchemaType as EditProductSchemaType,
  createProductFormSchema,
} from "@/app/store/_resources/providers/CreateProductProvider"; // Reuse จากที่เคยทำตอนสร้าง Product
import useGetProduct from "@/core/hooks/products/useGetProduct";
import { useParams, useRouter } from "next/navigation";
import LoadingAnimation from "@/core/components/LoadingAnimation";
import useUpdateProduct from "@/core/hooks/products/useUpdateProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/core/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const EditProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { productId }: { productId: string } = useParams();
  const updateProduct = useUpdateProduct(productId);
  const product = useGetProduct(productId);
  const productData = useMemo(() => product.data?.data, [product.data]);

  const methods = useForm<EditProductSchemaType>({
    values: {
      name: productData?.name || "",
      category:
        (productData?.category.toLowerCase() as EditProductSchemaType["category"]) ||
        "goods",
      description: productData?.description || "",
      image: null,
      price: productData?.price || 0,
    },
    resolver: zodResolver(createProductFormSchema),
  });

  const onSubmit: SubmitHandler<EditProductSchemaType> = (data) => {
    const formData = new FormData();

    for (const key in data) {
      // @ts-ignore
      formData.append(key, data[key]);
    }

    updateProduct.mutate(
      // @ts-ignore
      formData,
      {
        onError(error, variables, context) {
          console.log(error.response);
        },
        onSuccess(data, variables, context) {
          toast({
            title: "Success",
            description: "Product has successfully updated",
          });
          queryClient.invalidateQueries({
            queryKey: ["getProducts", productId],
          });

          router.refresh();
        },
      },
    );
  };

  if (product.isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (updateProduct.isPending) {
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

export default EditProductProvider;
