import { TProduct } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const FeaturedCard = ({ product }: { product: TProduct }) => {
  return (
    <Card className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="p-2">
        <img
          src={product?.image}
          className="h-[350px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
          alt={product?.name}
        />
      </CardHeader>
      <CardContent className="grid p-4">
        <p className="text-xl text-lime-400 font-bold">{product?.name}</p>
        <CardTitle className="mt-2 text-3xl  font-extrabold">
          {product?.name}
        </CardTitle>
        <p className="text-lg mt-4 ">{product?.description}</p>
        <p>Category: {product?.category}</p>
        <p>Brand: {product?.brand}</p>
        <p>Stock Quantity: {product?.stockQuantity}</p>
        <p>Rating: {product?.rating}</p>
        <p>Price: {product?.price}</p>
      </CardContent>
      <CardFooter className="p-4 border-t border-gray-700">
        <Button className="w-full" variant="secondary">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;
