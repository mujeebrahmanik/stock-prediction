import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // for collecting errors
    const [errors,setErrors]=useState({})
    // for success message
    const [success,setSuccess]=useState(false)
    // for loading
    const [loading,setLoading]=useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        // set loading true
        setLoading(true)
        
        const userData={
            username,email,password
        }


        // to send data to backend
        try{
            // pass our backend respective url and data
           const response= await axios.post('http://127.0.0.1:8000/api/register/',userData)
        //    clearing errors after sucessfull register
           setErrors({})
        //    setting success message true
            setSuccess(true)
        }
        catch(error){
            setSuccess(false)
            setErrors(error.response.data)
            console.error('Registration Error :',error.response.data)

        }
        // if try or catch block work then finally will execute
        finally{
            setLoading(false)
        }

    }
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-light text-center bg-custom p-5 rounded">
                    <h4>Create New Account</h4>
                    <form action="" className='mt-3' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Username' className='form-control mb-3' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <div>{errors.username && <p className='text-danger mb-2'>{errors.username}</p>}</div>

                        <input type="email" placeholder='Enter Email' className='form-control mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <div>{errors.email && <p className='text-danger  mb-2'>{errors.email}</p>}</div>

                        <input type="password" placeholder='Enter Password' className='form-control mb-3' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div>{errors.password && <p className='text-danger  mb-2'>{errors.password}</p>}</div>


                        {loading?(
                            <button type="submit" className='d-block mx-auto btn btn-success' disabled><FontAwesomeIcon icon={faSpinner} />Please Wait...</button>

                        ):(
                            <button type="submit" className='d-block mx-auto btn btn-success'>Register</button>

                        )}

                    </form>
                    {success && <div className='alert alert-success mt-3 text-bold'>Registered Successfully</div>}

                </div>
            </div>
        </div>
      
    </>
  )
}

export default Register
