"use client";
import CustomAlertDialog from "@/core/components/CustomAlertDialog";
import { Button } from "@/core/components/ui/button";
import React from "react";
import { Trash2 } from "lucide-react";
import useDeleteProduct from "@/core/hooks/products/useDeleteProduct";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/core/components/ui/use-toast";

const DeleteProductAction = () => {
  const { toast } = useToast();
  const delteProduct = useDeleteProduct();
  const router = useRouter();
  const { productId }: { productId: string } = useParams();

  return (
    <CustomAlertDialog
      title="Deletion confirm"
      description="You will not able to recover this product"
      trigger={(open) => (
        <Button onClick={open} variant="destructive" className="gap-2">
          <Trash2 size={22} />
          <span>Delete</span>
        </Button>
      )}
      close={(close) => (
        <Button variant="outline" onClick={close}>
          Close
        </Button>
      )}
      action={(close) => (
        <Button
          variant="destructive"
          onClick={() => {
            delteProduct.mutate(productId, {
              onSuccess() {
                toast({
                  title: "Deleted",
                  description: "Product deleted successfully",
                });
                router.push("/store/products");
              },
            });
            
            close();
          }}
        >
          Confirm
        </Button>
      )}
    />
  );
};

export default DeleteProductAction;
