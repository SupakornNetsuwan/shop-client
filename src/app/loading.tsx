import React from "react";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 animate-pulse text-slate-800">
      <Loader size={44} className="animate-spin" />
    </div>
  );
};

export default loading;
