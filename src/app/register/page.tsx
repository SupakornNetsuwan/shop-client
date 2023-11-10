import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import Link from "next/link";
import RegisterForm from "./_resources/components/RegisterForm";

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center  bg-gradient-radial from-blue-200/60 via-white to-brand-primary/10 p-12">
      <Card className="w-full lg:w-[30em]">
        <CardHeader>
          <CardTitle className="font-medium">Welcome</CardTitle>
          <CardDescription>
            Ready to pucrchase some cool stuff ?
          </CardDescription>
          <div className="h-0.5 w-full rounded-full bg-slate-200" />
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p>
            Does not has an account?
            <Link
              href="/login"
              className="pl-1 text-blue-500 underline decoration-blue-500 decoration-1 underline-offset-1"
            >
              login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
