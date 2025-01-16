// src/pages/NotFound.jsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button onClick={() => navigate("/")} className="px-6 py-2">
        Go to Homepage
      </Button>
    </div>
  );
};

export default NotFound;
