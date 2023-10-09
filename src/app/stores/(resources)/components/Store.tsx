import React, { HTMLAttributes } from "react";
import { cn } from "@/core/libs/utils";

const Card = React.forwardRef<
  React.ElementRef<"div">,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("h-40 w-full rounded-md bg-slate-100", className)}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const Wrapper = React.forwardRef<
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
        "grid grid-cols-3 gap-4 p-12 md:p-36 lg:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
});

Wrapper.displayName = "Wrapper";

const store = {
  Card,
  Wrapper,
};

export default store;
