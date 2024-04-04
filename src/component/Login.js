import React, { useState } from "react";
import Header from "./Header";
import background_img from "../img/background_login.jpeg";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="w-full overflow-hidden bg-gradient-to-t from-black">
        <img
          className="relative w-full h-screen -z-10"
          src={background_img}
          alt="background"
        />
      </div>
      <div className="w-full flex justify-center absolute top-28 py-20 md:top-20">
        <form className="flex flex-col gap-4 w-[470px] rounded-md bg-black bg-opacity-50 px-20 py-12 text-white">
          <h1 className="font-bold text-3xl text-white my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn ? (
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-md p-4 bg-black/50 border border-gray-500 font-semibold"
            />
          ) : (
            ""
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-500"
          />
          <div className="relative">
            <span className="absolute right-2 top-1/2 -translate-y-1/2 w-5 text-gray-200/50 cursor-pointer ">
              <FaEyeSlash />
            </span>

            <input
              type="password"
              placeholder="Password"
              className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-500"
            />
          </div>
          <button className="p-2 my-2 rounded-sm w-full bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-800">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center cursor-pointer font-semibold">
            Forgot Password?
          </p>

          <p className="text-gray-300/80">
            {isSignIn ? "New To Neflix?" : "Already a user?"}
            <b
              onClick={toggleSignInForm}
              className="text-white font-bold cursor-pointer hover:underline ml-3"
            >
              {isSignIn ? "SignUpNow" : "SignIn"}
            </b>
          </p>

          <p className="font-light text-sm text-gray-300/80 md:mb-20">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <b
              href="#"
              className="text-blue-800 font-semibold hover:underline cursor-pointer"
            >
              Learn more.
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
