import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"
import { ResponseGetShopsType } from "@/app/api/shops/ShopsType.d"
import axios from "axios"

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