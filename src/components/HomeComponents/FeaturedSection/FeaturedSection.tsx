import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      name: "Product 2",
      category: "Category ",
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
      <h1 className="text-5xl py-5 text-center font-extrabold">
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
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div key={product.id} className="p-1">
                <Card>
                  <div className=" lg:w-[290px] md:w-[100%] w-[90%]  h-[370.44px] flex flex-col">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=" h-1/2 rounded-md object-cover "
                    />
                    <div className="flex justify-between py-2">
                      <h2 className="text-2xl font-extrabold">
                        {product.name}
                      </h2>
                    </div>
                    <p className="text-lg mb-2">{product.description}</p>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-lg font-semibold">
                          Price: ${product.price}
                        </p>

                        <p className="text-lg font-semibold">
                          Stock: {product.stockQuantity}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">
                          Brand: {product.brand}
                        </p>
                        <p className="text-lg font-semibold">
                          category: {product.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </Card>
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
