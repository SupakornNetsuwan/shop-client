"use client";
import { Form } from "@/core/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/core/components/ui/use-toast";

const cashFormSchema = z.object({
  amount: z.string(),
});

export type CashFormSchemType = z.infer<typeof cashFormSchema>;

const CashFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const methods = useForm<CashFormSchemType>({
    defaultValues: {
      amount: "0",
    },
    resolver: zodResolver(cashFormSchema),
  });

  const onSubmit: SubmitHandler<CashFormSchemType> = (data) => {
    toast({
      title: "Success",
      description:"The balance has topped up",
    });
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};
export default CashFormProvider;
