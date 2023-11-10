"use client";
import CustomAlertDialog from "@/core/components/CustomAlertDialog";
import { Button } from "@/core/components/ui/button";
import React from "react";
import { Trash2 } from "lucide-react";

const DeleteProductAction = () => {
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
            console.log("Do something");
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
