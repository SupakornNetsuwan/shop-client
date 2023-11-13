import { Skeleton } from "@/core/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="mt-12 flex flex-col space-y-4">
      <Skeleton className="h-6 w-full bg-slate-100" />
      <Skeleton className="h-6 w-full bg-slate-100" />
      <Skeleton className="h-6 w-full bg-slate-100" />
      <Skeleton className="h-6 w-full bg-slate-100" />
      <Skeleton className="h-6 w-full bg-slate-100" />
      <div className="flex w-1/2 flex-col space-y-8">
        <Skeleton className="h-6 w-full bg-slate-100" />
        <Skeleton className="h-6 w-full bg-slate-100" />
        <Skeleton className="h-6 w-full bg-slate-100" />
      </div>
    </div>
  );
};

export default Loading;
