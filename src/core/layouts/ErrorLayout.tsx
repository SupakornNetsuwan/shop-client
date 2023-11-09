import React, { useEffect, useMemo } from "react";

const ErrorLayout: React.FC<{
  children?: React.ReactNode;
  error: Error | string | Object | null;
}> = ({ children, error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const message = useMemo(() => {
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    if (typeof error === "object" && error !== null)
      return JSON.stringify(error);

    return "Unknown error";
  }, [error]);

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
      <h2 className="text-lg font-medium text-red-500">{message}</h2>
      {children}
    </div>
  );
};

export default ErrorLayout;
