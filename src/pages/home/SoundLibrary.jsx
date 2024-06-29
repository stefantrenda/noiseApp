/* eslint-disable react/prop-types */
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import { soundGroups } from "./data";
import { Slider } from "@/components/ui/slider"
import { FaDroplet } from "react-icons/fa6";
import RainImg from "../../assets/Images/NatrualSounds/Rain.svg";
import ThunderImg from "../../assets/Images/NatrualSounds/Thunder.svg";
import WavesImg from "../../assets/Images/NatrualSounds/Waves.svg";
import WindImg from "../../assets/Images/NatrualSounds/Wind.svg";
import FireImg from "../../assets/Images/NatrualSounds/Fire.svg";
import { PiBirdFill } from "react-icons/pi";
import { GiCricket } from "react-icons/gi";
import { FaCloudRain, FaHome } from "react-icons/fa";
import { MdCabin } from "react-icons/md";
import { GiSplashyStream } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";
import { FaBugs } from "react-icons/fa6";
import { FaFrog } from "react-icons/fa";

import CoffeeShop from "../../assets/Images/Ambient/Coffee Shop.svg";
import iconCity from "../../assets/Images/Ambient/City Ambiance.svg";
import iconAmbiance from "../../assets/Images/Ambient/City Ambiance.svg";
import iconFanLow from "../../assets/Images/Ambient/Fan (Low).svg";
import iconFanHigh from "../../assets/Images/Ambient/Fan (High).svg";
import iconAirConditioning from "../../assets/Images/Ambient/Air Conditioning.svg";

import iconSingingBowl from "../../assets/Images/Relaxation/Singing Bowl.svg";
import whiteNoise from "../../assets/Images/Relaxation/White Noise.svg";
import iconМetal from "../../assets/Images/Relaxation/Metal Chimes.svg";
import iconBrownBoise from "../../assets/Images/Relaxation/Brown Noise.svg";
import { GiSoundWaves } from "react-icons/gi";
import iconRecordPlayer from "../../assets/Images/Relaxation/Record Player.svg";


const SoundLibrary = ({ handleSelectSound, selectedSounds, handleVolumeChange }) => {
console.log("SoundLibrary  selectedSounds", selectedSounds)

const isSelected = (soundName) => {
  return selectedSounds.some(sound => sound.name === soundName);
};

const getVolumeForSound = (soundName) => {
  const sound = selectedSounds.find(s => s.name === soundName);
  return sound ? sound.volume : 0.5;  // Default volume if not found
};
  const iconMapping = {
    FaDroplet: <img src={RainImg} alt="RainImg" />,
    iconThunder: <img src={ThunderImg} alt="ThunderImg" />,
    iconWaves: <img src={WavesImg} alt="WavesImg" />,
    iconWind: <img src={WindImg} alt="WindImg" />,
    iconFire: <img src={FireImg} alt="FireImg" />,
    iconBirds: <PiBirdFill className="w-11 h-11 text-[#D9D9D9]" />,
    iconCrickets: <GiCricket className="w-11 h-11 text-[#D9D9D9]" />,
    iconRainOnTrees: <FaCloudRain className="w-11 h-11 text-[#D9D9D9]" />,
    iconRainOnTin: <FaHome className="w-11 h-11 text-[#D9D9D9]" />,
    iconCabin: <MdCabin className="w-11 h-11 text-[#D9D9D9]" />,
    iconStream: <GiSplashyStream className="w-11 h-11 text-[#D9D9D9]" />,
    iconWaterfall: <GiWaterfall className="w-11 h-11 text-[#D9D9D9]" />,
    iconCicadas: <FaBugs className="w-11 h-11 text-[#D9D9D9]" />,
    iconFrogs: <FaFrog className="w-11 h-11 text-[#D9D9D9]" />,
    iconCoffeeShop: <img src={CoffeeShop} alt="CoffeeShop" />,
    iconCity: <img src={iconCity} alt="iconCity" />,
    iconAmbiance: <img src={iconAmbiance} alt="iconAmbiance" />,
    iconFanLow: <img src={iconFanLow} alt="iconAmbiance" />,
    iconFanHigh: <img src={iconFanHigh} alt="iconAmbiance" />,
    iconAirConditioning: <img src={iconAirConditioning} alt="iconAmbiance" />,
    iconSingingBowl: <img src={iconSingingBowl} alt="iconAmbiance" />,
    whiteNoise: <img src={whiteNoise} alt="iconAmbiance" />,
    iconМetal: <img src={iconМetal} alt="iconAmbiance" />,
    iconBrownBoise: <img src={iconBrownBoise} alt="iconBrownBoise" />,
    iconPinkNoise: <GiSoundWaves className="w-11 h-11 text-[#D9D9D9]" />,
    iconRecordPlayer: <img src={iconRecordPlayer} alt="iconBrownBoise" />,
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
        <button className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start">
          Save new mix
        </button>
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col gap-3 py-9 w-[91%] mx-auto">
        {soundGroups.map((group, idx) => (
          <div key={idx} className="flex w-full flex-col gap-2">
            <p className="text-lightGray ml-2">{group.categoryName}</p>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {group.sounds.map((sound, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                    <div className="p-2 min-h-[165px]  h-fit rounded-[20px] flex flex-col   items-center">
                      <Card
                        className={`rounded-[20px] cursor-pointer h-[125px] w-[125px] mb-3 ${selectedSounds.includes(sound.name) ? ' border-image-source-linear-gradient' : ''}`}
                        onClick={() => handleSelectSound(sound.name, sound.soundFileUrl)}
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
                    {selectedSounds.includes(sound.name) ? <Slider defaultValue={[33]} max={100} step={1} /> : null}
                    {isSelected(sound.name) && (
                        <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={getVolumeForSound(sound.name)} 
                        onChange={(e) => handleVolumeChange(sound.name, parseFloat(e.target.value))}
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
