import axios from "axios"
import auth from "../auth/auth";

const url = process.env.NEXT_PUBLIC_USER_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_USER_SERVICE_URL environment variable was not defined",
    );
}

export type ResponseGetUserInfoType = {
    _id: string;
    email: string;
    password: string;
    has_shop: boolean;
    updated_at: number;
    created_at: number;
    info: {
        first_name: string;
        last_name: string;
        address: {
            province: string;
            tambon: string;
            amphur: string;
            postalcode: number;
            more: string;
        };
    }
}

const getUserInfo = async () => {
    const session = await auth();

    if (!session) {
        throw new Error("You are not authenticated")
    }

    return axios.get<ResponseGetUserInfoType>(`${url}/api/me`, {
        headers: {
            "Authorization": `Bearer ${session.user.token} `
        }
    })
}

export default getUserInfo