import axios from "axios";

const baseURL=import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance=axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json',
    }
})



// request interceptors

axiosInstance.interceptors.request.use(
    function(config){
        const accessToken=localStorage.getItem('accessToken')

        // injecting accesstoken in the request
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },function(error){
        return Promise.reject(error)
    }
)


// response interceptors

axiosInstance.interceptors.response.use(
    // handle success response 
    function(response){
        return response
    },
    // handle failed response
    async function(error){
        const originalRequest=error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken=localStorage.getItem('refreshToken');
            try {
                // refreshing the token 
                const response= await axiosInstance.post('/token/refresh/',{refresh:refreshToken})
                // setting as access token
                localStorage.setItem('accessToken',response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            } catch (error) {
                // removing accessToken,refreshToken and sending user back to login page
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                


                
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance