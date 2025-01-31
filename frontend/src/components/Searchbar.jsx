import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-neutral-800 text-center text-white">
      <div className="inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w:3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="" className="w-5" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer text-white"
      />
    </div>
  ) : null;
};

export default Searchbar;
