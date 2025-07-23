import React,{useEffect} from 'react'
import axiosInstance from '../../axiosinstance';

const Dashboard = () => {

    useEffect(()=>{
        const fetchProtectedData=async()=>{
            try {
                const response=await axiosInstance.get('/protected')
                console.log('success',response.data)

            } catch (error) {
                console.error('Error fetching protected data',error)
            }
        }

        fetchProtectedData()

    },[])
  return (
    <>

    <div className="container text-light">
        <h2>Dashboard</h2>
    </div>
      
    </>
  )
}

export default Dashboard
