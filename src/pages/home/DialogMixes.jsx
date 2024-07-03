import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import playIcon from "../../assets/Images/Play.svg";
import pauseIcon from "../../assets/Images/Pause.svg";
import shareIcon from "../../assets/Images/share.svg";

const DialogMixes = ({
  savedMixes,
  currentlyPlayingMixId,
  handlePlayPauseClick,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium ml-auto bg-transparent hover:bg-transparent px-2 py-0">
          <div className="flex justify-end w-full text-base gap-2 text-lightGray">
            <p>Show all</p>
            <MoveUpRight />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="border-b border-[#373463]">
          <DialogTitle className="py-3 px-2">
            <div className="flex flex-col">
              <span className="text-limeGreen text-2xl">My mixes</span>
              <span className="text-lightGray text-base">
                Craft soundscapes matching your mood
              </span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 p-7 ">
            <div className=" grid flex-1 gap-2 w-full max-h-[70vh] overflow-y-auto max-h-scrollable">
              {savedMixes?.map((mix) => (
                <div
                  key={mix.id}
                  className={`flex w-full  rounded-tr-[8px] rounded-br-[8px] h-16 ${
                    currentlyPlayingMixId === mix.id
                      ? "bg-[#2F2C55]"
                      : "bg-[#201E38]"
                  }`}
                >
                  <div className="flex justify-evenly items-center w-2/3 border-l-[3px] border-[#D9EAAB]">
                    <div className="flex justify-center items-center w-1/3">
                      <img
                        src={
                          currentlyPlayingMixId === mix.id
                            ? pauseIcon
                            : playIcon
                        }
                        alt={
                          currentlyPlayingMixId === mix.id ? "Pause" : "Play"
                        }
                        className="w-9 h-9 cursor-pointer"
                        onClick={() => handlePlayPauseClick(mix.id)}
                      />
                    </div>
                    <div className="flex flex-col gap-1 py-2 w-2/3">
                      <p className="mb-0 text-lightGray text-sm">{mix.name}</p>
                      <p className="mb-0 text-[#8480AF] text-xs">
                        {mix.sounds.map((s) => s.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-end items-center pr-4">
                    <img src={shareIcon} alt="Share" className="w-9 h-9" />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogMixes;
