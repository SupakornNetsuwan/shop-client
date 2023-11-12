
export type GetCartResponseType = {
    _id: string;
    product: ProductInCartType[];
    customer_id: string;
};

export type ProductInCartType = {
    _id: string;
    name: string;
    description: string;
    img_path: string;
    price: number;
    category: string;
    shop_id: string;
    rating: number;
    create_at: string;
    edit_at: string;
    reviews: any;
    amount: number;
}

export type CartErrorResponseType = { message: string; cause: string }

export type CartPayloadType = { _id: string; name: string }[];