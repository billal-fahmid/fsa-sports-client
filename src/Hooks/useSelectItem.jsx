import {
    useQuery,
  } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectItem=()=>{
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const token =localStorage.getItem('access-token')

    const { isLoading, data:selectedClasses=[],refetch } = useQuery({
        queryKey: ['selectedclasses' , user?.email],
           enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/selectedclasses?email=${user?.email}`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
      return [selectedClasses ,refetch, isLoading]
}

export default useSelectItem