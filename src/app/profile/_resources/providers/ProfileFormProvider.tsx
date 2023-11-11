"use client";
import { Form } from "@/core/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useEditProfile from "@/core/hooks/useEditProfile";
import useGetUserInfo from "@/core/hooks/useGetUserInfo";
import LoadingAnimation from "@/core/components/LoadingAnimation";
import { useRouter } from "next/navigation";
import { useToast } from "@/core/components/ui/use-toast";

const profileFormSchema = z.object({
  firstname: z.string().min(1, { message: "First Name is required" }),
  lastname: z.string().min(1, { message: "Last Name is required" }),
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
  const { toast } = useToast();
  const router = useRouter();
  const editProfile = useEditProfile();
  const userInfo = useGetUserInfo();
  const userData = useMemo(() => userInfo.data?.data, [userInfo.data]);
  const methods = useForm<ProfileFormSchemType>({
    values: {
      firstname: userData?.info.first_name || "",
      lastname: userData?.info.last_name || "",
      province: userData?.info.address.province || "",
      district: userData?.info.address.tambon || "",
      subDistrict: userData?.info.address.amphur || "",
      postNumber: userData?.info.address.postalcode.toString() || "",
      moreDetail: userData?.info.address.more || "",
    },
    resolver: zodResolver(profileFormSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormSchemType> = (data) => {
    console.log(data);
    editProfile.mutate(data, {
      onSuccess(successData, variables, context) {
        router.refresh();
        toast({
          title: "Success",
          description: "Profile has been updated",
        });
      },
      onError(error, variables, context) {
        console.log(error);
      },
    });
  };

  if (userInfo.isLoading)
    return (
      <div>
        <LoadingAnimation />
      </div>
    );

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};
export default ProfileFormProvider;
