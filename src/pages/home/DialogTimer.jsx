import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "@/components/ui/button";
import settinngsIcon from "../../assets/Images/settings.svg";
import { Switch } from "@/components/ui/switch"


const DialogTimer = ({
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="font-medium ml-auto bg-transparent hover:bg-transparent px-2 py-0">
                    <div className="flex justify-end w-full text-base gap-2 text-lightGray">
                        <img src={settinngsIcon} alt="Settings Icon" className="cursor-pointer" />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader className="border-b border-[#373463]">
                    <DialogTitle className="py-4 ">
                        <div className="flex flex-col">
                            <span className="text-limeGreen text-2xl">Timer settings</span>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2 p-7 border-b border-[#373463]">
                    <div className="grid flex-1 gap-3 w-full max-h-[70vh] overflow-y-auto max-h-scrollable text-[#D9D9D9] text-[16px] ">
                        <span className="text-[18px] font-semibold" >Notifications</span>
                        <div className="flex justify-between w-full items-center">
                            <span >Subtle fade-out as timer ends</span>
                            <Switch />
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Alert after the session ends</span>
                            <Switch />
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Web notification after the session ends</span>
                            <Switch />
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Show timer on browser tab</span>
                            <Switch />
                        </div>
                       
                    </div>
                </div>
                <div className="flex items-center space-x-2 p-7">
                    <div className="grid flex-1 gap-3 w-full max-h-[70vh] overflow-y-auto max-h-scrollable text-[#D9D9D9] text-[16px] ">
                        
                        <div className="flex justify-between w-full items-center">
                        <span className="text-[18px] font-semibold" >Work in sessions</span>
                            <Switch />
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Work session duration</span>
                            <div className="flex justify-center items-center  bg-[#2F2C55] rounded-2xl w-20 h-6 py-0">
                                <input
                                    type="number"
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    value={"25"}
                                />
                                <span className="fonnt-bold text-[15px]">:</span>
                                <input
                                    type="number"
                                    value={"00"}
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    max="59"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Short break duration</span>
                            <div className="flex justify-center items-center  bg-[#2F2C55] rounded-2xl w-20 h-6 py-0">
                                <input
                                    type="number"
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    value={"05"}
                                />
                                <span className="fonnt-bold text-[15px]">:</span>
                                <input
                                    type="number"
                                    value={"00"}
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    max="59"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Long break duration</span>
                            <div className="flex justify-center items-center  bg-[#2F2C55] rounded-2xl w-20 h-6 py-0">
                                <input
                                    type="number"
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    value={"15"}
                                />
                                <span className="fonnt-bold text-[15px]">:</span>
                                <input
                                    type="number"
                                    value={"00"}
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    max="59"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Number of consecutive sessions</span>
                            <div className="flex justify-center items-center  bg-[#2F2C55] rounded-2xl w-20 h-6 py-0">
                                <input
                                    type="number"
                                    className="w-5 text-center bg-transparent border-none text-[#D9D9D9] text-[15px]"
                                    value={"4"}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <span >Automatically start next session</span>
                            <Switch />
                        </div>
                       
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogTimer;
