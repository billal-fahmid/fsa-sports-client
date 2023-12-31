import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


const useLoadUsers=()=>{
    const {user,loading} = useAuth()
    const [axiosSecure]= useAxiosSecure()

    const {data: users=[], refetch,isLoading: isUsersLoading} = useQuery({
           enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:!loading,
        queryKey:['users',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users`)
            console.log(res.data)
            return res.data
        }
    })
    return [users,refetch,isUsersLoading]
}
export default useLoadUsers