// src/pages/CourseDetail.jsx
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const course = {
    title: "React for Beginners",
    teacher: "John Doe",
    price: 49,
    description:
      "Learn React from scratch with hands-on examples and projects.",
    syllabus: [
      "Introduction to React",
      "State and Props",
      "React Hooks",
      "React Router",
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-4">Instructor: {course.teacher}</p>
      <p className="text-gray-800 mb-6">{course.description}</p>
      <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
      <ul className="list-disc pl-6">
        {course.syllabus.map((item, index) => (
          <li key={index} className="text-gray-800">
            {item}
          </li>
        ))}
      </ul>
      <Button className="mt-6">${course.price} - Enroll Now</Button>
    </div>
  );
};

export default CourseDetail;
