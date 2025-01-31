import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const RelatedPRoducts = ({ productId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Fetch the current product data based on productId
  useEffect(() => {
    if (products.length > 0 && productId) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setCurrentProduct(product);
      }
    }
  }, [products, productId]);

  // Filter products based on engine capacity within a threshold (e.g., 200cc)
  useEffect(() => {
    if (currentProduct) {
      const currentEngineCapacity = parseInt(currentProduct.engineCapacity);

      // Filter products with similar engine capacities within 200cc range
      const relatedProducts = products
        .filter(
          (item) =>
            item._id !== currentProduct._id && // Exclude the current product itself
            Math.abs(parseInt(item.engineCapacity) - currentEngineCapacity) <=
              200 // Engine capacity threshold
        )
        .slice(0, 5); // Limiting to 5 related products

      setRelated(relatedProducts);
    }
  }, [currentProduct, products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">
            No related products found
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedPRoducts;
