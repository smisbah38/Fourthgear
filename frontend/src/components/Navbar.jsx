import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between py-5 font-medium bg-neutral-900 px-8">
      <Link to={"/"} className="flex items-center text-white">
        <img src={assets.logo} alt="" className="w-16" />
        <p className="text-white text-sm">Fourthgear</p>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-300">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-300" hidden />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>CARS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-300" hidden />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-300" hidden />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-300" hidden />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Conditionally render the search icon only on the Collection page */}
        {location.pathname === "/collection" && (
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-8 cursor-pointer"
          />
        )}

        {/* User Button - Login or Logout */}
        <div className="flex items-center gap-4">
          {token ? (
            <div>
              {/* Button for larger screens (md and up) */}
              <button
                onClick={logout}
                className="hidden md:inline-block bg-black text-gray-300 text-base px-10 py-4 hover:border-x-2 transition-all ease-in-out duration-200 rounded-lg"
                type="button"
              >
                Logout
              </button>
              {/* Icon for mobile screens (sm and below) */}
              <button
                onClick={logout}
                className="md:hidden text-white hover:text-gray-200 text-2xl"
                type="button"
              >
                <FaSignOutAlt className="text-[28px] mt-1.5" />
              </button>
            </div>
          ) : (
            <div>
              {/* Button for larger screens (md and up) */}
              <button
                onClick={() => navigate("/login")}
                className="hidden md:inline-block bg-black text-gray-300 text-base px-10 py-4 hover:border-x-2 transition-all ease-in-out duration-200 rounded-lg"
                type="button"
              >
                Login
              </button>
              {/* Icon for mobile screens (sm and below) */}
              <button
                onClick={() => navigate("/login")}
                className="md:hidden text-white hover:text-gray-200 text-2xl"
                type="button"
              >
                <FaUser className="text-[25px] mt-1" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setVisible(true)}
          className="sm:hidden text-white text-3xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar menu for smaller screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-white overflow-hidden transition-all duration-300 ${
          visible ? "w-4/5 sm:w-3/5" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="Back"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border ${isActive ? "bg-black text-white" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border ${isActive ? "bg-black text-white" : ""}`
            }
            to="/collection"
          >
            Cars
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border ${isActive ? "bg-black text-white" : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border ${isActive ? "bg-black text-white" : ""}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
