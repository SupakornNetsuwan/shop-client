"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/core/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { z } from "zod";
import { Button } from "@/core/components/ui/button";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().min(1, { message: "Please enter a username" }),
  password: z.string().min(1, { message: "Please enter a password" }),
});

export type LoginFormSchemaType = z.infer<typeof schema>;

const LoginForm = () => {
  const methods = useForm<LoginFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormSchemaType> = (data) => {
    signIn("credentials", { ...data });
  };

  return (
    <div className="mt-4">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden sm:block">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden sm:block">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
