import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const EditProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});
  const [deleteProduct, { isSuccess, isError }] = useDeleteProductMutation();

  if (isSuccess) {
    toast.success("Product Deleted Successfully");
  }

  if (isError) {
    toast.error("Product Delete Unsuccessful");
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="p-10">
        <CardHeader>
          <h1 className="text-3xl font-extrabold text-lime-500">
            {" "}
            All Products{" "}
          </h1>
        </CardHeader>
        <Table>
          <TableCaption> </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead> Name</TableHead>
              <TableHead> Update </TableHead>
              <TableHead> Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products
              ? products.data.map((product: TProduct) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-bold">{product.name}</TableCell>
                    <TableCell className="">
                      <Link
                        to={`/manage-products/edit-product-info/${product._id}`}
                      >
                        <Button
                          variant="custom"
                          color="primary"
                          className="mt-2"
                        >
                          Update Data
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="">
                      <Button
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-500 hover:bg-red-600 hover:scale-95 transition-all"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : "no thing found"}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EditProducts;
