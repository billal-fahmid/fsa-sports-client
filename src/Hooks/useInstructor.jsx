import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor =()=>{
    const {loading,user} = useAuth()
    // const [axiosSecure] = useAxiosSecure();
    const {  data:instructors=[] } = useQuery({
        queryKey: ['classes'],
        //    enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:loading,
        queryFn: async ()=>{
            const res = await fetch('https://server-rouge-gamma.vercel.app/user/instructor')
            console.log('from axios se' , res)
            return res.json()
        },
        
      })
  
      return [instructors ]

}

export default useInstructor