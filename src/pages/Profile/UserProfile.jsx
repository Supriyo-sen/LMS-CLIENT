// src/pages/UserProfile.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={isEditing ? "" : "bg-gray-100 cursor-not-allowed"}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={isEditing ? "" : "bg-gray-100 cursor-not-allowed"}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Role</label>
            <Input
              type="text"
              name="role"
              value={formData.role}
              disabled
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>
          {isEditing ? (
            <Button onClick={handleSave} className="w-full">
              Save Changes
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="w-full">
              Edit Profile
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
