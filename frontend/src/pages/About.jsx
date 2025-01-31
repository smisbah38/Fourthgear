import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4">
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="About Us"
          className="w-full max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:gap-2/4 text-gray-300">
          <p>
            Welcome to <b className="text-white">FourthGear Car Zone</b>, where
            dreams meet the road. We are proud to be a trusted name in
            reconditioned car sales in Bangladesh. With a passion for quality
            and a commitment to trust, we bring you the perfect blend of value
            and reliability.
          </p>
          <p>
            Our journey began with a simple mission: to make car ownership a
            reality for everyone without compromising on quality or safety.
            Every car we sell tells a story of performance, durability, and
            trust.
          </p>
          <b className="text-gray-300 mt-10">Our Mission</b>
          <p>
            Our mission is to redefine the reconditioned car market in
            Bangladesh by delivering vehicles that feel brand new, without the
            brand-new price tag. We are dedicated to helping our customers drive
            home their dreams with complete peace of mind.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 text-gray-300">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Uncompromising Quality:</b>
          <p>
            Each car is handpicked and thoroughly inspected to ensure it meets
            the highest standards of safety and performance. We guarantee
            reliability so you can drive with confidence.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Care:</b>
          <p>
            From the moment you step into our dealership to the day you drive
            away, our team is here to guide and assist you every step of the
            way. Your satisfaction is our success.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Wide Range of Choices:</b>
          <p>
            Whether you need a family-friendly car or a compact city ride, our
            inventory features a wide range of options tailored to your
            lifestyle and budget.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Transparent Pricing:</b>
          <p>
            No hidden fees, no surprises. Our pricing is fair, competitive, and
            transparent, so you know exactly what you're paying for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
