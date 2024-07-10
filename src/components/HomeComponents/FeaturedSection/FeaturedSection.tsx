import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedSection = () => {
  const products = [
    {
      id: 1,
      name: "Cricket Bat",
      category: "Cricket",
      stockQuantity: 10,
      brand: "Gray-Nicolls Powerbow",
      rating: 4.5,
      description: "This is a very premium bat.",
      price: 99.99,
      image:
        "https://www.gray-nicolls.co.uk/cdn/shop/files/CAIA24English_20Willow_20Bats_20Gem_202.0_20Bat_20Spine_c7eb1bff-c4df-42f7-9e33-1f92efcbcd92.jpg?v=1697124213&width=2600",
    },
    {
      id: 2,
      name: "Racket",
      category: "Badminton",
      stockQuantity: 10,
      brand: "Brand 1",
      rating: 4.5,
      description: "This is a product description.",
      price: 99.99,
      image:
        "https://www.gray-nicolls.co.uk/cdn/shop/files/CAIA24English_20Willow_20Bats_20Gem_202.0_20Bat_20Spine_c7eb1bff-c4df-42f7-9e33-1f92efcbcd92.jpg?v=1697124213&width=2600",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category ",
      stockQuantity: 10,
      brand: "Brand 1",
      rating: 4.5,
      description: "This is a product description.",
      price: 99.99,
      image:
        "https://www.gray-nicolls.co.uk/cdn/shop/files/CAIA24English_20Willow_20Bats_20Gem_202.0_20Bat_20Spine_c7eb1bff-c4df-42f7-9e33-1f92efcbcd92.jpg?v=1697124213&width=2600",
    },
  ];
  return (
    <div className="py-10 mx-3">
      <h1 className="text-5xl pb-10 pt-5 text-center font-extrabold">
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
          {products.map((product) => (
            <CarouselItem
              key={product.id}
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
