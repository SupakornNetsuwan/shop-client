
import { useMutation } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"
import axios from "axios"
const useCreateCart = (_id:string, productName:string) =>{
    const token =""
    const customer_id = ""
    const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL
    if(!url){
        throw new Error("no url founds")
    }
    const queryClient = new QueryClient()
    return useMutation({
        mutationFn: (newItem) =>
          axios
            .post(`${url}/api/cart/add`, { 
                product:[
                    {
                        _id:_id,
                        name:productName
                    }
                ],
                customer_id : customer_id
            },
            {
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }
            )
            .then((response) => response.data),
        onSuccess: (newPost) => {
          queryClient.invalidateQueries({queryKey:["getCart"]})
        },
        mutationKey:["cart"]
      })
}
export default useCreateCart