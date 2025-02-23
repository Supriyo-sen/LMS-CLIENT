// src/components/ImageModal.jsx
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const ShowImage = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Image Trigger */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <img
            src={src}
            alt={alt}
            className="cursor-pointer rounded-lg shadow-md hover:opacity-90 transition w-20 aspect-auto"
            onClick={() => setOpen(true)}
          />
        </AlertDialogTrigger>

        {/* Modal Content */}
        <AlertDialogContent className="max-w-4xl bg-white rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>{alt || "Image Preview"}</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex justify-center items-center py-4">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[70vh] rounded-lg"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpen(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ShowImage;
