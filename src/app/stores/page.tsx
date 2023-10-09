import { NextPage } from "next";
import React from "react";
import Header from "./(resources)/components/Header";
import Store from "./(resources)/components/Store";

const stores = [
  { name: "Chubby sotre" },
  { name: "Red autumn" },
  { name: "Butterfly sight" },
];

const Stores: NextPage = () => {
  return (
    <div>
      <Header />
      <Store.Wrapper className="pt-20">
        {[...new Array(20)].map((_, i) => (
          <Store.Card key={i} />
        ))}
      </Store.Wrapper>
    </div>
  );
};

export default Stores;
