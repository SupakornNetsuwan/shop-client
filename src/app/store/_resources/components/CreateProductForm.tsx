import React from "react";
import { useFormContext } from "react-hook-form";
import type { CreateProductSchemaType } from "../providers/CreateProductProvider";
import { Input } from "@/core/components/ui/input";
import { Textarea } from "@/core/components/ui/textarea";
import { Button } from "@/core/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/core/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/components/ui/select";

const CreateProductForm = () => {
  const { control } = useFormContext<CreateProductSchemaType>();
  const categories: CreateProductSchemaType["category"][] = [
    "goods",
    "sticker",
    "digital-art",
  ];
  return (
    <div className="relative">
      <div className="flex flex-col space-y-4">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Product Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Product Name"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  className="resize-none sm:placeholder:opacity-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="category"
          render={({ field: { value, onChange, ...props } }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">
                Product Category
              </FormLabel>
              <FormControl>
                <Select defaultValue={value} onValueChange={onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="price"
          render={({ field: { onChange, ...props } }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="Price"
                  className="sm:placeholder:opacity-0"
                  onChange={(e) =>
                    onChange(String(parseInt(e.target.value) || 0))
                  }
                  {...props}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="img"
          render={({ field: { value, onChange, ...props } }) => (
            <FormItem>
              <FormLabel className="hidden sm:block">Image</FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => {
                    onChange(e.target.files?.length ? e.target.files[0] : null);
                  }}
                  className="cursor-pointer transition-colors file:rounded file:bg-slate-100 hover:bg-slate-50"
                  type="file"
                  accept="image/*"
                  {...props}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div>
        <Button className="mt-4" type="submit">
          Add
        </Button>
      </div>
    </div>
  );
};

export default CreateProductForm;
