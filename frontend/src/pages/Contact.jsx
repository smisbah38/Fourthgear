import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bb99hfi", // Your Service ID
        "template_ymyeigk", // Your Template ID
        e.target,
        "ZDjmvnTvPehToWHgU" // Replace with your actual user ID (Public Key)
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="px-4 sm:px-4">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-10">
        {/* Contact Image */}
        <div className="w-full lg:w-[480px] mx-auto">
          <img
            src={assets.contact_img}
            alt="Contact Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Info and Form */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Company Address & Quick Links */}
          <div className="bg-neutral-800 text-gray-300 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Our Address</h2>
            <p>
              Matrichaya, Commissioner Road, <br />
              Kallyanpur, Dhaka, Bangladesh.
            </p>
            <p className="mt-4">
              <b>Phone:</b>{" "}
              <a href="tel:+8801617070008" className="text-white">
                +8801617070008
              </a>
            </p>
            <p>
              <b>Email:</b>{" "}
              <a href="mailto:fourthgear@gmail.com" className="text-white">
                fourthgear@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links with Icons - 2 per row on small screens, 4 per row on large screens */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="tel:+8801617070008"
              className="flex justify-center items-center gap-2 bg-black text-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition-all"
            >
              <FaPhoneAlt /> Call Us
            </a>
            <a
              href="mailto:fourthgearbd@gmail.com"
              className="flex justify-center items-center gap-2 bg-black text-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition-all"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://wa.me/8801617070008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-black text-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition-all"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://facebook.com/carbazaar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-black text-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition-all"
            >
              <FaFacebookF /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-neutral-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl text-gray-300 font-semibold mb-6">
          Send Us a Message
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-neutral-700 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-neutral-700 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-neutral-700 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="bg-neutral-700 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-gray-300 px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
