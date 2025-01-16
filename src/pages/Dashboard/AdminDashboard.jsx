import { Button } from "@/components/ui/button";

// src/pages/AdminDashboard.jsx
const AdminDashboard = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Student" },
    { id: 2, name: "Jane Smith", role: "Teacher" },
  ];

  const courses = [
    { id: 1, title: "React for Beginners", status: "Approved" },
    { id: 2, title: "Node.js Advanced", status: "Pending" },
  ];

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
              </div>
              <Button>Edit</Button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Course Management</h2>
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">Status: {course.status}</p>
              </div>
              <Button>Approve</Button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
        <div className="p-4 bg-white shadow rounded-lg">
          <p>Total Users: 100</p>
          <p>Total Courses: 20</p>
          <p>Revenue: $5000</p>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
