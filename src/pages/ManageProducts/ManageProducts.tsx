/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateProductMutation } from "@/redux/api/baseApi";
import { Star } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import Rating from "react-rating";
import { toast } from "sonner";
import Spinner from "@/components/Spinner/Spinner";

const ManageProducts = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();
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

    createProduct(formData);

    //todo: isLoading and isSuccess is not working
    if (isLoading) {
      return <Spinner />;
    }

    if (isSuccess) {
      toast.success("Product Added Successfully");
    }
  };
  return (
    <div>
      <Card>
        <CardHeader className="space-y-1 ml-10 ">
          <CardTitle className="sm:text-2xl lg:text-3xl text-lime-500 font-extrabold">
            Please add Your Products Details Below
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
              <input
                id="name"
                type="text"
                placeholder=" Sport Equipment "
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <input
                id="category"
                type="text"
                placeholder="Category"
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <input
                id="stockQuantity"
                type="number"
                placeholder=" stock quantity "
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <div className="grid gap-2 mb-4">
                <input
                  id="brand"
                  type="text"
                  placeholder="Brand"
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <input
                  id="image"
                  type="text"
                  step="0.01"
                  placeholder="Image"
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* @ts-expect-error their is no type declaration file for react rating*/}
              <Rating
                emptySymbol={<Star size={40} color="orange" />}
                fullSymbol={<Star size={40} color="orange" fill="orange" />}
                fractions={2}
                initialRating={ratingValue}
                stop={5}
                onClick={(value: SetStateAction<number>) =>
                  setRatingValue(value)
                }
              />

              <textarea
                id="description"
                className="resize-y rounded-md border border-gray-400 w-full lg:h-40 h-20 p-2 mt-2"
                placeholder="Product Description"
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="px-4 py-2 w-full bg-lime-400 text-white  rounded-md hover:scale-95 transition-all mt-10 hover:bg-lime-600"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageProducts;
