
import { Navigate, useLocation } from 'react-router'

import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
// import Loader from '../Shared/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <div className='h-screen w-full'>
        <span className="loading my-auto mx-auto loading-bars loading-lg"></span>
    </div>

  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
