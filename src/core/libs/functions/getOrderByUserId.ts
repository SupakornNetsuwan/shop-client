import axios from "axios"
import auth from "../auth/auth";

export type GetOrderByUserIdResponseType = {
    _id: string;
    customer_id: string;
    total_cost: number;
    products: ProductInOrder[];
}[]

export type ProductInOrder = {
    _id: string;
    name: string;
    description: string;
    img_path: string;
    price: number;
    category: string;
    shop_id: string;
    rating: number;
    order_status: string;
}

export type GetOrderByUserIdResponseErrorType = { message: string }

const getOrderByUserId = async () => {
    const session = await auth()

    const url = process.env.NEXT_PUBLIC_ORDER_SERVICE_URL;

    if (!url) {
        throw new Error(
            "NEXT_PUBLIC_ORDER_SERVICE_URL environment variable was not defined",
        );
    }

    return axios.get<GetOrderByUserIdResponseType>(
        `${url}/api/orders/users/${session?.user.id}`,
        {
            headers: {
                Authorization: `Bearer ${session?.user.token} `,
            },
        },
    )
}

export default getOrderByUserId