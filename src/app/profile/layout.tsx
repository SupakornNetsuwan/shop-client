import ContentWrapper from "@/core/layouts/ContentWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12">
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default layout;
