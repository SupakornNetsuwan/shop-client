import ContentWrapper from "@/core/layouts/ContentWrapper";
import React from "react";

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mt-12">
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default layout;
