import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";

const AllProducts = () => {
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {products.map((product) => (
          <FeaturedCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
