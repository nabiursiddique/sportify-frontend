import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AllProducts = () => {
  const [search, setSearch] = useState("");
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
    {
      id: 4,
      name: "Product 4",
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
    <div className="mx-5 my-10">
      <hr />
      <h1 className="text-5xl py-5 text-center font-extrabold text-lime-500">
        All Products
      </h1>
      <hr />
      {/* Search products bar */}
      <form className="flex lg:justify-end justify-center lg:mr-6">
        <div className="form-control w-full max-w-xs mt-2">
          <Input
            className="border border-lime-500"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      </form>
      {products.length > 0 ? (
        <div className="m-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 my-10">
          {products
            .filter((product) => {
              return search === ""
                ? product
                : product?.name.toLowerCase().includes(search);
            })
            .map((product, ind) => (
              <FeaturedCard key={ind} product={product} />
            ))}
        </div>
      ) : (
        <div className="h-[500px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-5xl uppercase font-bold  bg-gradient-to-r from-red-600  to-red-400 text-transparent bg-clip-text">
              Sorry
            </h1>
            <h1 className="text-4xl mt-5 uppercase font-bold bg-gradient-to-r from-red-600  to-red-400 text-transparent bg-clip-text">
              {" "}
              currently no product is available!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
