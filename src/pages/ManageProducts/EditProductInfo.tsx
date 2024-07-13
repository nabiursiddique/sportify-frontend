/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Rating from "react-rating";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import Spinner from "@/components/Spinner/Spinner";
import { toast } from "sonner";

const EditProductInfo = () => {
  // getting the id from params
  const { id } = useParams();

  // getting the single product data
  const { data: product, isLoading, refetch } = useGetSingleProductQuery(id);
  const productData = product?.data;

  //  for updating the info into the db
  const [
    updateSingleProduct,
    { isSuccess, isLoading: updateLoading, isError },
  ] = useUpdateSingleProductMutation();

  // state for setting the previous rating and new rating
  const [ratingValue, setRatingValue] = useState(productData?.rating);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, category, stockQuantity, brand, image, price, description } =
      e.target.elements;

    const formData = {
      name: name.value,
      category: category.value,
      stockQuantity: stockQuantity.value,
      brand: brand.value,
      image: image.value,
      rating: ratingValue,
      price: price.value,
      description: description.value,
    };
    const updatedData = {
      id: id,
      data: formData,
    };
    updateSingleProduct(updatedData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully!");
    } else if (isError) {
      toast.error("Failed to update the product!");
    }
  }, [isSuccess, isError, refetch]);

  if (isLoading || updateLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Card>
        <CardHeader className="space-y-1 ml-10 ">
          <CardTitle className="sm:text-2xl lg:text-3xl text-lime-500 font-extrabold">
            Please Update Your Products Info Below
          </CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 border border-gray-300 rounded-md"
          >
            <div className="grid gap-2 mb-4">
              <label htmlFor="name" className="text-lime-500 font-extrabold">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                placeholder=" Sport Equipment "
                defaultValue={productData.name}
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <label htmlFor="name" className="text-lime-500 font-extrabold">
                Product Category
              </label>
              <input
                id="category"
                type="text"
                placeholder="Category"
                defaultValue={productData.category}
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <label htmlFor="name" className="text-lime-500 font-extrabold">
                Stock Quantity
              </label>
              <input
                id="stockQuantity"
                type="number"
                placeholder=" stock quantity "
                defaultValue={productData.stockQuantity}
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <div className="grid gap-2 mb-4">
                <label htmlFor="name" className="text-lime-500 font-extrabold">
                  Product Brand
                </label>
                <input
                  id="brand"
                  type="text"
                  placeholder="Brand"
                  defaultValue={productData.brand}
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <label htmlFor="name" className="text-lime-500 font-extrabold">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  defaultValue={productData.price}
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <label htmlFor="name" className="text-lime-500 font-extrabold">
                  Product Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  step="0.01"
                  placeholder="Image"
                  defaultValue={productData.image}
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="text-lime-500 font-extrabold block"
                >
                  Product Rating
                </label>
                {/* @ts-expect-error their is no type declaration file for react rating*/}
                <Rating
                  emptySymbol={<Star size={40} color="orange" />}
                  fullSymbol={<Star size={40} color="orange" fill="orange" />}
                  fractions={2}
                  initialRating={productData.rating}
                  stop={5}
                  onClick={(value: SetStateAction<number>) =>
                    setRatingValue(value)
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-lime-500 font-extrabold block"
                >
                  Product Description
                </label>
                <textarea
                  id="description"
                  className="resize-y rounded-md border border-gray-400 w-full lg:h-40 h-20 p-2 mt-2"
                  placeholder="Product Description"
                  defaultValue={productData.description}
                ></textarea>
              </div>
            </div>

            <Button
              type="submit"
              className="px-4 py-2  mt-10 w-full"
              variant={"custom"}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductInfo;
