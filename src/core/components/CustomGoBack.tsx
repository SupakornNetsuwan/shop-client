import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "../libs/utils";

const CustomGoBack = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithRef<typeof Link> & {
    customName?: string;
  }
>(({ href, className, customName, ...props }, ref) => {
  return (
    <Link
      href={href}
      {...props}
      ref={ref}
      className={cn(
        "mb-4 inline-flex items-center space-x-2 text-slate-500 transition-all hover:text-blue-500",
        className,
      )}
    >
      <ArrowLeft size={18} />
      <span>{customName || "Back"}</span>
    </Link>
  );
});

CustomGoBack.displayName = "CustomGoBack";

export default CustomGoBack;
