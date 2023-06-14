import React from 'react';
import useUsers from '../Hooks/useUsers';
import useAuth from '../Hooks/useAuth';
import { useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const [status,isStatusLoading] =useUsers();
    const {user,loading} = useAuth()
   

    if(loading || isStatusLoading){
        return <span className="loading my-auto mx-auto loading-bars loading-lg"></span>
    }
    if(user && status === 'admin'){
        return children
    }

    return <Navigate to='/' ></Navigate>
};

export default AdminRoute;