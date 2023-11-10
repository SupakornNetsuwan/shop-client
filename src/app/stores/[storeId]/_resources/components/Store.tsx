"use client";
import React from "react";
import Product from "../components/Product";

const Store = () => {
  return (
    <Product.Container>
      <Product.Menu />
      <Product.ProductContainer>
        <Product.Product />
        <Product.Product />
        <Product.Product />
        <Product.Product />
        <Product.Product />
        <Product.Product />
        <Product.Product />
      </Product.ProductContainer>
    </Product.Container>
  );
};

export default Store;
