import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App"; // Ensure backendUrl is correctly defined
import { toast } from "react-toastify";

const ReviewsList = ({ token }) => {
  const [reviews, setReviews] = useState([]);

  // Fetch the reviews from the backend
  const fetchReviews = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/review");
      if (response.data.reviews) {
        setReviews(response.data.reviews);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Remove a review
  const removeReview = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/review/remove",
        { id },
        { headers: { token } } // Send token for authorization
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchReviews(); // Refresh the list after deletion
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews on page load
  }, []);

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Reviews</p>
      <div className="flex flex-col gap-4">
        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-2 px-4 border bg-gray-100 text-sm font-bold">
          <span>User</span>
          <span>Review</span>
          <span>Rating</span>
          <span>Date</span>
          <span className="text-center">Action</span>
        </div>

        {reviews.map((review) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center gap-4 py-2 px-4 border text-sm bg-white rounded-md shadow-sm"
            key={review._id}
          >
            {/* User */}
            <div className="text-center md:text-left">{review.name}</div>

            {/* Review Text */}
            <div className="text-center md:text-left">{review.review}</div>

            {/* Rating */}
            <div className="text-center md:text-left">{review.stars}</div>

            {/* Date */}
            <div className="text-center md:text-left">
              {new Date(review.createdAt).toLocaleDateString()}
            </div>

            {/* Action */}
            <div className="flex justify-center md:justify-center gap-2">
              <button
                onClick={() => removeReview(review._id)}
                className="bg-black text-white text-sm px-3 py-1 rounded-md hover:bg-slate-900 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewsList;
