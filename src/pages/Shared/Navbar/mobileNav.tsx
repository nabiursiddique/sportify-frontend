import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <div className="md:hidden">
        <h1 className="text-2xl font-extrabold text-lime-400">Sportify</h1>
      </div>
      <SheetContent side="left">
        <nav className="flex flex-col items-start">
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
          <NavLink to={"/manage-products/add-product"}>
            <Button variant="link" className="hover:text-lime-500">
              Manage Products
            </Button>
          </NavLink>
          <NavLink to={"/cart"}>
            <Button variant="link" className="hover:text-lime-500">
              Cart
            </Button>
          </NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
