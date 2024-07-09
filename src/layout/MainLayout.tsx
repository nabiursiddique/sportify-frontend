import Navbar from "@/pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default MainLayout;
