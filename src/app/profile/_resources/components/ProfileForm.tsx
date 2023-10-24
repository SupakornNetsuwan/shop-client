"use client";
import React from "react";
import { Button } from "@/core/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { Input } from "@/core/components/ui/input";
import { useFormContext } from "react-hook-form";
import type { ProfileFormSchemType } from "../providers/ProfileFormProvider";

const ProfileForm = () => {
  const {
    control,
    formState: { isDirty },
  } = useFormContext<ProfileFormSchemType>();

  return (
    <div>
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="hidden sm:block">Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button className="mt-8" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default ProfileForm;
