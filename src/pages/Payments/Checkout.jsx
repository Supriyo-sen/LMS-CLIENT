// src/pages/Checkout.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const selectedPlan = { name: "Standard", price: 49 };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", formData);
    alert("Payment Processed Successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">{selectedPlan.name} Plan</h2>
          <p className="text-gray-600">${selectedPlan.price}/month</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Name on Card
            </label>
            <Input
              type="text"
              name="nameOnCard"
              placeholder="Enter name"
              value={formData.nameOnCard}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Card Number
            </label>
            <Input
              type="text"
              name="cardNumber"
              placeholder="Enter card number"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Expiry Date
              </label>
              <Input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">CVV</label>
              <Input
                type="text"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Pay Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
