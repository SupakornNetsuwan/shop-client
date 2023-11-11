import { NextPage } from "next";
import React, {useMemo} from "react";
import Header from "./_resources/components/Header";
import StoreCardWrapper from "./_resources/layout/StoreCardWrapper";
import dynamic from "next/dynamic";
import { Skeleton } from "@/core/components/ui/skeleton";
import { ResponseGetShopsType } from "../api/shops/ShopsType.d";
const StoreCard = dynamic(() => import("./_resources/components/StoreCard"), {
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
async function getShops() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SHOP_SERVICE_URL}/api/shops`)
  return res.json()
}


const Stores: NextPage = async() => {

  const data = getShops()
  const shops:ResponseGetShopsType= await Promise.resolve(data)
  console.log(shops)


  return (
    <div className="">
      <Header />
      <StoreCardWrapper className="store-wrapper pt-20">
        {shops.map((shop) => (
          <StoreCard key={shop._id} shop={shop}/>
        ))}
      </StoreCardWrapper>
    </div>
  );
};

export default Stores;
