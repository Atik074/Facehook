import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
    const {auth} = useAuth()
    

    return (
        <div>
             {
                auth?.user ? (
                    <main className="mx-auto  max-w-[1320px] ">
                        <div className="container">
                            <Outlet/>
                        </div>
                    </main>
                ) :
                (
                   <Navigate to="/login" />
                )
             }
        </div>
    );
};

export default PrivateRoute;