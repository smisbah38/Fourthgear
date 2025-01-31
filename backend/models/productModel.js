import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  sold: { type: Boolean, default: false },
  registrationYear: { type: Number, required: true }, // New field
  fuelType: { type: String, required: true }, // New field
  category: { type: String, required: true }, // New field
  engineCapacity: { type: String, required: true }, // New field
  date: { type: Date, default: Date.now },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
