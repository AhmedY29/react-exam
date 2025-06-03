import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// React Icon
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const [user, setUser] = useState("");
  const [openLogout, setOpenLogout] = useState(false);
  const [cartsItems, setCartsItems] = useState([]);
  const [productCount, setProductCount] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")
      .then((res) => setCartsItems(res.data));
  }, []);
  console.log(productCount, "count");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Account")));
  }, []);
  useEffect(() => {
    if (cartsItems) {
      setProductCount(
        cartsItems?.find((item) => item.userId == user.id)?.products
      );
      console.log();
    }
  }, [cartsItems]);

  return (
    <nav className="nav-section sticky top-0 bg-[#131921] text-white p-2 z-10">
      <div className="nav-content flex justify-between items-center px-2 w-full">
        <div className="logo flex items-center gap-3">
          <Link to={"/"}>
            <div className="hover:outline-1 p-1">
              <img
                src="https://freepnglogo.com/images/all_img/1715487998amazon-logo-transparent.png"
                alt="aw-logo"
                width={80}
              />
            </div>
          </Link>

          <button className="hover:outline-1">
            <h1 className="text-sm font-light">Delivery to</h1>
            <div className="flex gap-3">
              <IoLocationOutline />
              <h1>Saudi Arabia</h1>
            </div>
          </button>
        </div>
        <div className="search flex justify-center lg:w-[50%]">
          <form className="flex bg-white text-black w-[60%] ">
            <select className="bg-gray-300 p-2 " name="" id="">
              <option value="all">All</option>
              <option value="all">All</option>
              <option value="all">All</option>
            </select>
            <input
              className="p-2 w-[90%] "
              type="text"
              name=""
              id=""
              placeholder="Search Amazon"
            />
            <button className="bg-amber-300 text-2xl p-2">
              <IoSearch />
            </button>
          </form>
        </div>
        <div className="actions hidden lg:flex items-center gap-3 ">
          <div className="p-2 hover:outline-1">
            <button className="">
              <div className="flex gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png"
                  alt="us-flag"
                  width={25}
                />
                <h1>EN</h1>
              </div>
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setOpenLogout(!openLogout)}
              className="hover:outline-1 cursor-pointer"
            >
              <h1 className="text-sm font-light">Hello, {user.username}</h1>
              <h1>Account & List</h1>
            </button>
            <ul
              className={`${
                openLogout ? "" : "hidden"
              } bg-white rounded-md absolute top-12 text-black w-full`}
            >
              <li
                onClick={() => {
                  toast.success("Logout Successfully");
                  localStorage.clear(), navigate("/signin");
                }}
                className="cursor-pointer text-xl p-1"
              >
                Logout
              </li>
            </ul>
          </div>

          <button className="hover:outline-1">
            <h1 className="text-sm font-light">Return</h1>
            <h1>& Orders</h1>
          </button>
          <button className="hover:outline-1 text-2xl">
            <MdOutlineShoppingCart />
            <h1 className="text-sm font-light">{productCount?.length}</h1>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
