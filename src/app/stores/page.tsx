import { NextPage } from "next";
import React, { useMemo } from "react";
import Header from "./_resources/components/Header";
import StoreCardWrapper from "./_resources/layout/StoreCardWrapper";
import dynamic from "next/dynamic";
import { Skeleton } from "@/core/components/ui/skeleton";
import getShops from "@/core/libs/functions/getShops";

const StoreCard = dynamic(() => import("./_resources/components/StoreCard"), {
  loading: (loadingProps) => {
    return <Skeleton className="h-44 w-full" />;
  },
  ssr: false,
});

const Stores: NextPage = async () => {
  const response = await getShops();
  const shops = response.data;

  return (
    <div>
      <Header />
      <StoreCardWrapper className="store-wrapper pt-20">
        {shops.map((shop) => (
          <StoreCard key={shop._id} shop={shop} />
        ))}
      </StoreCardWrapper>
    </div>
  );
};

export default Stores;
