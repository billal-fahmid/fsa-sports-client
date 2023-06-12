import {
    useQuery,
  } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectItem=()=>{
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data:selectedClasses=[],refetch } = useQuery({
        queryKey: ['selectedclasses' , user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`http://localhost:5000/selectedclasses?email=${user?.email}`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
      return [selectedClasses ,refetch, isLoading]
}

export default useSelectItem