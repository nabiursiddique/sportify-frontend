import { ChevronRight, LucideIcon, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Nav } from "../ui/nav";
import { useState } from "react";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks: {
    title: string;
    to: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    adminOnly?: boolean;
    userOnly?: boolean;
  }[] = [
    {
      title: "Add Products",
      to: "/manage-products/add-product",
      icon: PlusCircle,
      variant: "default",
    },
    {
      title: "Manage Products",
      to: "/manage-products/edit-product",
      icon: PlusCircle,
      variant: "default",
    },
  ];
  return (
    <div className="relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 text-black">
      <div className="my-10">
        <Button
          variant="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Nav isCollapsed={isCollapsed} links={navLinks} />
    </div>
  );
};

export default SideNavbar;
