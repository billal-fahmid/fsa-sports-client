import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolled =()=>{
   const {user} =useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data:enrolledClasses=[],refetch } = useQuery({
        queryKey: ['classes'],
      
        queryFn: async ()=>{
            const res = await axiosSecure(`/enrolled/${user?.email}`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
  
      return [enrolledClasses ,refetch, isLoading]

}

export default useEnrolled