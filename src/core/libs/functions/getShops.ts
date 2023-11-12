import axios from "axios"
import auth from "../auth/auth";

type GetShopResponseType = {
    _id: string,
    title: string,
    owner_id: string,
    account: string,
    edit_at: string,
    product: Product[],
    create_at: string
}

type Product = {
    _id: string,
    name: string,
    description: string,
    img_path: string,
    price: number,
    category: string,
    shop_id: string,
    rating: number,
    create_at: string,
    edit_at: string
}

const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_SHOP_SERVICE_URL environment variable was not defined",
    );
}

const getShops = async () => {
    const session = await auth()

    return await axios.get<GetShopResponseType[]>(`${url}/api/shops`, {
        headers: {
            "Authorization": `Bearer ${session?.user.token}`
        }
    })
}

export default getShops;