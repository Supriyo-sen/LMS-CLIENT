// src/pages/CourseCreation.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CourseCreation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    syllabus: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Created:", formData);
    alert("Course Created Successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Create a New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">
            Course Title
          </label>
          <Input
            type="text"
            name="title"
            placeholder="Enter course title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter course description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <Input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Syllabus</label>
          <textarea
            name="syllabus"
            placeholder="Enter syllabus (comma-separated)"
            value={formData.syllabus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <Input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="mt-4">
          Create Course
        </Button>
      </form>
    </div>
  );
};

export default CourseCreation;
