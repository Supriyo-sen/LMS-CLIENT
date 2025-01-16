// src/pages/AccountSettings.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password updated:", formData);
    alert("Password updated successfully!");
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Account Settings
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Current Password
            </label>
            <Input
              type="password"
              name="currentPassword"
              placeholder="Enter current password"
              value={formData.currentPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              New Password
            </label>
            <Input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Confirm New Password
            </label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
