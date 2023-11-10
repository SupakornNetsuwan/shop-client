"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/core/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { z } from "zod";
import { Button } from "@/core/components/ui/button";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/core/components/ui/use-toast";

const schema = z.object({
  email: z.string().min(1, { message: "Please enter a username" }),
  password: z.string().min(1, { message: "Please enter a password" }),
});

export type LoginFormSchemaType = z.infer<typeof schema>;

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const methods = useForm<LoginFormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: { email: "64070108@kmitl.ac.th", password: "earth" },
  });

  const onSubmit: SubmitHandler<LoginFormSchemaType> = async (data) => {
    try {
      const result: SignInResponse | undefined = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!result) throw new Error("No response from server");
      if (result.error) throw new Error(result.error);

      router.replace("/stores");
      toast({ title: `Welcome 👋`, description: "Have a good trip!" });
    } catch (error) {
      let message = "Unknown error";
      if (error instanceof Error) message = error.message;

      toast({
        title: `Login fail`,
        description: message,
        variant: "destructive",
      });
    }
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
