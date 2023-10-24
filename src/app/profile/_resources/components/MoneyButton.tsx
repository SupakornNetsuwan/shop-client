import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@/core/components/ui/tooltip";
import { Button } from "@/core/components/ui/button";
import { CircleDollarSign } from "lucide-react";
import { cn } from "@/core/libs/utils";

const MoneyButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithRef<typeof Button>
>(({ className, children, ...props }, ref) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...props}
          ref={ref}
          className={cn(
            "gap-1 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-amber-500 hover:bg-amber-100",
            className,
          )}
        >
          <CircleDollarSign size={24} />
          <p className="font-medium">{children}</p>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-slate-500">View Wallet 💰</p>
        <TooltipArrow className="fill-white " />
      </TooltipContent>
    </Tooltip>
  );
});

MoneyButton.displayName = "MoneyButton";

export default MoneyButton;
