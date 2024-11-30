import HomeIcon from "../../assets/icons/home.svg"
import NotificationIcon from "../../assets/icons/notification.svg"
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

const Header = () => {
  const {auth} = useAuth()
  const {state} = useProfile()
  const user = auth?.user ?? state?.user
  console.log("user" ,user)
    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
    <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
      {/* <!-- Logo --> */}
      <Link to="/">
        <img className="max-w-[100px] border-2 border-cyan-400 rounded-full lg:max-w-[55px]" src="https://shorturl.at/8FiPH" />
      </Link>

    {/* // <!-- nav links  --> */}

      <div className="flex items-center space-x-4">
        <Link to="/" className="btn-primary">
          <img src={HomeIcon} alt="Home" />
          Home
        </Link>
        <button className="icon-btn">
          <img src={NotificationIcon}    alt="Notification" />
        </button>
         <LogOut/>
        <Link to='/me' className="flex-center !ml-8 gap-3">
          <span className="text-lg font-medium lg:text-xl">{user?.firstName} </span>
          <img className="max-h-[32px] border border-white max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`} alt="" />
        </Link>
      </div>
   
    </div>
  </nav>
    );
};

export default Header;