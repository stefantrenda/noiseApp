import settinngsIcon from "../../assets/Images/settings.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import playTimer from "../../assets/Images/playTimer.svg";
import pauseTimer from "../../assets/Images/pauseTimer.svg";

const BreakWork = ({ minutes, setMinutes, seconds, setSeconds }) => {

    const [play, setPlay] = useState(false);
    const [key, setKey] = useState(0);

    
    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const togglePlay = () => {
        setPlay(!play);
    };

    const restartTimer = () => {
        setPlay(false);
        setKey(prevKey => prevKey + 1);
        setMinutes(5); 
        setSeconds("00");  
    };

    const totalSeconds = minutes * 60 + Number(seconds);


    return (
        <>
            <CountdownCircleTimer
                key={key}
                size={140}
                isPlaying={play}
                duration={totalSeconds}
                colors={["#5790D4"]}
                strokeWidth={10}
                trailStrokeWidth={10}
                trailColor="#2F2C55"
                rotation="counterclockwise"
            >
                {({ remainingTime }) => (
                    <div className="relative flex justify-center items-center">
                        {play ? (
                            <span className="text-[#D9D9D9] text-[28px] font-medium">
                                {formatTime(remainingTime)}
                            </span>
                        ) : (
                            <div className="flex justify-center items-center relative ">
                                <input
                                    type="number"
                                    value={Math.floor(remainingTime / 60)}
                                    onChange={e => setMinutes(Number(e.target.value))}
                                    className="w-9 text-center bg-transparent border-none text-[#D9D9D9] text-[28px] font-medium"
                                    disabled={play}
                                />
                                <span className="fonnt-bold text-[26px]">:</span>
                                <input
                                    type="number"
                                    value={(remainingTime % 60).toString().padStart(2, '0')}
                                    onChange={e => {
                                        let newSeconds = Number(e.target.value);
                                        if (newSeconds > 59) newSeconds = 59; 
                                        if (newSeconds < 0) newSeconds = 0;   
                                        setSeconds(newSeconds.toString().padStart(2, '0'));
                                    }}
                                    className="w-9 text-center bg-transparent border-none text-[#D9D9D9] text-[28px] font-medium"
                                    disabled={play}
                                    max="59"
                                />
                            </div>
                        )}
                    </div>
                )}
            </CountdownCircleTimer>
            {!play ? (
                <div className="flex w-full justify-center">
                    <Button className={"bg-[#B3D457] rounded-full py-2.5 px-6 flex gap-2"} onClick={togglePlay}>
                        <img src={playTimer} alt="Play Timer" />
                        Start
                    </Button>
                </div>
            ) : (
                <div className="flex w-full justify-center gap-4">
                    <Button className={"bg-[#9B5454] hover:bg-[#9B5454] rounded-full py-2.5 px-6 flex gap-2 text-[#D9D9D9]"} onClick={togglePlay}>
                        <img src={pauseTimer} alt="Pause Timer" />
                        Pause
                    </Button>
                    <Button className="bg-[#2F2C55] hover:bg-[#2F2C55] rounded-full text-[#D9D9D9]" onClick={restartTimer}>
                        Restart timer
                    </Button>
                </div>
            )}
        </>
    )
}

export default BreakWork