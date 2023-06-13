import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedClasses =()=>{
 
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data:approvedClasses=[],refetch } = useQuery({
        queryKey: ['approvedClasses'],
      
        queryFn: async ()=>{
            const res = await axiosSecure(`/approvedClasses`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
    //   console.log(myClasses)
      return [approvedClasses ,refetch, isLoading]

}

export default useApprovedClasses;