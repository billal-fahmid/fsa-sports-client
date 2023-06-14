import React from 'react';
import useUsers from '../Hooks/useUsers';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';


const InstructorRoute = ({children}) => {

    const [status,isStatusLoading] =useUsers();
    const {user,loading} = useAuth()
  

    if(loading || isStatusLoading){
        return <span className="loading my-auto mx-auto loading-bars loading-lg"></span>
    }
    if(user && status === 'instructor'){
        return children
    }

    return <Navigate to='/' ></Navigate>
};

export default InstructorRoute;