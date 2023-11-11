import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
const useIncreaseItem = (productId:string, productName:string)=>{
    const url = process.env.NEXT_PUBLIC_CART_SERVICE_URL
    if(!url){
        throw new Error("no url founds")
    }
    const token = ""
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (newItem) =>
          axios
            .patch(`${url}/api/cart/add`, { 
                product:[
                    {
                        _id:productId,
                        name:productName
                    }
                ]
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
        mutationKey:["increaseItem"]
      })

}
export default useIncreaseItem