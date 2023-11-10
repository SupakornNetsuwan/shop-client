"use client";
import { Form } from "@/core/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const profileFormSchema = z.object({
  firstname: z.string().min(1, { message: "First Name is required" }),
  lastname: z.string().min(1, { message: "Last Name is required" }),
  email: z
    .string()
    .email({ message: "Incorrenct Email" })
    .min(1, { message: "Email is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  district: z.string().min(1, { message: "Distruct is required" }),
  subDistrict: z.string().min(1, { message: "Sub District is required" }),
  postNumber: z
    .string()
    .refine((val) => val.length == 5, {
      message: "Postcode length must be 5",
    })
    .refine((val) => /^\d+$/.test(val), {
      message: "Postcode must be number",
    }),
  moreDetail: z.string(),
});

export type ProfileFormSchemType = z.infer<typeof profileFormSchema>;

const ProfileFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const methods = useForm<ProfileFormSchemType>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      province: "",
      district: "",
      subDistrict: "",
      postNumber: "",
      moreDetail: "",
    },
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
