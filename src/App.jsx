import {Routes , Route} from "react-router-dom"

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from  "./pages/profile/Profile"
import NotFound from "./pages/notFound/NotFound"
import PrivateRoute from "./routes/PrivateRoute"

function App() {

  return (
     <>
        <Routes>
         
              <Route element={<PrivateRoute/>}>
              <Route element={<Home/>} path="/" exact/>
             <Route element={<Profile/>} path="/me"/>
              </Route>

             <Route element={<Login/>} path="/login"/>
             <Route element={<Register/>} path="/register"/>
             <Route element={<NotFound/>} path="*"/>
        </Routes>
     </>
  )
}

export default App
