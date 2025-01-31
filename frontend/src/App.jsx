import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import { ShopContext } from "./context/ShopContext";
import ShowReview from "./components/ShowReview";
import SubmitReview from "./components/SubmitReview";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const { token, backendUrl } = useContext(ShopContext);
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
              {token && <SubmitReview />}
              <ShowReview />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/reset-password" element={<ResetPassword />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
