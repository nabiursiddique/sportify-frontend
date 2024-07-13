import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Spinner from "@/components/Spinner/Spinner";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const { data: products, isLoading } = useGetAllProductsQuery({ category });
  if (isLoading) {
    return <Spinner />;
  }
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

      {products?.data.length > 0 ? (
        <div className="m-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 my-10">
          {products?.data
            .filter((product: TProduct) => {
              return search === ""
                ? product
                : product?.name.toLowerCase().includes(search);
            })
            .map((product: TProduct, ind: number) => (
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
