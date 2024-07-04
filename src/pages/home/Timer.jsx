import settinngsIcon from "../../assets/Images/settings.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Timer = () => {
  return (
    <div className="w-1/2 flex flex-col bg-deepPurple border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[85%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">Timer</span>
          <span className="text-lightGray">Stay focused on your tasks</span>
        </div>
        <img
          src={settinngsIcon}
          alt="settinngsIcon"
          className="cursor-pointer"
        />
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col items-center  gap-3 justify-start py-6 mx-auto w-[85%] h-[308px]">
        <Tabs defaultValue="work" className="w-2/3">
          <TabsList className='bg-[#2F2C55] rounded-full text-[#D9D9D9] flex gap-2.5 w-full'>
            <TabsTrigger className='bg-[#2F2C55] rounded-full w-full' value="work">Work</TabsTrigger>
            <TabsTrigger className='bg-[#2F2C55] rounded-full w-full' value="break">Break</TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="break">Change your break here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Timer;
