import React from "react";

const Base: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const Wrapper = {
  Base,
};

export default Wrapper;
