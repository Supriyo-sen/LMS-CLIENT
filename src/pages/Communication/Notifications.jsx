// src/pages/Notifications.jsx
const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Assignment Due",
      message: "Your React assignment is due tomorrow.",
      time: "1 hour ago",
    },
    {
      id: 2,
      title: "New Class Scheduled",
      message: "React Basics class is scheduled for 3 PM tomorrow.",
      time: "2 hours ago",
    },
    {
      id: 3,
      title: "Course Update",
      message: "The syllabus for Python Essentials has been updated.",
      time: "4 hours ago",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="bg-white shadow-md p-4 rounded-lg"
          >
            <h3 className="font-semibold text-lg">{notification.title}</h3>
            <p className="text-gray-600">{notification.message}</p>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
