import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <p className="flex justify-center items-center font-semibold text-gray-900">
        <img className="w-14" src={assets.logo} alt="" />
        Fourthgear
      </p>

      <button
        onClick={() => setToken("")}
        className="bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
