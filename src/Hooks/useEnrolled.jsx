import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolled =()=>{
   const {user,loading} =useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data:enrolledClasses=[],refetch } = useQuery({
        queryKey: ['classes'],
           enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/enrolled/${user?.email}`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
  
      return [enrolledClasses ,refetch, isLoading]

}

export default useEnrolled