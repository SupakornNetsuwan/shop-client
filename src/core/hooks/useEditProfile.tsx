import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { ProfileFormSchemType } from "@/app/profile/_resources/providers/ProfileFormProvider";
import { useSession } from "next-auth/react";

const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_USER_SERVICE_URL environment variable was not defined",
  );
}

const useEditProfile = () => {
  const session = useSession();

  return useMutation<AxiosResponse<null>, AxiosError, ProfileFormSchemType>({
    mutationFn: async (payload) => {
      return await axios.put(
        `${url}/api/info`,
        {
          info: {
            first_name: payload.firstname,
            last_name: payload.lastname,
            address: {
              province: payload.province,
              tambon: payload.district,
              amphur: payload.subDistrict,
              postalcode: payload.postNumber,
              more: payload.moreDetail,
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token || ""}`,
          },
        },
      );
    },
    mutationKey: ["editProfile"],
  });
};

export default useEditProfile;
