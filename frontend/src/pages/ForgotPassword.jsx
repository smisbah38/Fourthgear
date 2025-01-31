import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // To toggle between login and forgot password
  const [forgotEmail, setForgotEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1 is for email & phone, Step 2 for resetting password
  const navigate = useNavigate();

  // Get backend URL from environment variable
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard after successful login
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleSubmitForgotPassword = async (event) => {
    event.preventDefault();

    if (step === 1) {
      // Request password reset
      try {
        const response = await axios.post(
          `${backendUrl}/api/user/forgot-password`,
          {
            email: forgotEmail,
            phone,
          }
        );
        if (response.data.success) {
          toast.success("Password reset link sent! Check your email.");
          setStep(2); // Move to password reset step
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    } else {
      // Handle password reset
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      try {
        const response = await axios.post(
          `${backendUrl}/api/user/reset-password`,
          {
            email: forgotEmail,
            newPassword,
          }
        );
        if (response.data.success) {
          toast.success("Password successfully reset!");
          navigate("/login"); // Redirect to login after successful reset
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-gray-300">
      <div className="w-96 p-5 bg-gray-800 rounded-md">
        {isForgotPassword ? (
          // Forgot Password Flow
          <form onSubmit={handleSubmitForgotPassword}>
            <h2 className="text-2xl mb-4">
              {step === 1 ? "Forgot Password" : "Reset Password"}
            </h2>
            {step === 1 && (
              <>
                <input
                  type="email"
                  className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
                  placeholder="Email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </>
            )}

            {step === 2 && (
              <>
                <input
                  type="password"
                  className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </>
            )}

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-md mt-4"
            >
              {step === 1 ? "Submit" : "Reset Password"}
            </button>
          </form>
        ) : (
          // Login Form
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl mb-4">Login</h2>
            <input
              type="email"
              className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full mb-3 p-3 bg-gray-700 text-white rounded-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-md mt-4"
            >
              Login
            </button>
            <div
              className="mt-4 text-center text-blue-400 cursor-pointer"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot your password?
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
