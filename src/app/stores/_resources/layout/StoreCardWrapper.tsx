import { cn } from "@/core/libs/utils";
import React, { HTMLAttributes } from "react";

const StoreWrapper = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    children: React.ReactElement[] | React.ReactElement;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "grid grid-cols-1 gap-4 p-12 md:grid-cols-3 md:p-36 2xl:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
});

StoreWrapper.displayName = "StoreWrapper";

export default StoreWrapper;
