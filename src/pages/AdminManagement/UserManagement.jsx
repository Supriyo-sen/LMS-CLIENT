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
import {
  useFetchAllUsersQuery,
  useDeleteUserMutation,
} from "@/redux/slices/adminSlice";
import { useChangePasswordMutation } from "@/redux/slices/userSlice";
import toast from "react-hot-toast";
import { EyeClosed, EyeIcon } from "lucide-react";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { data: users, isLoading } = useFetchAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [changePassword] = useChangePasswordMutation();

  if (isLoading) return <p>Loading...</p>;

  const teachers = users?.filter((user) => user.role === "teacher");
  const students = users?.filter((user) => user.role === "student");

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete user.");
    }
  };

  const handleChangePassword = async (userId) => {
    try {
      await changePassword({
        id: userId,
        body: { password: newPassword },
      }).unwrap();
      toast.success("Password updated successfully!");
      setEditUserId(null);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update password.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredTeachers = teachers?.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery)
  );

  const filteredStudents = students?.filter((student) =>
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
              {filteredTeachers?.map((teacher) => (
                <tr key={teacher.id} className="border-t">
                  <td className="p-2">{teacher.name}</td>
                  <td className="p-2">{teacher.email}</td>
                  <td className="p-2 space-x-2">
                    {/* Edit Password */}
                    <AlertDialog open={editUserId === teacher._id}>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="sm"
                          onClick={() => setEditUserId(teacher._id)}
                        >
                          Edit Password
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Edit Password</AlertDialogTitle>
                        </AlertDialogHeader>
                        <form
                          className="space-y-4"
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleChangePassword(teacher._id);
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter new password"
                              required
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeIcon size={20} />
                              ) : (
                                <EyeClosed size={20} />
                              )}
                            </button>
                          </div>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setEditUserId(null)}
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction type="submit">
                              Update
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Delete User */}
                    <AlertDialog open={deleteUserId === teacher._id}>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => setDeleteUserId(teacher._id)}
                        >
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
                          <AlertDialogCancel
                            onClick={() => setDeleteUserId(null)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(teacher._id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              {filteredStudents?.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.email}</td>
                  <td className="p-2 space-x-2">
                    {/* Edit Password */}
                    <AlertDialog open={editUserId === student._id}>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="sm"
                          onClick={() => setEditUserId(student._id)}
                        >
                          Edit Password
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Edit Password</AlertDialogTitle>
                        </AlertDialogHeader>
                        <form
                          className="space-y-4"
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleChangePassword(student._id);
                          }}
                        >
                          <div className="flex items-center space-x-2">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter new password"
                              required
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeIcon size={20} />
                              ) : (
                                <EyeClosed size={20} />
                              )}
                            </button>
                          </div>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setEditUserId(null)}
                            >
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction type="submit">
                              Update
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Delete User */}
                    <AlertDialog open={deleteUserId === student.id}>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => setDeleteUserId(student.id)}
                        >
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
                          <AlertDialogCancel
                            onClick={() => setDeleteUserId(null)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(student.id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
