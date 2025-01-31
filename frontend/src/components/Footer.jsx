import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 relative">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm mx-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              {/* Logo */}
              <img src={assets.logo} alt="Company Logo" className="w-32" />
              {/* Text next to the logo */}
              <span className="text-3xl font-semibold text-gray-300 ">
                Fourthgear
              </span>
            </div>
            <p className="w-full md:w-2/3 text-gray-300">
              We are committed to providing high-quality reconditioned used cars
              to our customers. With years of experience in the automotive
              industry, we ensure that every vehicle we offer is thoroughly
              inspected and refurbished to meet the highest standards of safety,
              performance, and reliability. Our mission is to make owning a
              reliable car more affordable and accessible for all our valued
              customers across Bangladesh.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-300">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/collection" className="hover:text-white">
                  Collection
                </a>
              </li>
              <li>
                <a href="#our-policy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>{" "}
              {/* Updated link */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-300">
              GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt />{" "}
                <a href="tel:+8801617070008" className="hover:text-white">
                  +880 1617 070 008
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp />{" "}
                <a
                  href="https://wa.me/8801617070008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />{" "}
                <a
                  href="mailto:fourthgearbd@gmail.com"
                  className="hover:text-white"
                >
                  fourthgearbd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookF />{" "}
                <a
                  href="https://facebook.com/fourthgearbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <hr />
          <p className="pt-10 text-sm text-center text-gray-300">
            Copyright 2025&copy; fourthgearbd - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
