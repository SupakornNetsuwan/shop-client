import { useQuery } from "@tanstack/react-query";
import getUserInfo, {
  ResponseGetUserInfoType,
} from "../libs/functions/getUserInfo";
import axios from "axios";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_USER_SERVICE_URL environment variable was not defined",
  );
}

const useGetUserInfo = () => {
  const session = useSession();

  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: async () => {
      return await axios.get<ResponseGetUserInfoType>(`${url}/api/me`, {
        headers: {
          Authorization: `Bearer ${session.data?.user.token} `,
        },
      });
    },
    
  });
};

export default useGetUserInfo;
