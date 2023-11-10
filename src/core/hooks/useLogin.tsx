import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginFormSchemaType } from "@/app/login/_resources/components/LoginForm";

const useLogin = () => {
  return useMutation<
    AxiosResponse<{ message: string }>,
    AxiosError<{ message: string }>,
    LoginFormSchemaType
  >({
    mutationFn: async (payload) => {
      const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;
      
      if (!url) throw new Error("NEXT_PUBLIC_USER_SERVICE is not defined");

      return axios.post(url, {
        email: payload.email,
        password: payload.password,
      });
    },
  });
};

export default useLogin;
