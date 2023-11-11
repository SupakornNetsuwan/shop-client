
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { RegisterFormSchemaType } from "@/app/register/_resources/components/RegisterForm";

type RegisterResponseType = {
  message: string;
  status: string;
  token: string;
};

type RegisterErrorResponseType = {
  message: string;
  status: string;
};

const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_USER_SERVICE_URL environment variable was not defined",
  );
}

const useRegister = () => {
  return useMutation<
    AxiosResponse<RegisterResponseType>,
    AxiosError<RegisterErrorResponseType>,
    RegisterFormSchemaType
  >({
    mutationFn: async (body) => {
      return axios.post(
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
    },
    mutationKey: ["register"],
  });
};

export default useRegister;
