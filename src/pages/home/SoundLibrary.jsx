/* eslint-disable react/prop-types */
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { iconMapping } from "./data";
import { soundGroups } from "./data";
import { Slider } from "@/components/ui/slider";
import { FaDroplet } from "react-icons/fa6";
import DialogSave from "./DialogSave";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";

const SoundLibrary = ({
  handleSelectSound,
  selectedSounds,
  handleVolumeChange,
  onSaveMix,
  showTooltip,
  setShowTooltip,
  setMixName,
  mixName,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let timeout;
    if (showTooltip) {
      timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [showTooltip, setShowTooltip]);

  const isSelected = (soundName) => {
    return selectedSounds.some((sound) => sound.name === soundName);
  };

  const getVolumeForSound = (soundName) => {
    const sound = selectedSounds.find((s) => s.name === soundName);
    return sound ? sound.volume : 0.5;
  };

  return (
    <div className=" w-full desktop-sm:w-2/3 mt-6 bg-deepPurple border border-darkBlue rounded-[25px]">
      <div className="flex flex-col tablet:flex-row items-center justify-between py-6 mx-auto w-[90%]">
        <div className="flex flex-col mb-3 tablet:mb-0">
          <span className="text-limeGreen text-2xl">Sound Library</span>
          <span className="text-lightGray">
            Find serenity and focus in calm, immersive soundscapes
          </span>
        </div>

        {selectedSounds.length === 2 ||
        selectedSounds.length === 3 ||
        selectedSounds.length === 1 ? (
          <DialogSave
            onSaveMix={onSaveMix}
            showTooltip={showTooltip}
            setShowTooltip={setShowTooltip}
            selectedSounds={selectedSounds}
          />
        ) : (
          <Popover open={showTooltip}>
            <PopoverTrigger asChild>
              <Button
                className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start h-10 tablet:h-11 w-full tablet:w-fit"
                onClick={onSaveMix}
              >
                Save new mix
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[225px] bg-[#8480AF]"
              side={isMobile ? "top" : "right"}
            >
              <div className="grid gap-4">
                <div className="space-y-2 ">
                  <p className="mb-0 text-[#18162A] text-base ">
                    Select 2 or 3 sounds, then click Save new mix button to
                    create your custom soundscape.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col gap-3 py-9 w-[95%] mobile:w-[91%]  mx-auto">
        <div className="hidden md:block">
          {soundGroups.map((group, idx) => (
            <div key={idx} className="flex w-full flex-col gap-2 ">
              <p className="text-lightGray ml-2">{group.categoryName}</p>
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {group.sounds.map((sound, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/4 lg:basis-1/5"
                    >
                      <div className="p-2 min-h-[165px]  h-fit rounded-[20px] flex flex-col   items-center">
                        <Card
                          className={`rounded-[20px] cursor-pointer h-[125px] w-[125px] mb-3  ${
                            isSelected(sound.name)
                              ? "border-image-source-linear-gradient"
                              : ""
                          }`}
                          onClick={() =>
                            handleSelectSound(sound.name, sound.soundFileUrl)
                          }
                        >
                          <CardContent className="flex flex-col aspect-square items-center justify-end bg-custom-gradient rounded-[20px]">
                            <div className="flex justify-center p-2.5">
                              {iconMapping[sound.icon] || <FaDroplet />}
                            </div>
                            <span className="text-sm text-nowrap text-lightGray font-semibold select-none">
                              {sound.name}
                            </span>
                          </CardContent>
                        </Card>
                        {isSelected(sound.name) && (
                          // <Slider
                          //   className="w-[80%]"
                          //   value={[getVolumeForSound(sound.name) * 100]}
                          //   onValueChange={(values) =>
                          //     handleVolumeChange(sound.name, values[0] / 100)
                          //   }
                          //   min={0}
                          //   max={100}
                          // />
                          <input
                          type="range"
                          className="w-[80%] custom-input-style"
                          value={getVolumeForSound(sound.name) * 100}
                          onChange={(e) =>
                            handleVolumeChange(sound.name, e.target.value / 100)
                          }
                          min={0}
                          max={100}
                        />
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          {soundGroups.map((group, idx) => (
            <>
              <div className="w-[95%] mobile:w-[90%] mx-auto">
                <p className="text-lightGray">{group.categoryName}</p>
              </div>
              <div key={idx} className="flex w-full flex-wrap">
                {group.sounds.map((sound, index) => (
                  <div className="p-2 min-h-[165px] w-1/2  h-fit rounded-[20px] flex flex-col   items-center">
                    <Card
                      className={`rounded-[20px] cursor-pointer h-[125px] w-[125px] mb-3  ${
                        isSelected(sound.name)
                          ? "border-image-source-linear-gradient"
                          : ""
                      }`}
                      onClick={() =>
                        handleSelectSound(sound.name, sound.soundFileUrl)
                      }
                    >
                      <CardContent className="flex flex-col aspect-square items-center justify-end bg-custom-gradient rounded-[20px]">
                        <div className="flex justify-center p-2.5">
                          {iconMapping[sound.icon] || <FaDroplet />}
                        </div>
                        <span className="text-sm text-nowrap text-lightGray font-semibold select-none">
                          {sound.name}
                        </span>
                      </CardContent>
                    </Card>
                    {isSelected(sound.name) && (
                      // <Slider
                      //   className="w-[80%]"
                      //   value={[getVolumeForSound(sound.name) * 100]}
                      //   onValueChange={(values) =>
                      //     handleVolumeChange(sound.name, values[0] / 100)
                      //   }
                      //   min={0}
                      //   max={100}
                      // />

                      <input
                      type="range"
                      className="w-[80%] custom-input-style"
                      value={getVolumeForSound(sound.name) * 100}
                      onChange={(e) =>
                        handleVolumeChange(sound.name, e.target.value / 100)
                      }
                      min={0}
                      max={100}
                    />
                    )}
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoundLibrary;
