import { Button } from "@/components/ui/button";

const SingleProduct = () => {
  const product = {
    id: 1,
    name: "Cricket Bat",
    category: "Cricket",
    stockQuantity: 10,
    brand: "Gray-Nicolls Powerbow",
    rating: 4.5,
    description:
      "The cricket bat is a quintessential tool in the sport of cricket, designed for striking the ball with precision and power. Crafted from high-quality willow wood, it features a flat blade with a slight curve for optimal performance. The handle, made of cane or rubber, ensures a comfortable and firm grip. Balanced for control and durability, the bat's weight and size vary to suit different playing styles. Whether you're defending or attacking, the cricket bat's design enhances your ability to score runs, making it an indispensable piece of equipment for players at all levels.",
    price: 99.99,
    image:
      "https://www.gray-nicolls.co.uk/cdn/shop/files/CAIA24English_20Willow_20Bats_20Gem_202.0_20Bat_20Spine_c7eb1bff-c4df-42f7-9e33-1f92efcbcd92.jpg?v=1697124213&width=2600",
  };
  return (
    <div className="my-10 mx-10">
      <div className="bg-lime-400 py-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product?.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-full px-2">
                  <Button
                    className="w-full bg-lime-700 hover:bg-lime-600"
                    size={"lg"}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white mb-2">
                {product?.name}
              </h2>
              <div className="mb-4 text-xl">
                <div className="mr-4">
                  <span className="font-bold text-white">Price: </span>
                  <span className="text-white"> {product?.price}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Brand: </span>
                  <span className="text-white"> {product?.brand}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Stock Quantity: </span>
                  <span className="text-white"> {product?.stockQuantity}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Category:</span>
                  <span className="text-white"> {product?.category}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Rating:</span>
                  <span className="text-white">{" " + product?.rating}</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-white">
                  Product Description:
                </span>
                <p className="text-white text-sm mt-2">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
