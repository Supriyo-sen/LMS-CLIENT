// src/pages/UserManagement.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showMoreTeachers, setShowMoreTeachers] = useState(false);
  const [showMoreStudents, setShowMoreStudents] = useState(false);

  const teachers = [
    {
      id: 1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Teacher",
    },
    {
      id: 2,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Teacher",
    },
  ];

  const students = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Student" },
    {
      id: 2,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Student",
    },
    {
      id: 3,
      name: "Bob Martin",
      email: "bob.martin@example.com",
      role: "Student",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Student",
    },
    {
      id: 5,
      name: "Chris Wilson",
      email: "chris.wilson@example.com",
      role: "Student",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery)
  );

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>

      {/* Teachers Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Teachers</h2>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(showMoreTeachers
                ? filteredTeachers
                : filteredTeachers.slice(0, 5)
              ).map((teacher) => (
                <tr key={teacher.id} className="border-t">
                  <td className="p-2">{teacher.name}</td>
                  <td className="p-2">{teacher.email}</td>
                  <td className="p-2 space-x-2">
                    {/* Edit Password */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm">Edit Password</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Edit Password</AlertDialogTitle>
                        </AlertDialogHeader>
                        <form className="space-y-4">
                          <Input
                            type="password"
                            placeholder="Enter new password"
                            required
                          />
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Update</AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Delete User */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTeachers.length > 5 && (
            <Button
              variant="outline"
              onClick={() => setShowMoreTeachers(!showMoreTeachers)}
              className="mt-4"
            >
              {showMoreTeachers ? "Show Less" : "Show More"}
            </Button>
          )}
        </div>
      </div>

      {/* Students Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Students</h2>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(showMoreStudents
                ? filteredStudents
                : filteredStudents.slice(0, 5)
              ).map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2 space-x-2">
                    {/* Edit Password */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm">Edit Password</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Edit Password</AlertDialogTitle>
                        </AlertDialogHeader>
                        <form className="space-y-4">
                          <Input
                            type="password"
                            placeholder="Enter new password"
                            required
                          />
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Update</AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Delete User */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredStudents.length > 5 && (
            <Button
              variant="outline"
              onClick={() => setShowMoreStudents(!showMoreStudents)}
              className="mt-4"
            >
              {showMoreStudents ? "Show Less" : "Show More"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
