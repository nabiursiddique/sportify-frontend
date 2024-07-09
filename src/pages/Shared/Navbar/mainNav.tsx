import { NavLink } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 md:flex justify-between items-center w-full">
      <div>
        <h1 className="text-3xl font-bold text-lime-400">Sportify</h1>
      </div>
      <nav id="navbar" className="flex gap-2">
        <NavLink to={"/"}>
          <Button variant="link" className="hover:text-lime-500">
            Home
          </Button>
        </NavLink>
        <NavLink to={"/about-us"}>
          <Button variant="link" className="hover:text-lime-500">
            About Us
          </Button>
        </NavLink>
        <NavLink to={"/all-products"}>
          <Button variant="link" className="hover:text-lime-500">
            All Products
          </Button>
        </NavLink>
        <NavLink to={"/manage-products"}>
          <Button variant="link" className="hover:text-lime-500">
            Manage Products
          </Button>
        </NavLink>
        <NavLink to={"/cart"}>
          <Button variant="link" className="hover:text-lime-400">
            Cart
          </Button>
        </NavLink>
      </nav>
    </div>
  );
}
