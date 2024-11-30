import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import { actions } from "../../actions";
import ProfileInfo from "../../components/profile/ProfileInfo";
import MyPost from "../../components/profile/MyPost";

const Profile = () => {
   const {state,dispatch} = useProfile()
  const { auth } = useAuth();
  const { api } = useAxios();

  console.log("res" , state)
 

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
        try {
            const response = await api.get(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                    auth?.user?.id
                }`
            );
            if (response.status === 200) {
                dispatch({
                    type: actions.profile.DATA_FETCHED,
                    data: response.data,
                });
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: error.message,
            });
        }
    };

    fetchProfile();
}, []);

if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
}

  

  return (
    <div>
          <ProfileInfo/>
          <MyPost/>
    </div>
  );
};

export default Profile;
