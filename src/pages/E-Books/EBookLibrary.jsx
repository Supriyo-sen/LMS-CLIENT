// src/pages/EBookLibrary.jsx
import { Button } from "@/components/ui/button";

const EBookLibrary = () => {
  const eBooks = [
    { id: 1, title: "Learning React", author: "John Doe" },
    { id: 2, title: "Mastering Node.js", author: "Jane Smith" },
    { id: 3, title: "Python Essentials", author: "Alice Johnson" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">E-Book Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eBooks.map((eBook) => (
          <div key={eBook.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">{eBook.title}</h3>
            <p className="text-gray-600">Author: {eBook.author}</p>
            <Button className="mt-4 w-full">View Details</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EBookLibrary;
