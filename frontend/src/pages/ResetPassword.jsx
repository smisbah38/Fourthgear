import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Verify user with email and phone
      const response = await axios.post(`${backendUrl}/api/user/verify-user`, {
        email,
        phone,
      });

      if (response.data.success) {
        // If user is verified, reset the password
        const resetResponse = await axios.post(
          `${backendUrl}/api/user/reset-password`,
          {
            email,
            newPassword,
          }
        );

        if (resetResponse.data.success) {
          toast.success("Password reset successfully!");
          navigate("/login"); // Redirect to login after successful reset
        } else {
          toast.error(resetResponse.data.message);
        }
      } else {
        toast.error("Incorrect credentials");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-20 gap-4 text-gray-300"
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-3 border border-gray-800 text-black rounded-md"
        type="email"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        className="w-full px-3 py-3 border border-gray-800 text-black rounded-md"
        type="text"
        placeholder="Phone Number"
        required
      />
      <input
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
        className="w-full px-3 py-3 border border-gray-800 text-black rounded-md"
        type="password"
        placeholder="New Password"
        required
      />
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        className="w-full px-3 py-3 border border-gray-800 text-black rounded-md"
        type="password"
        placeholder="Confirm Password"
        required
      />
      <button
        className="bg-black text-gray-300 font-light px-10 py-3 mt-4 rounded-md hover:border-x-2 transition-all ease-in-out duration-200"
        type="submit"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
