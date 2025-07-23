import React ,{useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

    // setting variable for useNavigate
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)

        const userData={username,password}

        try {
            const response=await axios.post('http://127.0.0.1:8000/api/token/',userData)

            // saving access and refresh token in local storage of browser
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)
            setError('')
            setIsLoggedIn(true)

            // navigate to homepage - the url of homepage is /
            navigate('/')
            

        } catch (error) {
            setError('Invalid Credentials')
            
            
        }finally{
            setLoading(false)
        }
        

    }
  return (
    <>

        <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-light text-center bg-custom p-5 rounded">
                            <h4>Login</h4>
                            <form action="" className='mt-3' onSubmit={handleSubmit}>
                                <input type="text" placeholder='Enter Username' className='form-control mb-3' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        
        
                                <input type="password" placeholder='Enter Password' className='form-control mb-3' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                                <div>{error && <h6 className='text-danger  mb-2'>{error}</h6>}</div>

        
        
                                {loading?(
                                    <button type="submit" className='d-block mx-auto btn btn-success' disabled><FontAwesomeIcon icon={faSpinner} />Logging in...</button>
        
                                ):(
                                    <button type="submit" className='d-block mx-auto btn btn-success'>Login</button>
        
                                )}
        
                            </form>
        
                        </div>
                    </div>
                </div>
      
    </>
  )
}

export default Login
