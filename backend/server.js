import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import reviewRouter from "./routes/reviewRoute.js"; // Import the review route

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// CORS Configuration to allow your frontend
app.use(
  cors({
    origin: ["https://www.fourthgearbd.com"], // Allow your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Enable if using cookies or authentication
  })
);

// Middlewares
app.use(express.json());

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on port :" + port));
