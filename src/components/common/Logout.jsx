import { useLogoutUserMutation } from "@/redux/slices/authApiSlice";
import { logout } from "@/redux/slices/authSlice";
import { Loader2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logout());
    navigate("/login");
    navigate(0);
    toast.success("Logged out successfully!");
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-red-600 transition-transform transform hover:scale-105"
    >
      {isLoggingOut ? <Loader2 className="animate-spin" /> : "Logout"}
    </button>
  );
};

export default Logout;
