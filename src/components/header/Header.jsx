import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import arrowbg from "../../assets/Images/arrowBg.svg";

const Header = () => {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="flex w-[85%] px-8  mt-4 justify-between items-center bg-gradient-bg h-14 border border-darkBlue rounded-[100px] text-base z-10">
      <Link to="/" className="w-1/3 flex gap-3 items-center cursor-pointer">
        <img src={Logo} alt="Logo" />
        <span className="text-limeGreen">Noise app</span>
      </Link>

      <div className="w-1/3 flex justify-evenly items-center gap-5 px-14">
        <Link to="/" className={`flex flex-col gap-1 ${isActive('/') ? 'text-limeGreen' : 'text-lightGray'}`}>
          <span>Home</span>
          <hr className={`w-full h-0.5 ${isActive('/') ? 'bg-limeGreen' : 'opacity-0'}`} />
        </Link>
        <Link to="/about" className={`flex flex-col gap-1 ${isActive('/about') ? 'text-limeGreen' : 'text-lightGray'}`}>
          <span>About</span>
          <hr className={`w-full h-0.5 ${isActive('/about') ? 'bg-limeGreen' : 'opacity-0'}`} />
        </Link>
        <Link to="/contact" className={`flex flex-col gap-1 ${isActive('/contact') ? 'text-limeGreen' : 'text-lightGray'}`}>
          <span>Contact</span>
          <hr className={`w-full h-0.5 ${isActive('/contact') ? 'bg-limeGreen' : 'opacity-0'}`} />
        </Link>
      </div>

      <div className="w-1/3 flex justify-end items-center gap-2.5 cursor-pointer">
        <span className="text-lightGray font-medium">Change background</span>
        <img src={arrowbg} alt="arrow background" />
      </div>
    </div>
  );
}

export default Header;
