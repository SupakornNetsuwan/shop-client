import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios"
import axios from "axios"

interface Product {
    _id :string,
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
interface Shop {
    _id:string,
    title:string,
    owner_id:string,
    account:string,
    edit_at:string,
    product:Product[],
    create_at:string
}
export type ResponseGetShopType = Shop
export type ResponseGetShopsType = Shop[]
const useGetShops = () =>{
    const url = process.env.NEXT_PUBLIC_SHOP_SERVICE_URL
    if(!url){
        throw new Error("no url founds")
    }
    return useQuery<AxiosResponse<ResponseGetShopsType>, AxiosError<ResponseGetShopsType>>({
        queryKey: ["getShops"],
        queryFn: () => axios.get(`${url}/api/shops`),
      });
}
export default useGetShops