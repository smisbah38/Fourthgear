import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedPRoducts";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  // Fetch the product data based on productId
  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
    }
  }, [productId, products]);

  const handleBuyNow = () => {
    navigate("/checkout"); // Navigate to checkout directly
  };

  // Capitalize the first letter of a string
  const capitalize = (value) =>
    value ? value.charAt(0).toUpperCase() + value.slice(1) : "N/A";

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t-2 border-gray-600 pt-6 mx-8">
      {/* Main Product Section */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
            {productData.image.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => setSelectedImage(image)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img
              src={selectedImage}
              className="w-full h-auto"
              alt="Selected Product"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex-1">
          {/* Product Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-12 text-sm text-gray-300">
            {[
              { label: "Category", value: capitalize(productData.category) },
              { label: "Fuel Type", value: capitalize(productData.fuelType) },
              {
                label: "Registration Year",
                value: productData.registrationYear,
              },
              {
                label: "Engine Capacity",
                value: `${productData.engineCapacity} cc`,
              },
            ].map(({ label, value }, index) => (
              <p
                key={index}
                className="border border-gray-500 text-center p-4 bg-neutral-800 rounded-md shadow-lg hover:shadow-xl transition-shadow"
              >
                {label}: <span className="text-gray-200">{value}</span>
              </p>
            ))}
          </div>

          {/* Product Title and Price */}
          <h1 className="font-medium text-2xl text-gray-300">
            {productData.name}
          </h1>
          <p className="mt-5 text-3xl font-medium text-gray-300">
            {currency} {productData.price}
          </p>

          {/* Contact Section */}
          <div className="mt-8 mb-8 flex gap-6">
            {[
              { href: "tel:+8801617070008", icon: FaPhoneAlt, label: "Call" },
              {
                href: "mailto:fourthgearbd@gmail.com",
                icon: FaEnvelope,
                label: "Email",
              },
              {
                href: "https://wa.me/01617070008",
                icon: FaWhatsapp,
                label: "WhatsApp",
              },
            ].map(({ href, icon: Icon, label }, index) => (
              <a
                key={index}
                href={href}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="mr-2 text-2xl" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <a
            href="tel:+8801617070008"
            className="bg-black mt-5 text-white px-8 py-4 rounded-md hover:border-x-2 transition-all"
          >
            Call for Final Price
          </a>

          <hr className="mt-8 sm:w-4/5 border-gray-600" />
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-600 px-5 py-3 text-sm text-gray-300">
            Description
          </b>
        </div>
        <div className="px-6 py-6 border text-sm text-gray-300 border-gray-600">
          <p>{productData.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts productId={productId} />
    </div>
  );
};

export default Product;
