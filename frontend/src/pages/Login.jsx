import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // Check if the user is logged in (token present), redirect to home
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
          phone,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-40 gap-4 text-gray-300"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none w-8 border-gray-800 h-0.5" />
      </div>

      {/* Show name and phone input only if registering */}
      {currentState === "Sign Up" && (
        <>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full px-3 py-3 border border-gray-800 text-black text-base rounded-md"
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="w-full px-3 py-3 border border-gray-800 text-black text-base rounded-md"
            type="text"
            placeholder="Mobile Number"
            required
          />
        </>
      )}

      {/* Email input */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-3 border border-gray-800 text-black text-base rounded-md"
        type="email"
        placeholder="Email"
        required
      />

      {/* Password input */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-3 border border-gray-800 text-black text-base rounded-md"
        type="password"
        placeholder="Password"
        required
      />

      {/* Forgot Password & Account Switch */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p
          onClick={() => navigate("/reset-password")}
          className="cursor-pointer text-gray-300 hover:text-gray-200"
        >
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-gray-300 hover:text-gray-200"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-gray-300"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        className="bg-black text-gray-300 font-light px-10 py-3 mt-4 rounded-md hover:border-x-2 transition-all ease-in-out duration-200"
        type="submit"
      >
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
