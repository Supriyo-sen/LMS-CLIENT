// src/pages/SystemAnalytics.jsx
const SystemAnalytics = () => {
  const analytics = {
    totalUsers: 1200,
    totalCourses: 85,
    revenue: 45000,
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">System Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {analytics.totalUsers}
          </h2>
          <p className="text-gray-600">Total Users</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {analytics.totalCourses}
          </h2>
          <p className="text-gray-600">Total Courses</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            ${analytics.revenue}
          </h2>
          <p className="text-gray-600">Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default SystemAnalytics;
