import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SubNav from "../components/SubNav";
import ProductDetails from "../pages/ProductDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import toast from "react-hot-toast";
import Cert from "../pages/Cert";

const Layout = () => {
  const user = JSON.parse(localStorage.getItem("Account"));
  if (!user) {
    toast.error("You have to login");
    return <Navigate to={"/signin"} />;
  }
  return (
    <>
      <Navbar />
      <SubNav />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cert",
        element: <Cert />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
