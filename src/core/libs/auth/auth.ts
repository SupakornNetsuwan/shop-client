import authOption from "./authOption";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth";

/**
 * @description ใช้ในการตรวจสอบ User session ว่ามีการ login อยู่หรือไม่
 */

const auth = (...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) => {
    return getServerSession(authOption);
}

export default auth