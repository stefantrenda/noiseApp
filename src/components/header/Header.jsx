import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/Logo.svg";
import arrowbg from "../../assets/Images/arrowBg.svg";

import { Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="flex w-[85%] px-8  mt-4 justify-between items-center bg-gradient-bg h-14 border border-darkBlue rounded-[100px] text-sm md:text-base z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden border-0 bg-transparent  hover:bg-transparent" >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col min-h-[90vh] gap-6 text-sm font-medium">
            <Link
              to="/"
              className="flex gap-3 items-center cursor-pointer"
            >
              <img src={Logo} alt="Logo" />
              <span className="text-limeGreen text-base">Noise app</span>
            </Link>

            <div className="flex flex-col gap-6 text-sm font-medium mt-3 mb-10">
              <Link
                to="/"
                className={`flex flex-col gap-1 ${
                  isActive("/") ? "text-limeGreen w-fit" : "text-lightGray"
                }`}
              >
                <span>Home</span>
                <hr
                  className={`w-full h-0.5 ${
                    isActive("/") ? "bg-limeGreen" : "opacity-0"
                  }`}
                />
              </Link>
              <Link
                to="/about"
                className={`flex flex-col gap-1 ${
                  isActive("/about") ? "text-limeGreen w-fit" : "text-lightGray"
                }`}
              >
                <span>About</span>
                <hr
                  className={`w-full h-0.5 ${
                    isActive("/about") ? "bg-limeGreen" : "opacity-0"
                  }`}
                />
              </Link>
              <Link
                to="/contact"
                className={`flex flex-col gap-1 ${
                  isActive("/contact")
                    ? "text-limeGreen w-fit"
                    : "text-lightGray"
                }`}
              >
                <span>Contact</span>
                <hr
                  className={`w-full h-0.5 ${
                    isActive("/contact") ? "bg-limeGreen" : "opacity-0"
                  }`}
                />
              </Link>
            </div>

            <div className=" mt-auto flex justify-start items-center gap-2.5 cursor-pointer">
              <span className="text-lightGray font-medium text-nowrap">
                Change background
              </span>
              <img src={arrowbg} alt="arrow background" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex w-full">
        <Link to="/" className="flex-1 flex gap-3 items-center cursor-pointer">
          <img src={Logo} alt="Logo" />
          <span className="text-limeGreen">Noise app</span>
        </Link>

        <div className="flex-1 flex justify-evenly items-center gap-5 px-14">
          <Link
            to="/"
            className={`flex flex-col gap-1 ${
              isActive("/") ? "text-limeGreen" : "text-lightGray"
            }`}
          >
            <span>Home</span>
            <hr
              className={`w-full h-0.5 ${
                isActive("/") ? "bg-limeGreen" : "opacity-0"
              }`}
            />
          </Link>
          <Link
            to="/about"
            className={`flex flex-col gap-1 ${
              isActive("/about") ? "text-limeGreen" : "text-lightGray"
            }`}
          >
            <span>About</span>
            <hr
              className={`w-full h-0.5 ${
                isActive("/about") ? "bg-limeGreen" : "opacity-0"
              }`}
            />
          </Link>
          <Link
            to="/contact"
            className={`flex flex-col gap-1 ${
              isActive("/contact") ? "text-limeGreen" : "text-lightGray"
            }`}
          >
            <span>Contact</span>
            <hr
              className={`w-full h-0.5 ${
                isActive("/contact") ? "bg-limeGreen" : "opacity-0"
              }`}
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-2.5 cursor-pointer">
          <span className="text-lightGray font-medium text-nowrap">
            Change background
          </span>
          <img src={arrowbg} alt="arrow background" />
        </div>
      </div>
    </div>
  );
};

export default Header;
