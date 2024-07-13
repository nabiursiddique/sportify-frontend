import Navbar from "@/pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideNavbar from "../ManageProductComponents/SideNavbar";

const ManageProductLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="flex lg:flex-row flex-col ">
          <div className="">
            <SideNavbar></SideNavbar>
          </div>
          <div className=" lg:w-[90%] ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductLayout;
