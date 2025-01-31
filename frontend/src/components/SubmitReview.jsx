import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

const SubmitReview = () => {
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = { stars: rating, review: reviewText, name, email };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"), // Assuming token is stored in localStorage
          },
          body: JSON.stringify(reviewData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Review submitted successfully!"); // Success toast
        setRating(1);
        setReviewText("");
        setName("");
        setEmail("");
      } else {
        toast.error(data.message || "Error submitting review"); // Error toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting review"); // Error toast
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 rounded-lg shadow-lg md:border border-gray-200">
      <div className="text-center text-3xl pb-6 md:pb-8">
        <p className="text-gray-300">
          Rate Our <span className="text-gray-300 font-semibold">Services</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 pb-6">
        <p className="text-lg text-gray-300 font-medium">Rating</p>
        <select
          className="w-full md:w-[80px] py-2 md:py-3 text-sm text-black rounded-lg text-center shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 pb-5 text-gray-300">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-md p-2 outline-none text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2 pb-5 text-gray-300">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md p-2 outline-none text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="text-center pb-3">
        <p className="text-base text-gray-300">Review</p>
      </div>

      <div className="flex justify-center pb-2">
        <textarea
          className="w-full md:w-2/3 h-24 p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-200 ease-in-out"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="text-center mt-6 md:mt-8">
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 md:px-8 md:py-4 text-base active:bg-gray-700 rounded-md hover:border-x-2 transition-all ease-in-out duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitReview;
