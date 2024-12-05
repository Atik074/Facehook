import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";

const PrivateRoute = () => {
  const { auth } = useAuth();

  return (
    <div>
      {auth?.authToken ? (
        <>
        <PostProvider>
          <ProfileProvider>
            <Header/>
            <main className="mx-auto  max-w-[1320px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
          </PostProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
