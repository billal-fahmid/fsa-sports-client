import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useApprovedClasses =()=>{
  const {user,loading} = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    const { isLoading, data:approvedClasses=[],refetch } = useQuery({
        queryKey: ['approvedClasses'],
          //  enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:!loading,
        queryFn: async ()=>{
            const res = await fetch(`https://server-rouge-gamma.vercel.app/classes/approvedClasses`)
            console.log('from axios se' , res)
            return res.json()
        },
        
      })
    //   console.log(myClasses)
      return [approvedClasses ,refetch, isLoading]

}

export default useApprovedClasses;
