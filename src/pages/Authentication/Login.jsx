// src/pages/Login.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/redux/slices/authApiSlice";
import { setCredentials } from "@/redux/slices/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      dispatch(
        setCredentials({ token: response.data.token, user: response.data })
      );

      toast.success(response.message || "Login successful!");
    } catch (err) {
      setError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105">
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">Login to your account</p>

        {error && (
          <Alert variant="destructive" className="mt-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition-all transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
