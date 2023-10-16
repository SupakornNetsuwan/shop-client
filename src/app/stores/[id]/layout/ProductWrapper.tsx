import React from "react";

const ProductWrapper: React.FC<
  {
    children: React.ReactElement[] | React.ReactElement;
  } & React.ComponentPropsWithoutRef<"div">
> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default ProductWrapper;
