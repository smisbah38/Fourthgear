import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="my-20">
      {/* Title */}
      <div className="text-center text-3xl py-8">
        <Title text1="Our" text2="Policies" />
      </div>

      {/* Policy Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-12 px-4 sm:px-8 lg:px-20 pb-20">
        {/* Policy 2 - Vehicle Ownership & Delivery */}
        <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.d2} alt="Delivery" className="w-12 h-12 mb-4" />
          <p className="font-semibold text-lg text-gray-200 text-center">
            Vehicle Ownership & Delivery
          </p>
          <p className="text-gray-300 text-sm mt-4 text-center">
            The Seller shall deliver the vehicle with current registration and a
            clear title. The Seller guarantees that they are the rightful legal
            owner of the vehicle and that it is free from any legal claims,
            liens, or encumbrances.
          </p>
        </div>

        {/* Policy 1 - Documents Provided by the Seller */}
        <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.d1} alt="Documents" className="w-12 h-12 mb-4" />
          <p className="font-semibold text-lg text-gray-200 text-center">
            Documents Provided by the Seller
          </p>
          <p className="text-gray-300 text-sm mt-4 text-center">
            Upon receipt of the payment, the Seller agrees to provide the
            following documents to the Buyer on the sale date:
          </p>
          <ul className="text-gray-300 text-sm mt-3 list-disc list-inside text-left">
            <li>Ownership Transfer Documents (signed)</li>
            <li>Original Tax Token</li>
            <li>Original Fitness Token</li>
            <li>Original Insurance Copy</li>
            <li>Additional Documents (if applicable)</li>
          </ul>
        </div>

        {/* Policy 3 - Transfer of Ownership Costs */}
        <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-lg shadow-md w-full sm:w-[30%]">
          <img src={assets.d3} alt="Costs" className="w-12 h-12 mb-4" />
          <p className="font-semibold text-lg text-gray-200 text-center">
            Transfer of Ownership Costs
          </p>
          <p className="text-gray-300 text-sm mt-4 text-center">
            The Buyer is responsible for all associated costs related to the
            transfer of ownership of the vehicle. The transfer process shall be
            completed within 15 (fifteen) days from the date of delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
