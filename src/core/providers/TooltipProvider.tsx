import React from "react";
import { TooltipProvider as ShadTooltipProvider } from "../components/ui/tooltip";

const TooltipProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <ShadTooltipProvider delayDuration={150}>{children}</ShadTooltipProvider>;
};

export default TooltipProvider;
