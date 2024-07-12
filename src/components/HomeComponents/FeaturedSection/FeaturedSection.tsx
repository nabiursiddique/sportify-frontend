import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Spinner from "@/components/Spinner/Spinner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Autoplay from "embla-carousel-autoplay";

const FeaturedSection = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  if (isLoading) {
    return <Spinner />;
  }
  const products = data?.data?.slice(0, 5);
  return (
    <div className="py-10 mx-3">
      <h1 className="text-5xl pb-10 pt-5 text-center font-extrabold text-lime-500">
        Latest Products
      </h1>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {products?.map((product: TProduct) => (
            <CarouselItem
              key={product._id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <FeaturedCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="lg:ml-[80px] ml-[50px] bg-lime-400" />
        <CarouselNext className="lg:mr-[80px] mr-[50px] bg-lime-400" />
      </Carousel>
    </div>
  );
};

export default FeaturedSection;
