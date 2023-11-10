import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { RegisterFormSchemaType } from "@/app/register/_resources/components/RegisterForm";

const useRegister = () => {
  const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_USER_SERVICE_URL environment variable was not defined",
    );
  }

  return useMutation<{ name: string }, Error, RegisterFormSchemaType>({
    mutationFn: async (body) => {
      const response = await axios.post(
        `${url}/api/register`,
        {
          email: body.email,
          password: body.password,
          has_shop: false,
          info: {
            first_name: body.firstname,
            last_name: body.lastname,
            address: {
              province: "",
              tambon: "",
              amphur: "",
              postalcode: 0,
              more: "",
            },
          },
        },
        {
          headers: {},
        },
      );

      return await response.data;
    },
    mutationKey: ["register"],
  });
};

export default useRegister;
