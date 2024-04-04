import React from "react";
import Logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="absolute md:px-10 md:py-2 p-3 md:pt-2 z-10 flex items-center justify-between w-full bg-gradient-to-b from-black from-50% ">
      <img
        className="md:w-60 w-[50vw] max-w-60 mx-auto md:mx-0 cursor-pointer"
        src={Logo}
        alt="logo"
      />
    </div>
  );
};

export default Header;
