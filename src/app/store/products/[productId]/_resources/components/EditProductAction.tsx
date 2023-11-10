"use client";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import { Settings } from "lucide-react";
import React from "react";
import EditProductProvider from "../providers/EditProductProvider";
import EditProductForm from "./EditProductForm";

const EditProductAction = () => {
  return (
    <CustomDialog
      description="Edit your product detail"
      title="Edit product detail"
      trigger={(open) => (
        <Button onClick={open} variant="outline" className="gap-2">
          <Settings size={24} />
          <span>Edit</span>
        </Button>
      )}
      body={
        <EditProductProvider>
          <EditProductForm />
        </EditProductProvider>
      }
    />
  );
};

export default EditProductAction;
