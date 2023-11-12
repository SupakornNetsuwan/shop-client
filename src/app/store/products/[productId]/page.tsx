import React from "react";
import Product from "@/core/components/Product";
import tree2 from "public/stores/tree-2.png";
import CustomGoBack from "@/core/components/CustomGoBack";
import EditProductAction from "./_resources/components/EditProductAction";
import DeleteProductAction from "./_resources/components/DeleteProductAction";
import { NextPage } from "next";
import getProduct from "@/core/libs/functions/getProduct";
import { CircleDollarSign } from "lucide-react";

type PageParams = { params: { productId: string } };

const page: NextPage<PageParams> = async (params) => {
  const product = await getProduct(params.params.productId);
  const productData = product.data;

  return (
    <>
      <div className="flex items-center justify-between">
        <CustomGoBack
          customName="Products"
          href="/store/products"
          className="m-0"
        />
        <div className="mb-4 flex  justify-start space-x-2 rounded bg-white">
          <EditProductAction />
          <DeleteProductAction />
        </div>
      </div>
      <Product.Container>
        <Product.Image draggable={false} src={productData.img_path} alt="product image" className="" />
        <div className="mt-4 flex-1 md:mt-0">
          <Product.Name>
            <div>{productData.name}</div>
          </Product.Name>
          <Product.Price>
            <span className="flex items-center space-x-2 rounded-lg bg-slate-50 px-4 py-2">
              <CircleDollarSign size={32} />
              {productData.price}
            </span>
          </Product.Price>
          <Product.Description>{productData.description}</Product.Description>
          <Product.Seprator />

          <div className="flex-col space-y-2">
            <Product.Rating>{productData.rating}</Product.Rating>
            {productData.reviews.map((review, index) => {
              return (
                <Product.Review
                  key={index}
                  writer={review.owner_name}
                  comment={review.content}
                  rating={review.rate}
                />
              );
            })}
          </div>
        </div>
      </Product.Container>
    </>
  );
};

export default page;
