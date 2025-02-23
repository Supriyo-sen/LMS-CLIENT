import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { useDeleteUserMutation } from "@/redux/slices/adminSlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const DeleteUser = ({ id, close }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const handleDelete = async () => {
    try {
      const response = await deleteUser(id).unwrap();
      if (response.data.removeCookies) {
        Cookies.remove("auth_token");
        Cookies.remove("user");
        console.log("Cookies cleared for deleted user");
      }
      toast.success("User deleted successfully!");
      close();
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete user.");
    }
  };

  return (
    <AlertDialog open={Boolean(id)} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the User
            and remove all data associated with it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/80"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Continue"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUser;
