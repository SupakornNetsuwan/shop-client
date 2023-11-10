import React from "react";
import { cn } from "@/core/libs/utils";

const ContentWrapper = React.forwardRef<
  React.ElementRef<"div">,
  {
    children: React.ReactNode | React.ReactNode[];
  } & React.ComponentPropsWithRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn("p-12 md:p-20 max-w-[1800px] mx-auto", className)}>
      {children}
    </div>
  );
});

ContentWrapper.displayName = "PageWrapper";

export default ContentWrapper;
