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
    <div className="">
      <FormField
        control={form.control}
        name="amount"
        render={({ field: { onChange, ...props } }) => (
          <FormItem>
            <FormLabel>จำนวนเงิน</FormLabel>
            <FormControl>
              <Input
                placeholder="shadcn"
                onChange={(e) =>
                  onChange(String(parseInt(e.target.value) || 0))
                }
                {...props}
              />
            </FormControl>
            <FormDescription>จำนวนเงินที่คุณต้องการเติม</FormDescription>
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
