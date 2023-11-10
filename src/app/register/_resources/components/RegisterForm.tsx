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
import useRegister from "@/core/hooks/useRegister";

const registerFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Incorrenct Email" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" }),
    confirmPassword: z.string(),
    firstname: z.string().min(1, { message: "First Name is required" }),
    lastname: z.string().min(1, { message: "Last Name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Specify that this error is about the confirmPassword field
  });

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  const register = useRegister();
  const methods = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormSchemaType> = (data) => {
    register.mutate(data, {
      onSuccess(data, variables, context) {
        console.log(data);
      },
      onError(error, variables, context) {
        console.log(error);
      },
    });
  };

  return (
    <div className="mt-4">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
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
          <FormField
            control={methods.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden sm:block">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden sm:block">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden sm:block">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
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

export default RegisterForm;
