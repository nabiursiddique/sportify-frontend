/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateProductMutation } from "@/redux/api/baseApi";
import { Star } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Rating from "react-rating";
import { toast } from "sonner";

const AddProduct = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, category, stockQuantity, brand, image, price, description } =
      e.target.elements;

    const formData = {
      name: name.value,
      category: category.value.toLowerCase(),
      stockQuantity: stockQuantity.value,
      brand: brand.value,
      image: image.value,
      rating: ratingValue,
      price: price.value,
      description: description.value,
    };

    createProduct(formData);
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Adding Product");
    }

    if (isSuccess) {
      toast.dismiss();
      toast.success("Product Added Successfully");
    }
  }, [isLoading, isSuccess]);

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
              <label
                htmlFor="productName"
                className="text-lime-500 font-extrabold"
              >
                Product Name
              </label>
              <input
                id="name"
                type="text"
                placeholder=" Sport Equipment "
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <label
                htmlFor="productCategory"
                className="text-lime-500 font-extrabold"
              >
                Product Category
              </label>
              <input
                id="category"
                type="text"
                placeholder="Category"
                className="p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid gap-2 mb-4">
              <label
                htmlFor="stockQuantity"
                className="text-lime-500 font-extrabold"
              >
                Stock Quantity
              </label>
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
                <label htmlFor="brand" className="text-lime-500 font-extrabold">
                  Product Brand
                </label>
                <input
                  id="brand"
                  type="text"
                  placeholder="Brand"
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <label
                  htmlFor="productPrice"
                  className="text-lime-500 font-extrabold"
                >
                  Product Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Price"
                  className="p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid gap-2 mb-4">
                <label
                  htmlFor="productImageURL"
                  className="text-lime-500 font-extrabold"
                >
                  Product Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  step="0.01"
                  placeholder="Image"
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
                  initialRating={ratingValue}
                  stop={5}
                  onClick={(value: SetStateAction<number>) =>
                    setRatingValue(value)
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="productDescription"
                  className="text-lime-500 font-extrabold"
                >
                  Product Description
                </label>
                <textarea
                  id="description"
                  className="resize-y rounded-md border border-gray-400 w-full lg:h-40 h-20 p-2 mt-2"
                  placeholder="Product Description"
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

export default AddProduct;
