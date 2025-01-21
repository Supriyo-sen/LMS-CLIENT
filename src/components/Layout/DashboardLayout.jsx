// src/components/Layout/DashboardLayout.jsx
import { Link, Outlet } from "react-router-dom";
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
} from "lucide-react";

const DashboardLayout = ({ role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        to: "/dashboard/chat",
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
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-md p-6 transition-all duration-300 relative`}
      >
        {/* Sidebar Header with Toggle Icon */}
        <div className="flex justify-between items-center mb-6">
          {isSidebarOpen ? (
            <h2 className="text-xl font-bold">Dashboard</h2>
          ) : (
            <h2 className="text-xl font-bold opacity-0">D</h2>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-4 right-4"
          >
            {isSidebarOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {links[role].map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              {link.icon}
              <span
                className={`${
                  isSidebarOpen ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
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
        <header className="flex justify-between items-center bg-white p-4 shadow">
          <h1 className="text-lg font-semibold">
            Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}!
          </h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            <UserIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
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
