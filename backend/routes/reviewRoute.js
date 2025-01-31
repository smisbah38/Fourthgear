import express from "express";
import {
  addReview,
  getReviews,
  removeReview,
} from "../controllers/reviewController.js";
import authUser from "../middleware/auth.js"; // Auth middleware to ensure user is logged in

const router = express.Router();

// Route to add a review (only accessible to logged-in users)
router.post("/", authUser, addReview);

// Route to get all reviews (accessible to everyone)
router.get("/", getReviews);

// Route to remove a review (only accessible to logged-in users)
router.post("/remove", authUser, removeReview);

export default router;
