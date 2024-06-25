import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { soundGroups } from "./data";
import rainImg from "../../assets/Images/NatrualSounds/Rain.svg";

const SoundLibrary = () => {
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
      <div className="flex flex-col gap-9 py-9 w-[91%] mx-auto">
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
                    <div className="p-1 rounded-[20px]">
                      <Card className="rounded-[20px] cursor-pointer">
                        <CardContent className="flex flex-col aspect-square items-center justify-end bg-custom-gradient rounded-[20px]">
                          <div className="flex justify-center p-2.5">
                            {" "}
                            <img src={rainImg} alt="Rain" />
                          </div>
                          <span className="text-sm text-lightGray font-semibold select-none">
                            {sound.name}
                          </span>
                        </CardContent>
                      </Card>
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
