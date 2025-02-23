import { useState } from "react";
import { useFetchAllUsersQuery } from "@/redux/slices/adminSlice";
import { DataTable } from "@/components/Admin/Table/DataTable";
import { columns } from "../../components/Admin/Table/table-columns/UserManagementColumns";
import LoadingScreen from "@/components/common/LoadingScreen";
const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: users,
    isLoading,
    isFetching,
  } = useFetchAllUsersQuery(undefined, { refetchOnMountOrArgChange: true });

  const teachers = users?.filter((user) => user.role === "teacher");
  const students = users?.filter((user) => user.role === "student");

  const filteredTeachers = teachers?.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery)
  );

  const filteredStudents = students?.filter((student) =>
    student.name.toLowerCase().includes(searchQuery)
  );

  if (isLoading || isFetching) return <LoadingScreen />;

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {/* Teachers Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Teachers</h2>

        <DataTable columns={columns} data={filteredTeachers} />
      </div>

      {/* Students Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Students</h2>

        <DataTable columns={columns} data={filteredStudents} />
      </div>
    </div>
  );
};

export default UserManagement;
