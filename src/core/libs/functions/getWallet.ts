import axios from "axios";
import auth from "../auth/auth";

const url = process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL;

export type GetWalletResponseType = {
    data: {
        wallet: {
            _id: string;
            user_id: string;
            info: {
                balance: number;
                transactions: string[];
            };
        };

    };
    message: string;
}

export type GetWalletErrorResponseType = { message: string }

if (!url) {
    throw new Error(
        "NEXT_PUBLIC_PAYMENT_SERVICE_URL environment variable was not defined",
    );
}


const getWallet = async () => {

    const session = await auth();
    return await axios.get<GetWalletResponseType>(
        `${url}/api/wallets`,
        {
            headers: {
                Authorization: `Bearer ${session?.user.token} `,
            },
        },
    );
}

export default getWallet