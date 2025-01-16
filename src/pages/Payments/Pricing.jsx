// src/pages/Pricing.jsx
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: 29,
      features: ["Access to 10 courses", "Basic Support"],
    },
    {
      id: 2,
      name: "Standard",
      price: 49,
      features: ["Access to 20 courses", "Priority Support"],
    },
    {
      id: 3,
      name: "Premium",
      price: 99,
      features: ["Access to all courses", "24/7 Support"],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">{plan.name}</h2>
            <p className="text-center text-gray-600 font-semibold text-xl mb-6">
              ${plan.price}/month
            </p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full">Buy Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
