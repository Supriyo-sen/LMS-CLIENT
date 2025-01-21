// src/pages/Signup.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRegisterMutation } from "@/redux/slices/authApiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData).unwrap();
      dispatch(
        setCredentials({ token: response.data.token, user: response.data })
      );
      toast.success(response.message || "Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Signup</h2>
        <p className="text-center text-gray-500">Create your account</p>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label htmlFor="role" className="text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Signup"}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
