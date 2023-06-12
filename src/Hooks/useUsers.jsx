import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


const useUsers=()=>{
    const {user,loading} = useAuth()
    const [axiosSecure]= useAxiosSecure()

    const {data: status="", isLoading: isStatusLoading} = useQuery({
        enabled:!loading,
        queryKey:['status',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [status,isStatusLoading]
}
export default useUsers