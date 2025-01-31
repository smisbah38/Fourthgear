import express from "express";
import upload from "../middleware/multer.js";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
  editProduct,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRouter.post("/remove", adminAuth, removeProduct);
productRouter.get("/list", listProduct);
productRouter.post("/single", singleProduct);
productRouter.post("/edit", adminAuth, editProduct); // New edit route

export default productRouter;
