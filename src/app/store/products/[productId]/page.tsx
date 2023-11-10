import React from "react";
import Product from "@/core/components/Product";
import tree2 from "public/stores/tree-2.png";
import CustomGoBack from "@/core/components/CustomGoBack";
import EditProductAction from "./_resources/components/EditProductAction";
import DeleteProductAction from "./_resources/components/DeleteProductAction";

const page = () => {
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
        <Product.Image src={tree2} alt="product image" className="" />
        <div className="mt-4 flex-1 md:mt-0">
          <Product.Name>
            <div>A product name</div>
          </Product.Name>
          <Product.Price>$20</Product.Price>
          <Product.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rep udiandae qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos! Labore, vel minus?
          </Product.Description>
          <Product.Seprator />

          <div className="flex-col space-y-2">
            <Product.Rating>4.5</Product.Rating>
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos! Labore, vel minus?"
              rating={4.5}
            />
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos! Labore, vel minus?"
              rating={3.5}
            />
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos!?"
              rating={5}
            />
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos! Labore, vel minus?"
              rating={4.5}
            />
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos! Labore, vel minus?"
              rating={3.5}
            />
            <Product.Review
              writer="Earth"
              comment="qui nesciunt laudantium maiores excepturi
            necessitatibus autem eos!?"
              rating={5}
            />
          </div>
        </div>
      </Product.Container>
    </>
  );
};

export default page;
