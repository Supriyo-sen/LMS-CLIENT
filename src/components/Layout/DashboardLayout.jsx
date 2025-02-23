import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  UserIcon,
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
  MenuIcon,
  XIcon,
  MessageCircle,
  Loader2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useLogoutUserMutation } from "@/redux/slices/authApiSlice";

const DashboardLayout = ({ role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();
  const location = useLocation();
  const dispatch = useDispatch();
  const links = {
    student: [
      {
        to: "/dashboard",
        label: "Home",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/courses",
        label: "My Courses",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/student/chats",
        label: "Chat",
        icon: <UsersIcon className="w-5 h-5" />,
      },
    ],
    teacher: [
      {
        to: "/dashboard",
        label: "Home",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/classes",
        label: "My Classes",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/chat",
        label: "Chat",
        icon: <UsersIcon className="w-5 h-5" />,
      },
    ],
    admin: [
      {
        to: "/dashboard/admin",
        label: "Home",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/admin/users",
        label: "User Management",
        icon: <UsersIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/admin/courses",
        label: "Course Management",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/admin/students",
        label: "Enrolled Students",
        icon: <UsersIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/admin/teachers",
        label: "Enrolled Teachers",
        icon: <UsersIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/admin/chats",
        label: "Chat",
        icon: <MessageCircle className="w-5 h-5" />,
      },
    ],
  };

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-md p-4 transition-all duration-300 flex flex-col relative`}
      >
        {/* Sidebar Header with Toggle Button */}
        <div className="flex justify-between items-center mb-6">
          {isSidebarOpen && <h2 className="text-xl font-bold">Dashboard</h2>}

          {/* Open/Close Sidebar Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-4 right-4"
          >
            {isSidebarOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6 ml-1 " />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 mt-6">
          {links[role].map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 ${
                location.pathname === link.to
                  ? "bg-blue-500 text-white font-bold"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {/* Always Visible Icons */}
              <span className="w-8  flex justify-center">{link.icon}</span>

              {/* Sidebar Text (Hidden when collapsed) */}
              <span
                className={`overflow-hidden transition-all duration-300 ${
                  isSidebarOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-sm">
          <h1 className="text-lg font-semibold">
            Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}!
          </h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <UserIcon className="w-6 h-6 text-gray-600 cursor-pointer " />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mr-5 mt-2 border border-teal-300">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1 bg-teal-300 " />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  {isLoggingOut ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Logout"
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
