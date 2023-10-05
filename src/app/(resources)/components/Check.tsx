"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/core/components/ui/button";

const Check = () => {
  const { data, status } = useSession();

  return (
    <div>
      <Button
        onClick={() =>
          signIn("credentials", {
            username: "Supakorn",
            password: "123",
          })
        }
      >
        Signin
      </Button>
      {status === "authenticated" && (
        <Button variant="destructive" onClick={() => signOut()}>
          Signout
        </Button>
      )}
    </div>
  );
};

export default Check;
