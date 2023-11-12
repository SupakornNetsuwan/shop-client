"use client";
import React, { useState, useMemo } from "react";
import Product from "../components/Product";
import { GetShopResponseType } from "@/core/libs/functions/getShop";
import useGetProductsByShop from "@/core/hooks/useGetProductsByShop";
import Loading from "./Loading";

const Store: React.FC<{ shopData: GetShopResponseType }> = ({ shopData }) => {
  const { data, isLoading } = useGetProductsByShop(shopData._id);
  const productsData = useMemo(() => data?.data || [], [data?.data]);
  const [search, setSearch] = useState("");

  if (isLoading) return <Loading />;

  return (
    <Product.Wrapper>
      <Product.Menu onSearchChange={setSearch} />
      <Product.ProductContainer>
        {productsData
          .filter(
            (data) => data.name.toLowerCase().includes(search.toLowerCase()), // Filter product by name
          )
          .map((product) => (
            <Product.Product key={product._id} {...product} product={product} />
          ))}
      </Product.ProductContainer>
    </Product.Wrapper>
  );
};

export default Store;
