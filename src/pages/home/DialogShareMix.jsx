import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import shareIcon from "../../assets/Images/share.svg";
import copyIcon from "../../assets/Images/copy.svg";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FB from "../../assets/Images/FB-Icon.svg";
import XIcon from "../../assets/Images/X-Icon.svg";
import EmailIcon from "../../assets/Images/Email-Icon.svg";

const DialogShareMix = ({ handleShareMix, mix, linkShare }) => {


    const handleFacebookShare = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkShare)}`;
        window.open(url, '_blank');
      };
    
      const handleTwitterShare = () => {
        const tweetText = encodeURIComponent("Check out this sound mix: " + linkShare);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(twitterUrl, '_blank');
      };
    
      const handleEmailShare = () => {
        const subject = encodeURIComponent("Check out this sound mix!");
        const body = encodeURIComponent(`I thought you might like this mix: ${linkShare}`);
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium ml-auto bg-transparent hover:bg-transparent px-2 py-0">
          <div className="flex justify-end w-full text-base gap-2 text-lightGray">
            <img
              src={shareIcon}
              alt="shareIcon"
              className="w-9 h-9"
              onClick={() => handleShareMix(mix)}
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="border-b border-[#373463]">
          <DialogTitle className="py-3 px-2">
            <div className="flex flex-col">
              <span className="text-[#D9D9D9] text-2xl">Share your mix</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-x-2 p-7 gap-6">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2.5">
              <p className="text-lg text-[#D9D9D9]">Copy the link</p>
              <Popover>
                <PopoverTrigger>
                  {" "}
                  <img
                    src={copyIcon}
                    alt="copyIcon"
                    className="cursor-pointer"
                  />
                </PopoverTrigger>
                <PopoverContent className=" w-fit bg-[#8480AF]" side="top">
                  <div className="grid gap-4">
                    <div className="space-y-2 ">
                      <p className="mb-0 text-[#18162A] text-base te">
                        Link copied!
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Input
              id="text"
              value={linkShare}
              readOnly
              className="border brderder-[#BFBCE1] text-[#D9D9D9] bg-[#8480AF] w-full"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2.5">
              <p className="text-lg text-[#D9D9D9]">Share via</p>
            </div>
            <div className="w-full flex items-center  rounded-[8px] gap-4">
              <div className="flex justify-center items-center bg-[#8480AF] px-9  py-1 rounded-[100px] cursor-pointer" onClick={handleFacebookShare}>
                <img src={FB} alt="FB" />
              </div>
              <div className="flex justify-center items-center bg-[#8480AF] px-9  py-1 rounded-[100px] cursor-pointer" onClick={handleTwitterShare}>
                <img src={XIcon} alt="XIcon" />
              </div>
              <div className="flex justify-center items-center bg-[#8480AF] px-9  py-1 rounded-[100px] cursor-pointer"  onClick={handleEmailShare}>
                <img src={EmailIcon} alt="EmailIcon" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogShareMix;
