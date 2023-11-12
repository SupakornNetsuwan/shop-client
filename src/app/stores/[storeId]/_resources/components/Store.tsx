"use client";
import React, { useState, useMemo } from "react";
import Product from "../components/Product";
import { GetShopResponseType } from "@/core/libs/functions/getShop";
import useGetProductsByShop from "@/core/hooks/products/useGetProductsByShop";
import Loading from "./Loading";

const Store: React.FC<{ shopData: GetShopResponseType }> = ({ shopData }) => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetProductsByShop(shopData._id);
  const productsData = useMemo(() => data?.data || [], [data?.data]);

  const filteredProducts = useMemo(
    () =>
      productsData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, productsData],
  );

  if (isLoading) return <Loading />;

  return (
    <Product.Wrapper>
      <Product.Menu onSearchChange={setSearch} />
      <>
        {!filteredProducts.length && (
          <div className="mx-auto  my-24">
            <h2 className="text-center text-2xl font-medium text-slate-800">
              No products
            </h2>
            <p className="text-center text-slate-500">No products to view</p>
          </div>
        )}
        <Product.ProductContainer>
          {filteredProducts.map((product) => (
            <Product.Product key={product._id} {...product} product={product} />
          ))}
        </Product.ProductContainer>
      </>
    </Product.Wrapper>
  );
};

export default Store;
