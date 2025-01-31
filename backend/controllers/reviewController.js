import Review from "../models/reviewModel.js";

// Controller to handle adding a review
export const addReview = async (req, res) => {
  const { stars, review, name, email } = req.body;

  if (!stars || !review || !name || !email) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields: name, email, rating, and review.",
    });
  }

  try {
    const newReview = new Review({
      stars,
      review,
      name,
      email,
      user: req.body.userId, // Using the userId from the token
    });

    await newReview.save();
    res
      .status(201)
      .json({ success: true, message: "Review added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};

// Controller to handle fetching all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // Sorting by latest reviews first
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch reviews." });
  }
};

// Controller to handle removing a review
export const removeReview = async (req, res) => {
  const { id } = req.body;

  try {
    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Review removed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
};
