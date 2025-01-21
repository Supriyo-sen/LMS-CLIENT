import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { useFetchAllCoursesQuery } from "@/redux/slices/adminSlice";
import AddCourse from "@/components/Course/AddCourse";

const CourseManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch courses from API
  const { data: courses, isLoading } = useFetchAllCoursesQuery();

  if (isLoading) return <p>Loading courses...</p>;

  const paginate = (array) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return array.slice(startIndex, startIndex + itemsPerPage);
  };

  const paginatedCourses = paginate(courses || []);

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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-6">Course Management</h1>
        <AddCourse />
      </div>
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
            {paginatedCourses.map((course) => (
              <tr key={course.id} className="border-t">
                <td className="p-2">{course.name}</td>
                <td className="p-2">{course.teacherId?.name}</td>
                <td className="p-2">{course.courseState}</td>
                <td className="p-2 space-x-2">
                  {course.status === "Pending" && (
                    <Button size="sm" onClick={() => handleApprove(course._id)}>
                      Approve
                    </Button>
                  )}
                  <Button size="sm" onClick={() => handleEdit(course._id)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={courses.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CourseManagement;
