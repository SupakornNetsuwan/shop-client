"sever only";
import { NextPage } from "next";
import React from "react";
import ContentWrapper from "../../../core/layouts/ContentWrapper";
import tree1 from "../../../../public/stores/tree-1.png";
import Thumbnail from "./_resources/components/Thumbnail";
import Store from "./_resources/components/Store";
import getShop from "@/core/libs/functions/getShop";

type PageProps = {
  params: {
    storeId: string;
  };
};

const page: NextPage<PageProps> = async ({ params: { storeId } }) => {
  const shopResponse = await getShop(storeId);
  const shopData = shopResponse.data;

  return (
    <div>
      <Thumbnail src={tree1} alt="tree1" fill={true} />
      <ContentWrapper className="relative -top-24 ">
        <div className="mx-auto w-full max-w-[1000px] ">
          <h1 className="relative inline text-5xl font-semibold text-slate-800 before:absolute before:bottom-2 before:block before:h-3 before:w-full before:bg-slate-300/50 md:text-7xl">
            {shopData.title}
          </h1>
          <h2 className="mt-8 text-lg text-slate-500 [text-wrap:balance;] md:text-xl">
            Valid Account : {shopData.account}
          </h2>
        </div>
        <Store shopData={shopData} />
      </ContentWrapper>
    </div>
  );
};

export default page;
