import CoursesList from "@/components/Course/Student/CoursesList";
import StudentsTable from "@/components/Course/Student/StudentsTable";
import { useFetchAllCoursesQuery } from "@/redux/slices/adminSlice";
import React, { useEffect, useState } from "react";

const EnrolledStudentManagement = () => {
  const role = "student";
  const [viewingStudents, setViewingStudents] = useState(false);
  const [students, setStudents] = useState([]);

  const { data: response, isLoading, refetch } = useFetchAllCoursesQuery();
  const courses = response || []; // Adjust based on API response

  useEffect(() => {
    if (!courses.length) {
      refetch();
    }
  }, [courses, refetch]);

  const fetchStudents = (courseId) => {
    const mockStudents = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Mark Lee", email: "mark@example.com" },
      { id: 4, name: "Emily Davis", email: "emily@example.com" },
      { id: 5, name: "Michael Brown", email: "michael@example.com" },
      { id: 6, name: "Sarah Wilson", email: "sarah@example.com" },
    ];
    setStudents(mockStudents);
    setViewingStudents(true);
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
  };

  if (isLoading) return <p>Loading courses...</p>;

  return (
    <div className="container mx-auto">
      {!viewingStudents ? (
        <CoursesList
          courses={courses}
          role={role}
          onViewStudents={fetchStudents}
        />
      ) : (
        <StudentsTable
          students={students}
          onDelete={handleDeleteStudent}
          onBack={() => setViewingStudents(false)}
        />
      )}
    </div>
  );
};

export default EnrolledStudentManagement;
