import React, { useState, useRef } from "react";
import Header from "./Header";
import background_img from "../img/background_login.jpeg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { checkSignInData, checkSignUpData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    let message = null;

    if (isSignIn) {
      message = checkSignInData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;

      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User in sign in: ", user);
          toast("Logged in successfully");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;

          if (errorCode.includes("invalid-credential")) {
            toast.error("Invalid Email or Password");
          }
        });
    } else {
      message = checkSignUpData(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;

      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User: ", user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full overflow-hidden bg-gradient-to-t ">
        <img
          className="relative w-full h-screen -z-10 object-cover"
          src={background_img}
          alt="background"
        />
      </div>
      <div className="w-full flex justify-center absolute top-28 py-20 md:py-2 md:top-20">
        <form
          className="flex flex-col gap-4 w-[470px] rounded-md bg-black bg-opacity-50 px-20 py-12 text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl text-white my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn ? (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="rounded-md p-4 bg-black/50 border border-gray-500 font-semibold"
            />
          ) : (
            ""
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-500"
          />
          <div className="relative">
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 text-gray-200/50 cursor-pointer "
            >
              {showPassword ? (
                <FaEye style={{ fontSize: "20px" }} />
              ) : (
                <FaEyeSlash style={{ fontSize: "20px" }} />
              )}
            </span>

            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-500"
            />
          </div>
          <p className="text-red-500 text-lg">{errorMessage}</p>
          <button
            className="p-2 my-2 rounded-sm w-full bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-800"
            onClick={handleButtonClick}
          >
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
