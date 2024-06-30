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
import iconMetal from "../../assets/Images/Relaxation/Metal Chimes.svg";
import iconBrownBoise from "../../assets/Images/Relaxation/Brown Noise.svg";
import { GiSoundWaves } from "react-icons/gi";
import iconRecordPlayer from "../../assets/Images/Relaxation/Record Player.svg";

export const soundGroups = [
  {
    categoryName: "Nature Sounds",
    sounds: [
      { name: "Rain", soundFileUrl: "/sounds/rain.mp3", icon: "FaDroplet" },
      { name: "Thunder", soundFileUrl: "/sounds/thunder.mp3", icon: "iconThunder" },
      { name: "Waves", soundFileUrl: "/sounds/waves.mp3", icon: "iconWaves" },
      { name: "Wind", soundFileUrl: "/sounds/wind.mp3", icon: "iconWind" },
      { name: "Fire", soundFileUrl: "/sounds/fire.mp3", icon: "iconFire" },
      { name: "Birds", soundFileUrl: "/sounds/birds.mp3", icon: "iconBirds" },
      { name: "Crickets", soundFileUrl: "/sounds/crickets.mp3", icon: "iconCrickets" },
      { name: "Rain on Trees", soundFileUrl: "/sounds/rain-on-trees.mp3", icon: "iconRainOnTrees" },
      { name: "Rain on Tin Roof", soundFileUrl: "/sounds/rain-on-tin.mp3", icon: "iconRainOnTin" },
      { name: "Cabin", soundFileUrl: "/sounds/cabin.mp3", icon: "iconCabin" },
      { name: "Stream", soundFileUrl: "/sounds/stream.mp3", icon: "iconStream" },
      { name: "Waterfall", soundFileUrl: "/sounds/waterfall.mp3", icon: "iconWaterfall" },
      { name: "Cicadas", soundFileUrl: "/sounds/cicadas.mp3", icon: "iconCicadas" },
      { name: "Frogs", soundFileUrl: "/sounds/frogs.mp3", icon: "iconFrogs" },
    ],
  },
  {
    categoryName: "Ambient Environment",
    sounds: [
      { name: "Coffee Shop", soundFileUrl: "/sounds/coffee-shop.mp3", icon: "iconCoffeeShop" },
      { name: "City Ambiance", soundFileUrl: "/sounds/city.mp3", icon: "iconCity" },
      { name: "Fan (Low)", soundFileUrl: "/sounds/fan-low.mp3", icon: "iconFanLow" },
      { name: "Fan (High)", soundFileUrl: "/sounds/fan-high.mp3", icon: "iconFanHigh" },
      { name: "Air Conditioning", soundFileUrl: "/sounds/air-conditioning.mp3", icon: "iconAirConditioning" },
    ],
  },
  {
    categoryName: "Relaxation and Meditation",
    sounds: [
      { name: "Singing Bowl", soundFileUrl: "/sounds/singing-bowl.mp3", icon: "iconSingingBowl" },
      { name: "Metal Chimes", soundFileUrl: "/sounds/Metal Chimes.wav", icon: "iconMetal" },
      { name: "Brown Noise", soundFileUrl: "/sounds/Brown Noise.mp3", icon: "iconBrownBoise" },
      { name: "Pink Noise", soundFileUrl: "/sounds/Pink Noise.wav", icon: "iconPinkNoise" },
      { name: "Record Player", soundFileUrl: "/sounds/Record Player.wav", icon: "iconRecordPlayer" },
    ],
  },
];


export const iconMapping = {
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
  iconMetal: <img src={iconMetal} alt="iconAmbiance" />,
  iconBrownBoise: <img src={iconBrownBoise} alt="iconBrownBoise" />,
  iconPinkNoise: <GiSoundWaves className="w-11 h-11 text-[#D9D9D9]" />,
  iconRecordPlayer: <img src={iconRecordPlayer} alt="iconBrownBoise" />,
};