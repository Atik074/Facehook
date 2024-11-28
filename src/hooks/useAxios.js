import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";
import axios from "axios";


export const useAxios =()=>{
    const {auth ,setAuth} = useAuth()

useEffect(()=>{
// add request for interceptors
   const requestIntercept =  api.interceptors.request.use(
        (config)=>{
         const authToken = auth?.authToken

         if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`
         }
         return config ;
        } ,
        (error)=>  Promise.reject(error)
    )

// response for interceptors
const responseIntercept = api.interceptors.response.use(
    (response)=>{
     
        return response ;

    } ,
    async (error)=>{
         const orginalRequest = error.config 

        if(error.response.status === 401 && !orginalRequest._retry){
            orginalRequest._retry = true
        
        try{
           const refreshToken = auth?.refreshToken

         const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token` ,{refreshToken})

         const {token} = response.data
         console.log("from hooks" ,token)
         setAuth({...auth, authToken: token})
          orginalRequest.headers.Authorization = `Bearer ${token}`
          return axios.post(orginalRequest)

        }catch (error) {
            throw new error;

          }

    }
      return Promise.reject(error)
        
    } 
)


    return ()=>{
          api.interceptors.request.eject(requestIntercept)
          api.interceptors.response.eject(responseIntercept)
    }

    },[auth.authToken])

    return {api}

}