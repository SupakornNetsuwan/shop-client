import React from "react";
import Order from "./_resources/components/Order";

const page = () => {
  return (
    <div className="flex flex-col space-y-4">
      {[...new Array(10).keys()].map((i) => {
        return (
          <Order.Wrapper key={i}>
            <Order.Item />
            <Order.Item />
          </Order.Wrapper>
        );
      })}
    </div>
  );
};

export default page;
