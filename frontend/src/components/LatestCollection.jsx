import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [unsoldProducts, setUnsoldProducts] = useState([]);

  useEffect(() => {
    // Filter out sold products and limit the result to the first 6 unsold products
    const unsold = products.filter((item) => !item.sold).slice(0, 6);
    setUnsoldProducts(unsold);
  }, [products]);

  return (
    <div className="my-10 mx-4">
      <div className="text-center py-8 text-3xl">
        <Title text1={"New"} text2={"Arrivals"} />
        <p className="w-full m-auto text-sm sm:text-sm md:text-base text-gray-300">
          Discover the latest models and fresh additions to our collection, now
          available for you!
        </p>
      </div>
      {/* Rendering Unsold Products */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-6">
        {unsoldProducts.map((item, index) => (
          <div key={index} className="relative">
            {/* SOLD Label */}
            {item.sold && (
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md z-10">
                SOLD
              </div>
            )}
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
