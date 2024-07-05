import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import playTimer from "../../assets/Images/playTimer.svg";
import pauseTimer from "../../assets/Images/pauseTimer.svg";
import TimerWork from "./TiimerWork";
import BreakWork from "./BreakWork";
import DialogTimer from "./DialogTimer";

const Timer = () => {
  const [minutesWork, setMinutesWork] = useState(24);
  const [secondsWork, setSecondsWork] = useState("00");

  const [minutesBreak, setMinutesBreak] = useState(5);
  const [secondsBreak, setSecondsBreak] = useState("00");

  return (
    <div className="w-1/2 flex flex-col bg-deepPurple border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[85%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">Timer</span>
          <span className="text-lightGray">Stay focused on your tasks</span>
        </div>
        <DialogTimer
          minutesWork={minutesWork}
          setMinutesWork={setMinutesWork}
          secondsWork={secondsWork}
          setSecondsWork={setSecondsWork}
          minutesBreak={minutesBreak}
          setMinutesBreak={setMinutesBreak}
          secondsBreak={secondsBreak}
          setSecondsBreak={setSecondsBreak}
        />
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col items-center  justify-start pt-6 mx-auto w-[85%] h-[308px]">
        <Tabs defaultValue="work" className="w-2/3 flex flex-col gap-2">
          <TabsList className="bg-[#2F2C55] rounded-full text-[#D9D9D9] flex gap-2.5 w-full">
            <TabsTrigger
              className="bg-[#2F2C55] rounded-full w-full"
              value="work"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#2F2C55] rounded-full w-full"
              value="break"
            >
              Break
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="work"
            className="w-full flex flex-col gap-5 justify-center items-center"
          >
            <TimerWork
              minutes={minutesWork}
              setMinutes={setMinutesWork}
              seconds={secondsWork}
              setSeconds={setSecondsWork}
            />
          </TabsContent>
          <TabsContent
            value="break"
            className="w-full flex flex-col gap-5 justify-center items-center mt-0"
          >
            <BreakWork
              minutes={minutesBreak}
              setMinutes={setMinutesBreak}
              seconds={secondsBreak}
              setSeconds={setSecondsBreak}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Timer;
