import { NextPage } from "next";
import React from "react";
import Header from "./(resources)/components/Header";
import StoreCard from "./(resources)/components/StoreCard";
import StoreWrapper from "./(resources)/layout/StoreWrapper";

const stores = [
  { name: "Chubby sotre" },
  { name: "Red autumn" },
  { name: "Butterfly sight" },
];

const Stores: NextPage = () => {
  return (
    <div className="">
      <Header />
      <StoreWrapper className="pt-20 store-wrapper">
        {[...new Array(20)].map((_, i) => (
          <StoreCard key={i} />
        ))}
      </StoreWrapper>
    </div>
  );
};

export default Stores;
