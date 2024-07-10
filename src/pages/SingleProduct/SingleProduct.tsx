const SingleProduct = () => {
  const product = {
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
  };
  return (
    <div className="my-10 mx-10">
      <h1 className="text-4xl text-lime-500 font-extrabold">
        Detail Info Of Your Product
      </h1>
      <div>Product Name: {product?.name}</div>
    </div>
  );
};

export default SingleProduct;
