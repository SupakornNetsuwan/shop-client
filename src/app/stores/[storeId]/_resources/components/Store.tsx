"use client";
import React, {useState, useEffect} from "react";
import Product from "../components/Product";
import { ResponseGetShopType } from "@/core/hooks/stores/useGetStores";

export type  ProductDetailsType  ={
  _id: string;
  name: string;
  description: string;
  img_path: string;
  price: number;
  category: string;
  shop_id: string;
  rating: number;
  create_at: string;
  edit_at: string;
}
interface ProductsProps {
  products: ProductDetailsType[];
}


const Store:React.FC<ProductsProps> = ({products}) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductDetailsType[]>(products)
  const [search ,setSearch] = useState<string>("");
  useEffect(() => {
    console.log(search)
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);
  return (
    <Product.Container>
      <Product.Menu onSearchChange={setSearch} />
      <Product.ProductContainer>
      {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product.Product key={product._id} {...product} product={product}/>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Product.ProductContainer>
    </Product.Container>
  );
};

export default Store;
