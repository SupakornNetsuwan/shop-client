import axios from "axios"
import auth from "../auth/auth";

export type GetProductResponseType = {
    _id: string
    name: string
    description: string
    img_path: string
    price: number
    category: string
    shop_id: string
    rating: number
    create_at: string
    edit_at: string
    reviews: {
        content: string
        rate: number
        owner_name: string
        anonymous: boolean
    }[]
}

const url = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_PRODUCT_SERVICE_URL environment variable was not defined",
    );
}

const getProduct = async (productId: string) => {
    const session = await auth()

    return await axios.get<GetProductResponseType>(`${url}/api/products/id/${productId}`, {
        headers: {
            "Authorization": `Bearer ${session?.user.token}`
        }
    })
}

export default getProduct;