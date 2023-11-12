import React, { useLayoutEffect, useRef, useState } from "react";
import { Input } from "@/core/components/ui/input";
import { cn } from "@/core/libs/utils";
import { Star, StarHalf } from "lucide-react";
import useCreateCart from "@/core/hooks/navbar/Cart/useCreateCart";
import { Button } from "@/core/components/ui/button";
import type { GetProductsResponseType } from "@/core/hooks/products/useGetProductsByShop";
import { AspectRatio } from "@/core/components/ui/aspect-ratio";
import { CircleDollarSign } from "lucide-react";
import CustomDialog from "@/core/components/CustomDialog";
import Image from "next/image";
import { animate, stagger } from "motion";
import useGetCart from "@/core/hooks/navbar/Cart/useGetCart";
import { useQueryClient } from "@tanstack/react-query";
import useIncreaseCartItem from "@/core/hooks/navbar/Cart/useIncreaseCartItem";
import { useToast } from "@/core/components/ui/use-toast";

/* ----------------- Outer work part ----------------- */

/**
 * @description เป็นส่วนที่ห่อหุมทั้งหมด
 */

const Wrapper: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-[1000px] flex-col gap-4 lg:mt-24">
      {children}
    </div>
  );
};

/**
 * @description เป็นแถบเมนูสำหรับจัดการรายการสินค้า
 */

const Menu: React.FC<{ onSearchChange: (searchTerm: string) => void }> = ({
  onSearchChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="z-10 flex justify-end rounded-lg bg-slate-50 p-4">
      <Input
        placeholder="Search"
        onChange={handleSearchChange}
        className="w-64 text-slate-800"
      />
    </div>
  );
};

/* ----------------- Product directly associated ----------------- */

/**
 * @description เป็นส่วนที่ห่อหุ้มสินค้า
 */

const ProductContainer: React.FC<
  {
    children: React.ReactElement[] | React.ReactElement;
  } & React.ComponentPropsWithoutRef<"div">
> = ({ children, className, ...props }) => {
  useLayoutEffect(() => {
    try {
      animate(
        ".product-box",
        {
          y: ["20%", 0],
          opacity: [0, 2],
        },
        {
          easing: "ease-out",
          delay: stagger(0.1),
        },
      ).play();
    } catch (error) {}
  }, []);

  return (
    <div
      {...props}
      className={cn(
        "grid min-h-[20em] w-full grid-cols-1 content-start gap-4 md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * @description เป็นส่วนของสินค้า
 */

const Product: React.FC<{ product: GetProductsResponseType }> = ({
  product,
}) => {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();
  const createCart = useCreateCart();
  const getCart = useGetCart();
  const { toast } = useToast();
  const increaseCartItem = useIncreaseCartItem();

  const cartData = getCart.data?.data;

  const addCartHandler = () => {
    const isUseHasCart = Boolean(cartData);

    if (!isUseHasCart) {
      // ถ้าหากไม่มี Cart ให้ทำการสร้าง Cart ใหม่พร้อมกับ Item ตั้งต้น
      createCart.mutate([{ _id: product._id, name: product.name }], {
        onSuccess(data, variables, context) {
          console.log(data.data);
        },
        onError(error, variables, context) {
          console.log(error.response?.data);
        },
        onSettled(data, error, variables, context) {
          queryClient.invalidateQueries({ queryKey: ["getCart"] });
        },
      });

      toast({
        title: "Added to cart",
        description: "A new cart has picked for you!",
      });

      return;
    }

    // ถ้ามี Cart อยู่แล้ว

    increaseCartItem.mutate([{ _id: product._id, name: product.name }], {
      onSuccess(data, variables, context) {
        toast({
          title: "Picked more item x 1",
          description: "More item has picked for you!",
        });
      },
      onError(error, variables, context) {
        toast({
          title: "Error",
          description: error.response?.data.cause,
        });
      },
      onSettled(data, error, variables, context) {
        queryClient.invalidateQueries({ queryKey: ["getCart"] });
        queryClient.invalidateQueries({ queryKey: ["getCartTotal"] });
      },
    });
  };

  return (
    <CustomDialog
      description={product.category}
      title={product.name}
      trigger={(open) => (
        <div
          onClick={open}
          className="product-box cursor-pointer text-slate-800"
        >
          <div className="relative h-full rounded-lg border bg-white p-4 hover:shadow-md">
            <div className="absolute left-4 top-4 flex gap-1">
              <div className="aspect-square w-2.5 rounded-full bg-[#ea6a5e] hover:bg-[#db6156]" />
              <div className="aspect-square w-2.5 rounded-full bg-[#f2be4e] hover:bg-[#d6b24d]" />
              <div className="aspect-square w-2.5 rounded-full bg-[#6bc659] hover:bg-[#60b44f]" />
            </div>

            <AspectRatio
              className="mt-6 flex items-center justify-center rounded-lg border bg-slate-50 p-4 text-4xl"
              ratio={16 / 9}
            >
              <Image
                src={product.img_path}
                alt="Poruduct image"
                fill
                className="object-cover"
                priority
                sizes="30vw, 20vw"
              />
            </AspectRatio>
            <div className="flex items-start justify-between pt-4">
              <div>
                <div className="text-xl font-medium text-slate-800">
                  {product.name}
                </div>
                <div className="line-clamp-2 max-w-[80%] text-sm text-slate-500">
                  {product.description}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <h2 className="text-xl text-blue-500">{product.price}</h2>
                <CircleDollarSign className="text-slate-500" />
              </div>
            </div>
          </div>
        </div>
      )}
      body={
        <div>
          <div className="items-centetr flex justify-between">
            <div className="flex items-center space-x-1">
              <h3 className="text-3xl font-medium text-blue-500">
                {product.price}
              </h3>
              <CircleDollarSign className="text-slate-500" />
            </div>
            <Button onClick={addCartHandler}>Add to cart</Button>
          </div>
          <div className="mt-4 text-justify text-slate-500">
            {product.description}
          </div>
          <AspectRatio
            className="mt-6 flex items-center justify-center overflow-hidden rounded-lg border bg-slate-50 p-4 text-4xl  "
            ratio={16 / 9}
          >
            <Image
              src={product.img_path}
              alt="Poruduct image"
              fill
              className="object-cover"
              priority
              sizes="30vw, 20vw"
            />
          </AspectRatio>
          <div className="new-scrollbar mt-4 flex max-h-[20em] flex-col space-y-2 overflow-y-auto">
            {product.reviews.map((review, index) => (
              <div key={index} className="rounded-lg bg-slate-100/50 p-2">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-slate-800">
                    {review.owner_name}
                  </h3>
                  <div className="aspect-square w-1 rounded-full bg-slate-500" />
                  <div className="flex space-x-1">
                    <p className="text-xs text-slate-500">({review.rate})</p>
                    <div className="flex items-center">
                      {[...new Array(Math.floor(review.rate)).keys()].map(
                        (starNth) => (
                          <Star
                            key={starNth}
                            size={12}
                            className="text-amber-600"
                          />
                        ),
                      )}
                      {review.rate % 1 !== 0 && (
                        <StarHalf size={12} className="text-amber-600" />
                      )}
                    </div>
                  </div>
                </div>
                <p className="line-clamp-2 text-sm text-slate-600">
                  {review.content}
                </p>
              </div>
            ))}
            <div className="sticky bottom-0 flex w-full space-x-2 rounded-lg bg-slate-50 p-4">
              <Input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="outline-none focus:outline-none focus:ring-0"
              />
              <Button variant="outline">Send</Button>
            </div>
          </div>
        </div>
      }
    />
  );
};

const productElements = { Menu, Wrapper, Product, ProductContainer };
export default productElements;
