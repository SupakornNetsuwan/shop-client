import axios from "axios";
import auth from "../auth/auth";

export type ResponseGetShopByUserId = {
    _id: string
    title: string
    owner_id: string
    account: string
    edit_at: any
    create_at: string
}[]

const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_SHOP_SERVICE_URL environment variable was not defined",
    );
}

const getShopByUserId = async () => {
    const session = await auth();

    if (!session) {
        throw new Error("You are not authenticated")
    }

    return await axios.get<ResponseGetShopByUserId>(`${url}/api/shops/me`, {
        headers: {
            Authorization: `Bearer ${session.user.token} `,
        },
    });

}

export default getShopByUserId