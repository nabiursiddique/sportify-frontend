import MainLayout from "@/components/layout/MainLayout";
import ManageProductLayout from "@/components/layout/ManageProductLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import AllProducts from "@/pages/AllProducts/AllProducts";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import Home from "@/pages/Home/Home";
import AddProduct from "@/pages/ManageProducts/AddProduct";
import EditProductInfo from "@/pages/ManageProducts/EditProductInfo";
import EditProducts from "@/pages/ManageProducts/EditProducts";
import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/product-details/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/manage-products",
    element: <ManageProductLayout />,
    children: [
      {
        path: "/manage-products/add-product",
        element: <AddProduct />,
      },
      {
        path: "/manage-products/edit-product",
        element: <EditProducts />,
      },
      {
        path: "/manage-products/edit-product-info/:id",
        element: <EditProductInfo />,
      },
    ],
  },
]);

export default router;
