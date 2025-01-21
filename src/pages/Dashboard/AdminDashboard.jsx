// src/pages/AdminDashboard.jsx
import { Button } from "@/components/ui/button";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Student" },
    { id: 2, name: "Jane Smith", role: "Teacher" },
  ];

  const courses = [
    { id: 1, title: "React for Beginners", status: "Approved" },
    { id: 2, title: "Node.js Advanced", status: "Pending" },
  ];

  const platformStats = {
    totalUsers: 100,
    totalCourses: 20,
    revenue: 5000,
  };

  // Line Chart Data
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [500, 700, 800, 1200, 1500],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ["Students", "Teachers"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        hoverBackgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage users, courses, and platform analytics
        </p>
      </header>

      {/* Analytics Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Platform Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">
              {platformStats.totalUsers}
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Courses
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {platformStats.totalCourses}
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
            <p className="text-3xl font-bold text-purple-600">
              ${platformStats.revenue}
            </p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Revenue Over Time
            </h3>
            <Line data={lineChartData} />
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              User Distribution
            </h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </section>

      {/* User Management Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          User Management
        </h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
              </div>
              <div className="space-x-4">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Course Management Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Course Management
        </h2>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="p-4 bg-white shadow rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">Status: {course.status}</p>
              </div>
              <div className="space-x-4">
                {course.status === "Pending" && (
                  <Button variant="outline">Approve</Button>
                )}
                <Button variant="destructive">Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
