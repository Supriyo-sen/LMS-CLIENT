// src/pages/ClassSchedule.jsx
import { Button } from "@/components/ui/button";

const ClassSchedule = () => {
  const schedule = [
    { id: 1, title: "React Class", date: "2025-01-15", time: "10:00 AM" },
    { id: 2, title: "Node.js Class", date: "2025-01-16", time: "2:00 PM" },
    { id: 3, title: "Python Class", date: "2025-01-17", time: "4:00 PM" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Class Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedule.map((classItem) => (
          <div key={classItem.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">{classItem.title}</h3>
            <p className="text-gray-600">
              {classItem.date} at {classItem.time}
            </p>
            <Button className="mt-4 w-full">Join Class</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;
