// src/pages/CourseManagement.jsx
import { Button } from "@/components/ui/button";

const CourseManagement = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      status: "Pending",
    },
    {
      id: 2,
      title: "Node.js Advanced",
      instructor: "Jane Smith",
      status: "Approved",
    },
    {
      id: 3,
      title: "Python Essentials",
      instructor: "Alice Johnson",
      status: "Rejected",
    },
  ];

  const handleApprove = (courseId) => {
    alert(`Approved course with ID: ${courseId}`);
  };

  const handleEdit = (courseId) => {
    alert(`Edit course with ID: ${courseId}`);
  };

  const handleDelete = (courseId) => {
    if (confirm("Are you sure you want to delete this course?")) {
      alert(`Deleted course with ID: ${courseId}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Course Management</h1>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Instructor</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-t">
                <td className="p-2">{course.title}</td>
                <td className="p-2">{course.instructor}</td>
                <td className="p-2">{course.status}</td>
                <td className="p-2 space-x-2">
                  {course.status === "Pending" && (
                    <Button size="sm" onClick={() => handleApprove(course.id)}>
                      Approve
                    </Button>
                  )}
                  <Button size="sm" onClick={() => handleEdit(course.id)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;
