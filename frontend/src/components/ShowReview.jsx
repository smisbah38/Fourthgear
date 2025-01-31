import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReviewGridWithNavigation = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews from the backend when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/review`
        );
        const data = await response.json();
        if (response.ok) {
          setReviews(data.reviews);
        } else {
          console.error("Failed to fetch reviews");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const reviewsPerPage = window.innerWidth >= 1024 ? 3 : 2;
  const maxIndex = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === maxIndex - 1 ? 0 : currentIndex + 1);
  };

  // Calculate the start and end index for the current page
  const startIndex = currentIndex * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  return (
    <section className="relative mt-24 px-0 sm:px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-400">
          What Our &nbsp;
          <span className="text-gray-300">Customers Say</span>
        </h1>
      </div>

      {/* Grid Section */}
      <div className="relative flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-12">
          {reviews.slice(startIndex, endIndex).map((review, index) => (
            <div
              key={review.id || index} // fallback to index if id is not available
              className="p-6 bg-neutral-800 rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              <p className="font-semibold text-gray-300 capitalize">
                {review.name}
              </p>
              <div className="flex items-center">
                {Array.from({ length: review.stars }).map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.stars }).map(
                  (_, emptyStarIndex) => (
                    <span key={emptyStarIndex} className="text-gray-300">
                      ★
                    </span>
                  )
                )}
              </div>
              {/* Review text container */}
              <p className="text-gray-300 mt-2 min-h-[120px]">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewGridWithNavigation;
