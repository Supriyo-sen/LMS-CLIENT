// src/components/FuturisticNavbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useGetUserProfileQuery } from "@/redux/slices/userSlice";

const FuturisticNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: user, isError } = useGetUserProfileQuery();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors"
        >
          Learn<span className="text-purple-600">X</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/courses"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors text-xl font-medium relative group"
            >
              Courses
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors text-lg font-medium relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors text-lg font-medium relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all"></span>
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {user && !isError ? (
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-medium text-lg">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-red-600 transition-transform transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signup"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-500 transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default FuturisticNavbar;
