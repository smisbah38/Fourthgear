import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sold, setSold] = useState(false); // Added state for 'sold'
  const [registrationYear, setRegistrationYear] = useState(""); // Registration year
  const [fuelType, setFuelType] = useState(""); // Fuel type
  const [category, setCategory] = useState(""); // Category
  const [engineCapacity, setEngineCapacity] = useState(""); // Engine capacity

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("sold", sold ? "true" : "false"); // Added 'sold' field
      formData.append("registrationYear", registrationYear); // Registration year
      formData.append("fuelType", fuelType); // Fuel type
      formData.append("category", category); // Category
      formData.append("engineCapacity", engineCapacity); // Engine capacity

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSold(false); // Reset sold after submission
        setRegistrationYear(""); // Reset registration year
        setFuelType(""); // Reset fuel type
        setCategory(""); // Reset category
        setEngineCapacity(""); // Reset engine capacity
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message); // Error handling fix
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col w-full items-start gap-3 mb-4">
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20 cursor-pointer"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 cursor-pointer"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20 cursor-pointer"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 cursor-pointer"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full mb-2">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full mb-2">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="Enter Price"
          />
        </div>
      </div>

      <div className="w-full mb-2">
        <p className="mb-2">Registration Year</p>
        <input
          onChange={(e) => setRegistrationYear(e.target.value)}
          value={registrationYear}
          className="w-full max-w-[500px] px-3 py-2"
          type="number"
          placeholder="Enter registration year"
          required
        />
      </div>

      <div className="w-full mb-2">
        <p className="mb-2">Fuel Type</p>
        <input
          onChange={(e) => setFuelType(e.target.value)}
          value={fuelType}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter fuel type"
          required
        />
      </div>

      <div className="w-full mb-2">
        <p className="mb-2">Category</p>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter category"
          required
        />
      </div>

      <div className="w-full mb-2">
        <p className="mb-2">Engine Capacity</p>
        <input
          onChange={(e) => setEngineCapacity(e.target.value)}
          value={engineCapacity}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter engine capacity"
          required
        />
      </div>

      <div className="flex gap-5 mt-3">
        <div className="flex gap-1 items-center">
          <input
            type="checkbox"
            id="sold"
            onChange={() => setSold(!sold)}
            checked={sold}
          />
          <label htmlFor="sold">Mark as Sold</label>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full py-2 bg-black text-white" type="submit">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Add;
