import { NextPage } from "next";
import React from "react";
import Header from "./(resources)/components/Header";
import StoreCardWrapper from "./(resources)/layout/StoreCardWrapper";
import dynamic from "next/dynamic";
import { Skeleton } from "@/core/components/ui/skeleton";
const StoreCard = dynamic(() => import("./(resources)/components/StoreCard"), {
  loading: (loadingProps) => {
    return <Skeleton className="h-44 w-full" />;
  },
  ssr: false,
});

const stores = [
  { name: "Chubby sotre" },
  { name: "Red autumn" },
  { name: "Butterfly sight" },
];

const Stores: NextPage = () => {
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
