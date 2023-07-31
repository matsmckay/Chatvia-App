import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user } = useContext(AuthContext)

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute

// Making a private route so that we will make this home page as private. I.e. Only authenticated users can visit this page
