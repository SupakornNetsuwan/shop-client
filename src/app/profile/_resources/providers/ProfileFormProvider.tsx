"use client";
import { Form } from "@/core/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const profileFormSchema = z.object({
  email: z.string().email(),
});

export type ProfileFormSchemType = z.infer<typeof profileFormSchema>;

const ProfileFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const methods = useForm<ProfileFormSchemType>({
    defaultValues: { email: "64070108@kmitl.ac.th" },
    resolver: zodResolver(profileFormSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormSchemType> = (data) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};
export default ProfileFormProvider;
