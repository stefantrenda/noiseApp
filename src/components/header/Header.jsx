import { Link } from "react-router-dom"
import Logo from "../../assets/Images/Logo.svg"
import arrowbg from "../../assets/Images/arrowBg.svg"

const Header = () => {
  return (
    <div className=" flex w-[85%] px-8 mt-4 justify-between items-center bg-gradient-bg h-14 border border-darkBlue rounded-[100px] text-base z-10">


      <Link to={'/'} className="w-1/3 flex gap-3 cursor-pointer">
        <img src={Logo} alt="Logo" />
        <span className="text-limeGreen">Noise app</span>
      </Link>


      <div className=" w-1/3 flex justify-evenly gap-5 px-14">
        <Link className="w-fit justify-center cursor-pointer flex gap-2.5">
          <div className="flex flex-col gap-1 text-limeGreen">
            <span>Home</span>
            <hr className="border-t-2 border-limeGreen" />
          </div>
        </Link>
        <Link className="w-fit justify-center cursor-pointer flex gap-2.5">
          <div className="flex flex-col gap-1 text-lightGray">
            <span>About</span>
            <hr className="border-t-2 border-limeGreen" />
          </div>
        </Link>
        <Link className="w-fit justify-center cursor-pointer flex gap-2.5">
          <div className="flex flex-col gap-1 text-lightGray">
            <span>Contact</span>
            <hr className="border-t-2 border-limeGreen" />
          </div>
        </Link>
      </div>


      <div className=" w-1/3 flex justify-end gap-2.5 cursor-pointer">
        <span className="text-lightGray font-medium">Change background</span>
        <img src={arrowbg} alt="arrowbg" />
      </div>
    </div>
  )
}

export default Header