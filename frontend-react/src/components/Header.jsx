import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
    const Navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLoggedIn(false)
        Navigate('/login')
    }
  return (
    <>
        <nav className='navbar container py-3 align-items-start'>
            <Link to="/" className='navbar-brand text-light'>Stock Prediction Portal</Link>


            <div>
                {isLoggedIn?(
                    <>
                    <Button text='Dashboard' class='btn-info font-bold' url="/dashboard" />
                    &nbsp;
                    <button className="btn btn-danger font-bold" onClick={handleLogout}>Logout</button>
                    </>
                    
                ):(
                    <>
                        <Button text='Login' class="btn-outline-info font-bold" url="/login"/>
                        &nbsp;
                        <Button text='Register' class="btn-info font-bold" url="/register"/>
                    </>
                )}
                
            </div>
        </nav>

        
    </>
  )
}

export default Header
