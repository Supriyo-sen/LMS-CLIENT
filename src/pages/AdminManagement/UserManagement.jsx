// src/pages/UserManagement.jsx
import { Button } from "@/components/ui/button";

const UserManagement = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Student" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Teacher",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Admin",
    },
  ];

  const handleEdit = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      alert(`Deleted user with ID: ${userId}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Role</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2 space-x-2">
                  <Button size="sm" onClick={() => handleEdit(user.id)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
