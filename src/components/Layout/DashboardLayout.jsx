// src/components/Layout/DashboardLayout.jsx
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BellIcon,
  UserIcon,
  HomeIcon,
  BookOpenIcon,
  UsersIcon,
} from "lucide-react"; // Icons from ShadCN or Lucide

const DashboardLayout = ({ role }) => {
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
        to: "/dashboard",
        label: "Home",
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/users",
        label: "User Management",
        icon: <UsersIcon className="w-5 h-5" />,
      },
      {
        to: "/dashboard/courses",
        label: "Course Management",
        icon: <BookOpenIcon className="w-5 h-5" />,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>
        <nav className="space-y-4">
          {links[role].map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <h1 className="text-lg font-semibold">
            Welcome, {role.charAt(0).toUpperCase() + role.slice(1)}!
          </h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            <UserIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* Content */}
        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
