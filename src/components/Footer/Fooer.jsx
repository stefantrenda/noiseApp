import { Link } from "react-router-dom";
import X from "../../assets/Images/X.svg";
import Facebook from "../../assets/Images/Facebook.svg";
import Linkdin from "../../assets/Images/Linkdin.svg";
import arrowbg from "../../assets/Images/arrowBg.svg";

const Footer = () => {
  return (
    <div className=" flex w-[85%] px-8 mt-10 justify-between items-center  h-14  text-base z-10 ">
      <span className="text-[#D9D9D9] ">
        © 2024 Noise app. All rights reserved.
      </span>

      <div className="flex justify-end gap-4">
        <span className="text-lightGray font-normal">Help</span>
        <span className="text-lightGray font-normal">Contact</span>
        <img src={X} alt="X" />
        <img src={Linkdin} alt="Linkdin" />
        <img src={Facebook} alt="Facebook" />
      </div>
    </div>
  );
};

export default Footer;
