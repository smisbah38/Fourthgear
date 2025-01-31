import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="flex flex-col items-center text-center text-gray-200 cursor-pointer"
      to={`/product/${id}`}
    >
      {/* Image container */}
      <div className="w-full rounded-md overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="w-full h-64 object-cover hover:scale-110 transition ease-in-out"
        />
      </div>
      {/* Product name */}
      <p className="pt-3 pb-1 text-sm sm:text-base md:text-lg">{name}</p>
      {/* Product price */}
      <p className="text-sm sm:text-base font-medium">
        {currency} &nbsp;
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
