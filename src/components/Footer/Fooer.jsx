import { Link } from "react-router-dom";
import X from "../../assets/Images/X.svg";
import Facebook from "../../assets/Images/Facebook.svg";
import Linkdin from "../../assets/Images/Linkdin.svg";
import arrowbg from "../../assets/Images/arrowBg.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row w-[91%] px-8  justify-between items-center  min-h-14 py-3  text-base z-10 mt-auto">
      <span className="text-[#D9D9D9] text-center">
        © 2024 Noise app. All rights reserved.
      </span>

      <div className="flex justify-end gap-4">
        <span className="text-lightGray font-normal cursor-pointer">Help</span>
        <span className="text-lightGray font-normal cursor-pointer">Contact</span>
        <img src={X} alt="X cursor-pointer" />
        <img src={Linkdin} alt="Linkdin cursor-pointer" />
        <img src={Facebook} alt="Facebook cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
