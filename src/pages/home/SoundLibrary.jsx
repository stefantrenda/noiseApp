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

const SoundLibrary = ({
  handleSelectSound,
  selectedSounds,
  handleVolumeChange,
  onSaveMix,
  showTooltip,
  setShowTooltip,
}) => {
  const isSelected = (soundName) => {
    return selectedSounds.some((sound) => sound.name === soundName);
  };

  const getVolumeForSound = (soundName) => {
    const sound = selectedSounds.find((s) => s.name === soundName);
    return sound ? sound.volume : 0.5;
  };

  return (
    <div className="w-full mt-6 bg-deepPurple border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[90%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">Sound Library</span>
          <span className="text-lightGray">
            Find serenity and focus in calm, immersive soundscapes
          </span>
        </div>

         {/* <Popover open={showTooltip}>
        <PopoverTrigger asChild>
          <Button
            className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start h-11"
            onClick={onSaveMix}
          >
            Save new mix
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[225px] bg-[#8480AF]" side="right">
          <div className="grid gap-4">
            <div className="space-y-2 ">
              <p className="mb-0 text-[#18162A] text-base te">
                Select 2 or 3 sounds, then click Save new mix button to create
                your custom soundscape.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover> */}

        <DialogSave
          onSaveMix={onSaveMix}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          selectedSounds={selectedSounds}
        />
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col gap-3 py-9 w-[91%] mx-auto">
        {soundGroups.map((group, idx) => (
          <div key={idx} className="flex w-full flex-col gap-2">
            <p className="text-lightGray ml-2">{group.categoryName}</p>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {group.sounds.map((sound, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="p-2 min-h-[165px]  h-fit rounded-[20px] flex flex-col   items-center">
                      <Card
                        className={`rounded-[20px] cursor-pointer h-[125px] w-[125px] mb-3 ${
                          selectedSounds.includes(sound.name)
                            ? " border-image-source-linear-gradient"
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
                        <Slider
                          value={[getVolumeForSound(sound.name) * 100]}
                          onValueChange={(values) =>
                            handleVolumeChange(sound.name, values[0] / 100)
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
    </div>
  );
};

export default SoundLibrary;
