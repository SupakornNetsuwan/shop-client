import axios from "axios";
import auth from "../auth/auth";

export type ProductsInShop = {
    _id: string
    name: string
    description: string
    img_path: string
    price: number
    category: string
    rating: number
    create_at: string
    edit_at: string
    shop_id: string
    reviews: any[]
}

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
    );
}

const getProductsByShop = async (shopId: string) => {
    const session = await auth()

    return axios.get<ProductsInShop[]>(`${url}/api/products/shopId/${shopId}`, {
        headers: {
            Authorization: `Bearer ${session?.user.token}`,
        },
    });
}

export default getProductsByShop;