import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const soundPlayer = ({data}) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <p className="text-lightGray ml-2 ">{data.categoryName}</p>
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
    )
}

export default soundPlayer