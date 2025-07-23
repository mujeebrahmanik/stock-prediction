import React, { createContext } from 'react'
import { useState,useContext } from 'react'

// create context
const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const[isLoggedIn,setIsLoggedIn]=useState(
        // checking if localstorage has access token , !! this mark will return true if local storage has access token  else false
        !!localStorage.getItem('accessToken')
    )
  return (
    <>
    {/* providing context */}
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {/* children means child component */}
        {children}
    </AuthContext.Provider>
      
    </>
  )
}

export default AuthProvider
export {AuthContext};
