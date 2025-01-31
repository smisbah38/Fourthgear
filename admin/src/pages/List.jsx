import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

// Modal component for editing product
const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );
  const [price, setPrice] = useState(product ? product.price : "");
  const [sold, setSold] = useState(product ? product.sold : false);

  const handleSave = () => {
    onSave({ ...product, name, description, price, sold });
    onClose();
  };

  useEffect(() => {
    // Populate the form with the product data when the modal is opened
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setSold(product.sold);
    }
  }, [product]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-[300px] sm:w-[500px]">
        <h2 className="text-xl mb-4">Edit Product</h2>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <label>Product Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <label>Product Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <div className="flex gap-2 mb-4">
          <label>Mark as Sold</label>
          <input
            type="checkbox"
            checked={sold}
            onChange={() => setSold(!sold)}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (updatedProduct) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/edit",
        updatedProduct,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Product updated successfully");
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Products List</p>
      <div className="flex flex-col gap-4">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-bold">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product List */}
        {list.map((item) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-2 px-4 border text-sm bg-white rounded-md shadow-sm"
            key={item._id}
          >
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                className="w-16 h-16 object-cover rounded-md"
                src={item.image[0]}
                alt={item.name}
              />
            </div>

            {/* Product Details */}
            <div className="text-center md:text-left">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 md:hidden">{item.category}</p>
            </div>

            {/* Category (hidden on small screens) */}
            <p className="hidden md:block">{item.category}</p>

            {/* Price */}
            <p className="text-center md:text-left font-medium">
              {currency}
              {item.price}
            </p>

            {/* Action */}
            <div className="flex justify-center md:justify-center gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-black text-white text-sm px-3 py-1 rounded-md hover:bg-gray-800 transition"
              >
                Edit
              </button>
              <button
                onClick={() => removeProduct(item._id)}
                className="bg-black text-white text-sm px-3 py-1 rounded-md hover:bg-gray-800 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={currentProduct || {}}
        onSave={handleSaveEdit}
      />
    </>
  );
};

export default List;
