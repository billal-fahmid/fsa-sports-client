import {useQuery,} from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useMyClasses=()=>{
    const {user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data:myClasses=[],refetch } = useQuery({
        queryKey: ['myclasses' , user?.email],
           enabled:!!user?.email && !!localStorage.getItem('access-token'),
        // enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/myclasses?email=${user?.email}`)
            console.log('from axios se' , res)
            return res.data
        },
        
      })
    //   console.log(myClasses)
      return [myClasses ,refetch, isLoading]
}

export default useMyClasses