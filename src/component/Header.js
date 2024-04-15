import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/Avatar.png";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error while signing out. Plz try again");
      });
  };

  return (
    <div
      className="absolute md:px-10 md:py-2 p-3 md:pt-2 z-10 flex items-center justify-between w-full bg-gradient-to-b from-black from-50% "
      onMouseLeave={() => setIsOpen(false)}
    >
      <img
        className="md:w-60 w-[50vw] max-w-60 mx-auto md:mx-0 cursor-pointer"
        src={Logo}
        alt="logo"
      />

      <img
        className="absolute right-0 mr-20 w-12 h-12"
        src={Avatar}
        alt="Avatar"
      />
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex justify-center w-full shadow-sm text-sm font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onMouseEnter={() => setIsOpen(true)}
        >
          {isOpen ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 bg-slate-700 border border-gray-200 rounded-md py-1 mt-3 w-32 shadow-lg">
            <div
              className="block px-4 py-2 text-sm text-white hover:bg-slate-500"
              onClick={handleSignOut}
            >
              LogOut
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
