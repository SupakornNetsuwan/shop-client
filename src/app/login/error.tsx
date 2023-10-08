"use client"; // Error components must be Client Components
import { Button } from "@/core/components/ui/button";
import { useEffect } from "react";
import ErrorLayout from "@/core/layouts/ErrorLayout";

type ErrorPropsType = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<ErrorPropsType> = ({ error, reset }) => {
  return (
    <ErrorLayout error={error}>
      <Button onClick={() => reset()} variant="secondary">
        Try again
      </Button>
    </ErrorLayout>
  );
};

export default Error;
