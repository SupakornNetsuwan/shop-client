import React from "react";

const loading = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 animate-pulse text-slate-800">
      Baking a cake...
    </div>
  );
};

export default loading;
