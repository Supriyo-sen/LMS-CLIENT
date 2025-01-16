// src/pages/CourseListing.jsx
import { Button } from "@/components/ui/button";

const CourseListing = () => {
  const courses = [
    { id: 1, title: "React for Beginners", teacher: "John Doe", price: 49 },
    { id: 2, title: "Node.js Advanced", teacher: "Jane Smith", price: 79 },
    { id: 3, title: "Python Essentials", teacher: "Alice Johnson", price: 59 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
            <p className="text-gray-600">Instructor: {course.teacher}</p>
            <p className="text-gray-800 font-bold mt-2">${course.price}</p>
            <Button className="mt-4 w-full">Enroll Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
