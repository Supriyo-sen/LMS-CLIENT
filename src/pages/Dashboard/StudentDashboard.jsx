import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Book,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Loader2,
  MessageSquare,
  PlayCircle,
  User,
} from "lucide-react";

const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      progress: 70,
      totalLessons: 20,
      completedLessons: 14,
      instructor: "Jane Doe",
      nextLesson: "React Hooks",
    },
    {
      id: 2,
      title: "Node.js Advanced",
      progress: 85,
      totalLessons: 15,
      completedLessons: 13,
      instructor: "John Smith",
      nextLesson: "Authentication & Authorization",
    },
  ];

  const schedule = [
    {
      id: 1,
      title: "React Class",
      date: "2025-01-15",
      time: "10:00 AM",
      duration: "1 hour",
      instructor: "Jane Doe",
    },
    {
      id: 2,
      title: "Node.js Class",
      date: "2025-01-16",
      time: "2:00 PM",
      duration: "1.5 hours",
      instructor: "John Smith",
    },
  ];

  const announcements = [
    {
      id: 1,
      text: "Upcoming React project due by January 20th.",
      date: "2025-01-10",
    },
    {
      id: 2,
      text: "Node.js live session has been rescheduled to January 18th.",
      date: "2025-01-12",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      text: "Completed lesson: Introduction to React Hooks",
      date: "2025-01-14",
    },
    {
      id: 2,
      text: "Submitted assignment: Building RESTful APIs with Node.js",
      date: "2025-01-13",
    },
    {
      id: 3,
      text: "Started new course: Advanced JavaScript Patterns",
      date: "2025-01-12",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-3xl font-bold mb-8" variants={itemVariants}>
        Welcome back, Student!
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={containerVariants}
        >
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Book className="mr-2" /> Enrolled Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className="mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      {course.progress}% Complete ({course.completedLessons}/
                      {course.totalLessons} lessons)
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <User className="inline mr-1" size={16} /> Instructor:{" "}
                      {course.instructor}
                    </p>
                    <p className="text-sm text-gray-600">
                      <PlayCircle className="inline mr-1" size={16} /> Next
                      Lesson: {course.nextLesson}
                    </p>
                    <Button className="mt-4 w-full">Continue Learning</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2" /> Upcoming Classes
            </h2>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200">
                  {schedule.map((classItem) => (
                    <li
                      key={classItem.id}
                      className="p-4 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-semibold">{classItem.title}</h3>
                        <p className="text-sm text-gray-600">
                          <Calendar className="inline mr-1" size={16} />{" "}
                          {classItem.date}
                        </p>
                        <p className="text-sm text-gray-600">
                          <Clock className="inline mr-1" size={16} />{" "}
                          {classItem.time} ({classItem.duration})
                        </p>
                        <p className="text-sm text-gray-600">
                          <User className="inline mr-1" size={16} /> Instructor:{" "}
                          {classItem.instructor}
                        </p>
                      </div>
                      <Button>Join Class</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>

        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bell className="mr-2" /> Announcements
            </h2>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200">
                  {announcements.map((announcement) => (
                    <li key={announcement.id} className="p-4">
                      <p className="text-gray-800 mb-1">{announcement.text}</p>
                      <p className="text-xs text-gray-500">
                        {announcement.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <CheckCircle className="mr-2" /> Recent Activities
            </h2>
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200">
                  {recentActivities.map((activity) => (
                    <li key={activity.id} className="p-4">
                      <p className="text-gray-800 mb-1">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Loader2 className="mr-2" /> Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full">
                <FileText className="mr-2" /> Assignments
              </Button>
              <Button className="w-full">
                <MessageSquare className="mr-2" /> Discussion
              </Button>
              <Button className="w-full">
                <Book className="mr-2" /> Library
              </Button>
              <Button className="w-full">
                <User className="mr-2" /> Profile
              </Button>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;
