import CoursesList from "@/components/Course/Student/CoursesList";
import TeachersTable from "@/components/Course/Teacher/TeachersTable";
import React, { useState } from "react";

const EnrolledTeacherManagement = () => {
  const [viewingTeachers, setViewingTeachers] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [courses] = useState([
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Science" },
  ]);

  const fetchTeachers = (courseId) => {
    // Mocked data; replace with API call
    const mockTeachers = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
      { id: 4, name: "Diana Lee", email: "diana@example.com" },
      { id: 5, name: "Eve Taylor", email: "eve@example.com" },
      { id: 6, name: "Frank Wright", email: "frank@example.com" },
    ];
    setTeachers(mockTeachers);
    setViewingTeachers(true);
  };

  const handleDeleteTeacher = (teacherId) => {
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== teacherId));
  };

  return (
    <div className="container mx-auto">
      {!viewingTeachers ? (
        <CoursesList courses={courses} onViewStudents={fetchTeachers} />
      ) : (
        <TeachersTable
          teachers={teachers}
          onDelete={handleDeleteTeacher}
          onBack={() => setViewingTeachers(false)}
        />
      )}
    </div>
  );
};

export default EnrolledTeacherManagement;
