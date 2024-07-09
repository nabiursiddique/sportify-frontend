import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex justify-between items-center w-full">
      <div>
        <h1 className="text-3xl font-bold text-green-400">Sportify</h1>
      </div>
      <div className="flex gap-2">
        <Button variant="link">
          <Link to={"/"}>Home</Link>
        </Button>
        <Button variant="link">
          <Link to={"/about-us"}>About Us</Link>
        </Button>
        <Button variant="link">
          <Link to={"/all-products"}>All Products</Link>
        </Button>
        <Button variant="link">
          <Link to={"/manage-products"}>Manage Products</Link>
        </Button>
        <Button variant="link">
          <Link to={"/cart"}>Cart</Link>
        </Button>
      </div>
    </div>
  );
}
