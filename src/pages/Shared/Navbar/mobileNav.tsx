import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <div className="md:hidden">
        <h1 className="text-2xl font-bold text-green-400">Sportify</h1>
      </div>
      <SheetContent side="left">
        <div className="flex flex-col items-start">
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
      </SheetContent>
    </Sheet>
  );
}
