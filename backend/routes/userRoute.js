import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
  adminLogin,
  verifyUser,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/list", getUsers); // New route for fetching users
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/verify-user", verifyUser);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
