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

const EditProducts = () => {
  const data = [
    {
      id: 1,
      name: "iphone",
      stock: 10,
      price: 1000,
      category: "electronics",
      quantity: 1,
    },
  ];
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
            {data
              ? data.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="">
                      <Button
                        variant="secondary"
                        color="primary"
                        className="mt-2"
                      >
                        Update Data
                      </Button>
                    </TableCell>
                    <TableCell className="">
                      <Button
                        variant="secondary"
                        color="secondary"
                        className="mt-2 ml-2"
                        // onClick={() => handelDelete(pet._id) }
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
