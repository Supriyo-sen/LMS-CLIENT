// src/pages/PaymentFailure.jsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed!</h1>
      <p className="text-gray-700 mb-6">
        Oops! Something went wrong. Please try again.
      </p>
      <Button onClick={() => navigate("/pricing")}>Back to Pricing</Button>
    </div>
  );
};

export default PaymentFailure;
