"sever only";
import { NextPage } from "next";
import React from "react";
import ContentWrapper from "../../../core/layouts/ContentWrapper";
import tree1 from "../../../../public/stores/tree-1.png";
import Thumbnail from "./_resources/components/Thumbnail";
import Store from "./_resources/components/Store";

type PageProps = {
  params: {
    storeId: string;
  };
};

const page: NextPage<PageProps> = async ({ params: { storeId } }) => {
  return (
    <div>
      <Thumbnail src={tree1} alt="tree1" fill={true} />
      <ContentWrapper className="relative z-20 -translate-y-24 md:pt-12">
        <h1 className="relative inline text-5xl font-semibold text-slate-800 before:absolute before:bottom-2 before:block before:h-3 before:w-full before:bg-slate-300/50 md:text-7xl">
          Butterfly sight
        </h1>
        <h2 className="mt-8 text-lg text-slate-500 [text-wrap:balance;] md:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia
          nisi consequatur, commodi laboriosam placeat itaque reiciendis
          doloremque deserunt blanditiis?
        </h2>
        <Store />
      </ContentWrapper>
    </div>
  );
};

export default page;
