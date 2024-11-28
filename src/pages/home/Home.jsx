import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
    const {auth} = useAuth()
    console.log("home => ", auth)
    return (
        <div >
          
               <Link to="/me">Go to Profile</Link>
         <h2 className="text-white">home page comming...</h2>
        </div>
    );
};

export default Home;