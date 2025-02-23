import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useChangePasswordMutation } from "@/redux/slices/userSlice";
import toast from "react-hot-toast";

const EditUserPassword = ({ userId, close }) => {
  console.log("EditUserPassword -> userId", userId);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await changePassword({
        id: userId,
        body: { password: newPassword },
      }).unwrap();
      toast.success("Password updated successfully!");
      close();
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update password.");
    }
  };

  return (
    <Dialog open={Boolean(userId)} onOpenChange={close}>
      <DialogContent className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">
            Change Password
          </h2>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              New Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleChangePassword}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Updating..." : "Update Password"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserPassword;
