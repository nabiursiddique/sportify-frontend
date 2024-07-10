import Footer from "@/pages/Shared/Footer/Footer";
import Navbar from "@/pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
