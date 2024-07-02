/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

const DialogSave = ({
  onSaveMix,
  showTooltip,
  setShowTooltip,
  selectedSounds,
}) => {
  const [mixName, setMixName] = useState("");

  const handleSave = () => {
    if (mixName && selectedSounds.length >= 2 && selectedSounds.length <= 3) {
      onSaveMix(mixName);
      setMixName("");
    } else {
      setShowTooltip(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start h-11">
          Save new mix
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl h-[226px]">
        <DialogHeader className="border-b border-[#373463]  h-[64px]">
          <DialogTitle>Save mix</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2 p-6 ">
          <div className="grid flex-1 gap-2">
            <Input
              id="text"
              value={mixName}
              onChange={(e) => setMixName(e.target.value)}
              placeholder="Enter title"
              className="text-lightGray border brderder-[#979797] bg-transparent"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end pb-6 px-6">
          <DialogClose asChild>
            <Button
              className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start h-10 "
              onClick={handleSave}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSave;
