import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();
  const { api } = useAxios();

 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (error) {
      
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Posts profile data is fetched...</div>;
  }
  if (error) {
    return <div>Fetched posts Error...</div>;
  }

  return (
    <div>
      Wellcome , {user?.firstName}
      <p>{posts.length}</p>
    </div>
  );
};

export default Profile;
