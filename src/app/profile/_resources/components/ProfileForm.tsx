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
import { Textarea } from "@/core/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import type { ProfileFormSchemType } from "../providers/ProfileFormProvider";

const ProfileForm = () => {
  const {
    control,
    formState: { isDirty },
  } = useFormContext<ProfileFormSchemType>();

  return (
    <div className="relative">
      <div className="flex flex-col space-y-4">
        <div className="flex gap-4">
          <FormField
            control={control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="hidden sm:block">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    className="sm:placeholder:opacity-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="hidden sm:block">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    className="sm:placeholder:opacity-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name="province"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Province</FormLabel>
              <FormControl>
                <Input
                  placeholder="Province"
                  className="sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">District</FormLabel>
              <FormControl>
                <Input
                  placeholder="District"
                  className="sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="subDistrict"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Sub District</FormLabel>
              <FormControl>
                <Input
                  placeholder="Sub District"
                  className="sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="postNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Post Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Post Number"
                  className="sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="moreDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">More Detail</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="More detail"
                  className="resize-none sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Button className="mt-4" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default ProfileForm;
