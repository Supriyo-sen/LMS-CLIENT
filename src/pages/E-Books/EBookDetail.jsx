// src/pages/EBookDetail.jsx
import { Button } from "@/components/ui/button";

const EBookDetail = () => {
  const eBook = {
    title: "Learning React",
    author: "John Doe",
    description:
      "This eBook provides a comprehensive guide to learning React, including hooks, components, and best practices.",
    downloadLink: "/path/to/ebook.pdf",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">{eBook.title}</h1>
        <p className="text-gray-600 mb-4">Author: {eBook.author}</p>
        <p className="text-gray-800 mb-6">{eBook.description}</p>
        <Button as="a" href={eBook.downloadLink} download className="w-full">
          Download eBook
        </Button>
      </div>
    </div>
  );
};

export default EBookDetail;
