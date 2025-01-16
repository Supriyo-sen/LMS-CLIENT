// src/pages/TeacherDashboard.jsx
import { Button } from "@/components/ui/button";

const TeacherDashboard = () => {
  const classes = [
    { id: 1, title: "React for Beginners", students: 30, date: "2025-01-15" },
    { id: 2, title: "Node.js Advanced", students: 25, date: "2025-01-16" },
  ];

  const announcements = [
    { id: 1, text: "Don't forget to complete React homework by Jan 20th." },
    { id: 2, text: "Node.js live session link is available in the portal." },
  ];

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Classes</h2>
        <ul className="space-y-4">
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{classItem.title}</h3>
                <p className="text-sm text-gray-600">
                  Students: {classItem.students} | Date: {classItem.date}
                </p>
              </div>
              <Button>View</Button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li
              key={announcement.id}
              className="p-4 bg-white shadow rounded-lg"
            >
              <p className="text-gray-800">{announcement.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TeacherDashboard;
