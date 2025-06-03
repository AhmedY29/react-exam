import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

// React icon
import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }

    axios
      .post("https://fakestoreapi.com/users", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then(() => toast.success("Sign up successfully"));
  };

  console.log(formData);
  return (
    <section className="signup-section flex justify-center items-center w-full">
      <div className="signup-content flex flex-col items-center">
        <div className="logo text-center">
          <img
            width={150}
            src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-3 border rounded-lg p-2 px-3 "
        >
          <h1 className="text-3xl font-bold my-4">Create account</h1>
          <div className="input-group flex flex-col ">
            <label className="font-bold" htmlFor="email">
              Enter Email
            </label>
            <input
              className="p-1 px-2 border rounded-sm"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChangeInput}
              value={formData.email}
              required
            />
          </div>
          <div className="input-group flex flex-col ">
            <label className="font-bold" htmlFor="username">
              Your name
            </label>
            <input
              className="p-1 px-2 border rounded-sm"
              type="text"
              id="username"
              name="username"
              placeholder="Fist and last name"
              onChange={handleChangeInput}
              value={formData.username}
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
              minLength={6}
              required
            />
            <span className="flex items-center gap-3">
              <IoIosInformationCircle className="text-blue-500" />
              <h1>Passwords must be at least 6 characters.</h1>
            </span>
          </div>
          <div className="input-group flex flex-col ">
            <label className="font-bold" htmlFor="confirmPassword">
              Re-enter password
            </label>
            <input
              className="p-1 px-2 border rounded-sm"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChangeInput}
              value={formData.confirmPassword}
              minLength={6}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#ffd814] rounded-xl px-2 py-1 cursor-pointer"
          >
            Sign Up
          </button>
          <div className="link text-sm font-bold">
            <hr />

            <h1>Already a customer?</h1>
            <Link to={"/signin"}>
              <h1 className="text-blue-400 hover:underline cursor-pointer">
                Sign in instead
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
          <div className="link text-sm">
            <hr />

            <h1>By creating an account, you agree to Amazon's</h1>
            <h1 className="text-blue-400 hover:underline cursor-pointer">
              Conditions of Use <span className="text-black">and</span> Privacy
              Notice.
            </h1>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
