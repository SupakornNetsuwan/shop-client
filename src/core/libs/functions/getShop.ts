import axios from "axios"
import auth from "../auth/auth";

export type GetShopResponseType = {
    _id: string;
    title: string;
    owner_id: string;
    account: string;
    edit_at: string;
    create_at: string;
}

const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_SHOP_SERVICE_URL environment variable was not defined",
    );
}

const getShop = async (shopId: string) => {
    const session = await auth()

    return await axios.get<GetShopResponseType>(`${url}/api/shops/${shopId}`, {
        headers: {
            "Authorization": `Bearer ${session?.user.token}`
        }
    })
}

export default getShop;