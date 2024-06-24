import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const SoundLibrary = () => {
  return (
    <div className="w-full mt-6  bg-deepPurple  border border-darkBlue rounded-[25px]">
      <div className="flex items-center justify-between py-6 mx-auto w-[90%]">
        <div className="flex flex-col">
          <span className="text-limeGreen text-2xl">Sound library</span>
          <span className="text-lightGray">
            Find serenity and focus in calm, immersive soundscapes
          </span>
        </div>
        <button className="font-medium text-veryDeepPurple bg-lightGray rounded-[100px] py-2.5 px-9 self-start">
          Save new mix
        </button>
      </div>
      <hr className="border-b border-darkBlue" />
      <div className="flex flex-col gap-9  py-9  w-[91%] mx-auto">
        <div className="flex w-full flex-col gap-2">
          <p className="text-lightGray ml-2 ">Nature sounds</p>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="p-1 rounded-[20px] ">
                      <Card className="rounded-[20px] cursor-pointer">
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-custom-gradient rounded-[20px]">
                          <span className="text-3xl font-semibold">
                            {index + 1}
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
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-lightGray ml-2 ">Nature sounds</p>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="p-1 rounded-[20px] ">
                      <Card className="rounded-[20px] cursor-pointer">
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-custom-gradient rounded-[20px]">
                          <span className="text-3xl font-semibold">
                            {index + 1}
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
        </div>
        <div className="flex w-full flex-col gap-2">
          <p className="text-lightGray ml-2 ">Nature sounds</p>
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="p-1 rounded-[20px] ">
                      <Card className="rounded-[20px] cursor-pointer">
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-custom-gradient rounded-[20px]">
                          <span className="text-3xl font-semibold">
                            {index + 1}
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
        </div>
      </div>
    </div>
  );
};

export default SoundLibrary;
