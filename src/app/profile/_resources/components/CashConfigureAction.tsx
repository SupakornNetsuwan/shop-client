"use client";
import CustomDialog from "@/core/components/CustomDialog";
import React from "react";
import CashButton from "./CashButton";
import CashTopupForm from "./CashTopupForm";
import CashFormProvider from "../providers/CashFormProvider";
import useGetWallet from "@/core/hooks/wallet/useGetWallet";
import { Loader } from "lucide-react";
import ActiveWallet from "./ActiveWallet";

const CashConfigureAction = () => {
  const { data, isLoading, isError, error } = useGetWallet();
  const cash = data?.data.data.wallet.info.balance;

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center self-stretch rounded-lg bg-slate-50 px-12">
        <Loader className="animate-spin" size={18} />
      </div>
    );
  }

  if (isError) {
    console.log(error.response?.data);
    
    return <ActiveWallet />;
  }

  return (
    <CustomDialog
      description="Toup your cash balance 💰"
      title="Cash Topup"
      trigger={(open) => <CashButton onClick={open}>{cash}</CashButton>}
      body={
        <CashFormProvider>
          <CashTopupForm />
        </CashFormProvider>
      }
    />
  );
};

export default CashConfigureAction;
