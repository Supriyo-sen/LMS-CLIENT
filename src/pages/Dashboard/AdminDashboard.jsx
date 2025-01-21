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
    <div className="p-8  min-h-screen">
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
    </div>
  );
};

export default AdminDashboard;
