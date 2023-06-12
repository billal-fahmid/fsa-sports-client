import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


const useLoadUsers=()=>{
    const {user,loading} = useAuth()
    const [axiosSecure]= useAxiosSecure()

    const {data: users=[], isLoading: isUsersLoading} = useQuery({
        enabled:!loading,
        queryKey:['users',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users`)
            console.log(res.data)
            return res.data
        }
    })
    return [users,isUsersLoading]
}
export default useLoadUsers