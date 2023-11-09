"use client";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";
import CreateProductProvider from "../providers/CreateProductProvider";
import CreateProductForm from "./CreateProductForm";

const CreateProductAction = () => {
  return (
    <CustomDialog
      description="Add a new product to your store"
      title="Add product"
      trigger={(open) => (
        <Button onClick={open} variant="default" className="gap-2">
          <PlusCircle size={24} />
          <p>Add product</p>
        </Button>
      )}
      body={
        <CreateProductProvider>
          <CreateProductForm />
        </CreateProductProvider>
      }
    />
  );
};

export default CreateProductAction;
