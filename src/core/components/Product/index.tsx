import NextImage from "next/image";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from "@/core/libs/utils";
import { Separator } from "../ui/separator";
import { Badge } from "@/core/components/ui/badge";
import { Star } from "lucide-react";
const Container: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return <div className="flex flex-col gap-x-4 md:flex-row">{children}</div>;
};

const Category: React.FC<React.ComponentPropsWithoutRef<typeof Badge>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Badge {...props} className={cn("", className)}>
      {children}
    </Badge>
  );
};

const Image: React.FC<React.ComponentPropsWithoutRef<typeof NextImage>> = ({
  className,
  ...props
}) => {
  return (
    <div className="w-full md:w-1/3">
      <AspectRatio
        ratio={16 / 9}
        className={cn("overflow-hidden rounded-lg", className)}
      >
        <NextImage {...props} fill={true} className="object-cover" />
      </AspectRatio>
    </div>
  );
};

const Name: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return (
    <h1 className="text-xl font-semibold text-slate-800 lg:text-4xl">
      {children}
    </h1>
  );
};

const Rating: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return (
    <h1 className="flex items-center space-x-1 text-slate-800">
      <div className="flex items-center gap-2">
        <p className="">Reviews & Rating</p>
        <div className="aspect-square w-1 rounded-full bg-slate-300" />
        <div className="inline-flex items-center gap-x-1">
          <span>{children}</span>
          <Star size={18} />
        </div>
      </div>
    </h1>
  );
};

const Price: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return (
    <div className="inline-block">
      <p className="my-2 text-xl font-semibold text-blue-500 lg:text-4xl">
        {children}
      </p>
    </div>
  );
};

const Review: React.FC<{
  writer: string;
  comment: string;
  rating: number;
}> = ({ writer, comment, rating }) => {
  return (
    <div className="flex flex-col rounded-md border border-transparent bg-slate-50 p-4 transition-all duration-150 hover:border-slate-300">
      <div className="flex gap-x-2 items-center">
        <h4 className="font-medium text-slate-800">{writer}</h4>
        <div className="w-px bg-slate-300 self-stretch"/>
        <p className="text-slate-500 text-sm">{rating}</p>
      </div>
      <p className="line-clamp-3 text-sm text-slate-500">{comment}</p>
    </div>
  );
};

const Description: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return (
    <div>
      <div className="my-8 max-w-[50em] text-slate-500 [text-wrap:balance;]">
        <p className="">{children}</p>
      </div>
    </div>
  );
};

const Seprator = () => {
  return (
    <Separator
      orientation="horizontal"
      className="my-2 bg-gradient-to-r from-slate-400 via-blue-200 to-transparent"
    />
  );
};

const Product = {
  Container,
  Category,
  Name,
  Image,
  Description,
  Seprator,
  Price,
  Rating,
  Review,
};

export default Product;
