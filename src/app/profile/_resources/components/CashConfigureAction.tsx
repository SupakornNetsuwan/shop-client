"use client";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import React from "react";
import CashButton from "./CashButton";
import CashTopupForm from "./CashTopupForm";
import CashFormProvider from "../providers/CashFormProvider";

const CashConfigureAction = () => {
  return (
    <CustomDialog
      description="Toup your cash balance 💰"
      title="Cash Topup"
      trigger={(open) => <CashButton onClick={open}>120</CashButton>}
      body={
        <CashFormProvider>
          <CashTopupForm />
        </CashFormProvider>
      }
    />
  );
};

export default CashConfigureAction;
