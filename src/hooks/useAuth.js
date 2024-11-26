import { useContext ,useDeferredValue } from "react"
import { AuthContext } from "../context"

export const useAuth =()=>{
    const auth = useContext(AuthContext)
       useDeferredValue(auth , auth =>auth?.user  ? "user logged in" : "user Log out")
return useContext(AuthContext)

}

