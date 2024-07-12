import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import renderStars from "@/helpers/renderStarts";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { addProductToCart } from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const SingleProduct = () => {
  const [currentStock, setCurrentStock] = useState(0);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  // setting the product quantity for reducing
  useEffect(() => {
    if (product) {
      setCurrentStock(product?.data?.stockQuantity);
    }
  }, [product]);

  if (isLoading) {
    return <Spinner />;
  }

  // Handling add to cart
  const handleAddToCart = () => {
    if (currentStock > 0) {
      dispatch(
        addProductToCart({
          id: id,
          name: product?.data.name,
          price: product?.data.price,
          quantity: 1,
          stockQuantity: product?.data.stockQuantity,
          image: product?.data.image,
        })
      );
      setCurrentStock(currentStock - 1);
      toast.success("Product added to cart");
    } else {
      toast.warning("Not enough stock");
    }
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
                  src={product?.data?.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-full px-2">
                  <Button
                    onClick={handleAddToCart}
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
                {product.data?.name}
              </h2>
              <div className="mb-4 text-xl">
                <div className="mr-4">
                  <span className="font-bold text-white">Price: </span>
                  <span className="text-white"> {product?.data?.price}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Brand: </span>
                  <span className="text-white"> {product?.data?.brand}</span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Stock Quantity: </span>
                  <span className="text-white">
                    {" "}
                    {product?.data?.stockQuantity}
                  </span>
                </div>
                <div className="mr-4">
                  <span className="font-bold text-white">Category:</span>
                  <span className="text-white"> {product?.data?.category}</span>
                </div>
                <div className="mr-4 flex gap-2 items-center">
                  <span className="font-bold text-white">Rating:</span>
                  <span className="text-white flex">
                    {renderStars(product?.data?.rating)}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-white">
                  Product Description:
                </span>
                <p className="text-white text-sm mt-2">
                  {product?.data?.description}
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
