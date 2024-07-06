import mailIcon from "../../assets/Images/mailIcon.svg";
import FB from "../../assets/Images/FB-Icon.svg";
import XIcon from "../../assets/Images/X-Icon.svg";
import EmailIcon from "../../assets/Images/Email-Icon.svg";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 w-[85%] lg:w-[60%] z-10">
      <div className="w-full mt-6 bg-deepPurple border border-darkBlue rounded-[25px]">
        <div className="flex items-center justify-between py-6 mx-auto w-[90%]">
          <div className="flex flex-col">
            <span className="text-limeGreen text-2xl">Contact</span>
          </div>
        </div>
        <hr className="border-b border-darkBlue" />
        <div className="flex flex-col gap-6 py-9 w-[91%] mx-auto">
          <div className="text-[#D9D9D9] font-semibold">Get in touch</div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col flex-1 gap-4">
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                We'd love to hear from you! If you have any questions,
                suggestions, or just want to say hello, feel free to reach out
                to us via email.
              </p>
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                Drop us a line and we'll get back to you as soon as possible.
              </p>
              <p className="text-[#FFFFFF] font-light text-[15px]  opacity-70">
                Your feedback is invaluable to us as we strive to improve and
                enhance your experience. We look forward to connecting with you!
              </p>
            </div>
            <div className="flex-1">
              <div className="flex flex-col flex-1 gap-4">
                <div className="w-full flex items-center bg-[#2F2C55] rounded-[8px] py-4">
                  <div className="w-1/5 flex justify-center items-center">
                    <img src={mailIcon} alt="mailIcon" />
                  </div>
                  <div className="w-4/5 flex flex-col justify-center items-start ">
                    <p className="text-sm text-[#D9D9D9]">Email address</p>
                    <p className="text-xs text-[#8480AF]">info@noiseapp.com</p>
                  </div>
                </div>
                <div className="w-full  flex items-center  rounded-[8px] gap-4">
                  <div className="flex justify-center items-center bg-[#2F2C55]  w-1/3 md:w-1/4  py-2 rounded-[100px]">
                    <img src={FB} alt="FB" />
                  </div>
                  <div className="flex justify-center items-center bg-[#2F2C55]  w-1/3 md:w-1/4  py-2 rounded-[100px]">
                    <img src={XIcon} alt="XIcon" />
                  </div>
                  <div className="flex justify-center items-center bg-[#2F2C55]  w-1/3 md:w-1/4  py-2 rounded-[100px]">
                    <img src={EmailIcon} alt="EmailIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
