import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"
import axios from "axios"

export interface ResponseGetCart {
    _id: string;
    product?: (ProductEntity)[] | null;
    customer_id: string;
  }
  export interface ProductEntity {
    _id: string;
    name: string;
    amount: number;
  }
  

const useGetCart = () =>{
    const token =""
    const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL
    if(!url){
        throw new Error("no url founds")
    }
    return useQuery<AxiosResponse<ResponseGetCart>, AxiosError<ResponseGetCart>>({
        queryKey: ["getCart"],
        queryFn: () => axios.get(`${url}/api/carts/me`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }),
      });
}
export default useGetCart