"use client"; // Error components must be Client Components

import { Button } from "@/core/components/ui/button";
import ErrorLayout from "@/core/layouts/ErrorLayout";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorLayout error={error}>
      <Button onClick={() => reset()} variant="secondary">
        Try again
      </Button>
    </ErrorLayout>
  );
}
