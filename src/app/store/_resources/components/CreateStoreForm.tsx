"use client";
import React from "react";
import { Input } from "@/core/components/ui/input";
import { Button } from "@/core/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { useFormContext } from "react-hook-form";
import type { CreateShopSchemaType } from "../providers/CreateStoreProvider";

const CreateStoreForm = () => {
  const { control } = useFormContext<CreateShopSchemaType>();

  return (
    <div className="mx-auto flex max-w-[20em] flex-col space-y-6">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="hidden sm:block">Shop Title</FormLabel>
            <FormControl>
              <Input
                placeholder="Shop Title"
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
        name="account"
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            <FormLabel className="hidden sm:block">Shop Account</FormLabel>
            {!error && (
              <FormDescription>
                Your shop&apos;s bank account number
              </FormDescription>
            )}
            <FormControl>
              <Input
                placeholder="Account Number"
                className="sm:placeholder:opacity-0"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Create</Button>
    </div>
  );
};

export default CreateStoreForm;
