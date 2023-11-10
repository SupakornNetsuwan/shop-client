import { NextPage } from "next";
import React from "react";
import Header from "./_resources/components/Header";
import StoreCardWrapper from "./_resources/layout/StoreCardWrapper";
import dynamic from "next/dynamic";
import { Skeleton } from "@/core/components/ui/skeleton";
const StoreCard = dynamic(() => import("./_resources/components/StoreCard"), {
  loading: (loadingProps) => {
    return <Skeleton className="h-44 w-full" />;
  },
  ssr: false,
});

const Stores: NextPage = async () => {
  return (
    <div className="">
      <Header />
      <StoreCardWrapper className="store-wrapper pt-20">
        {[...new Array(20)].map((_, i) => (
          <StoreCard key={i} />
        ))}
      </StoreCardWrapper>
    </div>
  );
};

export default Stores;
