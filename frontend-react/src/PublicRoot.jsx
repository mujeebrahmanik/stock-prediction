import React,{useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRoot = ({children}) => {
    const {isLoggedIn}=useContext(AuthContext)
    
    // if not logged in
  return !isLoggedIn?(
    children
  ):(
    <Navigate to='/' />
  )
    
}

export default PublicRoot
