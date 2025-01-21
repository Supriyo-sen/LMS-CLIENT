import CoursesList from "@/components/Course/Student/CoursesList";
import StudentsTable from "@/components/Course/Student/StudentsTable";
import React, { useState } from "react";

const EnrolledStudentManagement = () => {
  const [viewingStudents, setViewingStudents] = useState(false);
  const [students, setStudents] = useState([]);
  const [courses] = useState([
    { id: 1, name: "Course 1" },
    { id: 2, name: "Course 2" },
    { id: 3, name: "Course 3" },
    { id: 4, name: "Course 4" },
    { id: 5, name: "Course 5" },
  ]);

  const fetchStudents = (courseId) => {
    // Mocked data; replace with API call
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

  return (
    <div className="container mx-auto">
      {!viewingStudents ? (
        <CoursesList courses={courses} onViewStudents={fetchStudents} />
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
