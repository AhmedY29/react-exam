import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

// React icon
import { IoIosInformationCircle } from "react-icons/io";
import axios from "axios";

function SignIn() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(users, "users");
  console.log(
    users.find((user) => user.email == formData.email),
    "ssssa"
  );

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(
      users.filter(
        (user) =>
          user.email == formData.email && user.password == formData.password
      )
    );
    if (
      users.filter(
        (user) =>
          user.email == formData.email && user.password == formData.password
      ).length > 0
    ) {
      toast.success("ok");
      const userInfo = users.find((user) => user.email == formData.email);
      localStorage.setItem(
        "Account",
        JSON.stringify({
          id: userInfo.id,
          username: userInfo.username,
          email: userInfo.email,
        })
      );
      navigate("/");
    } else {
      toast.error("X");
    }
  };

  return (
    <section className="SignIn-section flex justify-center items-center w-full">
      <div className="SignIn-content flex flex-col items-center">
        <div className="logo text-center">
          <img
            width={150}
            src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-3 border rounded-lg p-2 px-3 "
        >
          <h1 className="text-3xl font-bold my-4">Sign In</h1>
          <div className="input-group flex flex-col ">
            <label className="font-bold" htmlFor="email">
              Enter Email
            </label>
            <input
              className="p-1 px-2 border rounded-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Or mobile"
              onChange={handleChangeInput}
              value={formData.email}
              required
            />
          </div>

          <div className="input-group flex flex-col ">
            <label className="font-bold" htmlFor="password">
              Password (at least 6 characters)
            </label>
            <input
              className="p-1 px-2 border rounded-sm"
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
              value={formData.password}
              required
            />
            <span className="flex items-center gap-3">
              <IoIosInformationCircle className="text-blue-500" />
              <h1>Passwords must be at least 6 characters.</h1>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#ffd814] rounded-xl px-2 py-1 cursor-pointer"
          >
            Sign In
          </button>
          <div className="link text-sm font-bold">
            <hr />

            <h1>You Don't have Account?</h1>
            <Link to={"/signup"}>
              <h1 className="text-blue-400 hover:underline cursor-pointer">
                Sign up
              </h1>
            </Link>
          </div>
          <div className="link text-sm font-bold">
            <hr />

            <h1>Buying for work?</h1>
            <h1 className="text-blue-400 hover:underline cursor-pointer">
              Create a free business account
            </h1>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
