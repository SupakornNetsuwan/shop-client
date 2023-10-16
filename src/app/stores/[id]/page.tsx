"sever only";
import { NextPage } from "next";
import React from "react";
import ContentWrapper from "./layout/PageWrapper";
import tree1 from "../../../../public/stores/tree-1.png";
import Thumbnail from "./layout/Thumbnail";
import Product from "./layout/Product";
import ProductWrapper from "./layout/ProductWrapper";

type PageProps = {
  params: {
    id: string;
  };
};

const page: NextPage<PageProps> = async ({ params: { id } }) => {
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
        <ProductWrapper className="mt-8 grid grid-cols-6 [&>div]:bg-red-500 gap-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductWrapper>
      </ContentWrapper>
    </div>
  );
};

export default page;
