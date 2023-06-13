import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useClasses =()=>{
    // const [classes, setClasses] = useState([]);
    // const [loading , setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //             setLoading(false)
    //         })
    // }, [])
    // console.log(classes);
    // return [classes , loading]
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data:classes=[],refetch } = useQuery({
        queryKey: ['classes'],
      
        queryFn: async ()=>{
            const res = await axiosSecure(`/classes`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
    //   console.log(myClasses)
      return [classes ,refetch, isLoading]

}

export default useClasses