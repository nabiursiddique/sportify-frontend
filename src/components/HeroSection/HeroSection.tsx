import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/Carousel_image-01.jpg";
import sliderImage2 from "@/assets/Carousel_image-02.jpg";

const HeroSection = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full lg:h-[100vh] h-[60vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sliderImage1})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 w-[60%] lg:top-40 top-20 lg:left-14 left-10 flex flex-col items-start lg:ml-7 rounded-lg">
                <h1 className="lg:text-4xl font-sans font-extrabold text-white">
                  World's Best <br />
                </h1>
                <h1 className="lg:text-7xl text-4xl font-sans font-extrabold text-white mt-2">
                  <span className="text-lime-400"> Sport Accessories </span>{" "}
                  With <span className="text-lime-400">10% </span>Discount
                  <br />
                </h1>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full lg:h-[100vh] h-[60vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sliderImage2})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 w-[60%] lg:top-40 top-20 lg:left-14 left-10 flex flex-col items-start lg:ml-7 rounded-lg">
                <h1 className="lg:text-4xl font-sans font-extrabold text-white">
                  Special Offers <br />
                </h1>
                <h1 className="lg:text-7xl text-4xl font-sans font-extrabold text-white mt-2">
                  <span className="text-lime-400"> 100 % Off </span> <br /> on
                  01 April
                  <br />
                </h1>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="lg:ml-[80px] ml-[50px]" />
        <CarouselNext className="lg:mr-[80px] mr-[50px]" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
