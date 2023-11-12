import React from "react";
import { Input } from "@/core/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import { useFormContext } from "react-hook-form";
import type { CashFormSchemType } from "../providers/CashFormProvider";
import { Button } from "@/core/components/ui/button";

const CashTopupForm = () => {
  const form = useFormContext<CashFormSchemType>();

  return (
    <div className="flex flex-col space-y-4">
      <FormField
        control={form.control}
        name="amount"
        render={({ field: { onChange, ...props } }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input
                placeholder="amount"
                onChange={(e) =>
                  onChange(String(parseInt(e.target.value) || 0))
                }
                {...props}
              />
            </FormControl>
            <FormDescription>The amount you need to top-up</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field: { ...props } }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Description" {...props} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button className="mt-4" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default CashTopupForm;
