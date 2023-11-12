import React from "react";
import useActiveWallet from "@/core/hooks/wallet/useActiveWallet";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import { Check, Loader } from "lucide-react";

const ActiveWallet = () => {
  const queryClient = useQueryClient();
  const activeWallet = useActiveWallet();
  const session = useSession();

  const activeWalletHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const user_id = session.data?.user.id;
    if (!user_id) throw new Error("Cna't track user id");
    activeWallet.mutate(
      { user_id },
      {
        onSuccess(data, variables, context) {},
        onError(error, variables, context) {
          console.log(error.response?.data);
        },
        onSettled(data, error, variables, context) {
          queryClient.invalidateQueries({ queryKey: ["getWallet"] });
        },
      },
    );
  };

  return (
    <CustomDialog
      title="Active a wallet 💰"
      description="Wallet encourage you for topup your cash balance"
      trigger={(open) => <Button onClick={open}>Active wallet</Button>}
      body={
        <div>
          <ul className="mb-4 list-inside list-disc ">
            <li className="flex items-center space-x-2">
              <Check size={18} className="text-blue-500" />
              <p className="text-slate-500">Free</p>
            </li>
            <li className="flex items-center space-x-2">
              <Check size={18} className="text-blue-500" />
              <p className="text-slate-500">Safe</p>
            </li>
            <li className="flex items-center space-x-2">
              <Check size={18} className="text-blue-500" />
              <p className="text-slate-500">No service charge</p>
            </li>
          </ul>
          {activeWallet.isPending ? (
            <div className=" flex items-center justify-center self-stretch rounded-lg bg-slate-50 h-12 px-12">
              <Loader className="animate-spin" size={18} />
            </div>
          ) : (
            <Button onClick={activeWalletHandler}>Active wallet</Button>
          )}
        </div>
      }
    />
  );
};

export default ActiveWallet;
