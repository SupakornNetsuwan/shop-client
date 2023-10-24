import { NextPage } from "next";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card";
import LoginForm from "./_resources/components/LoginForm";
import Link from "next/link";
import { animate } from "motion";

const page: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center  bg-gradient-radial from-brand-primary/60 via-white to-brand-primary/10 p-12">
      <Card className="w-full lg:w-[30em]">
        <CardHeader>
          <CardTitle className="font-medium">Welcome back👋</CardTitle>
          <CardDescription>We hope you are getting good today.</CardDescription>
          <div className="h-0.5 w-full rounded-full bg-slate-200" />
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p>
            Does not has an account?
            <Link
              href="/register"
              className="pl-1 text-blue-500 underline decoration-blue-500 decoration-1 underline-offset-1"
            >
              register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
