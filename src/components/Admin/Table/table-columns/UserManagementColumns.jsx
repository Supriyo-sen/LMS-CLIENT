import { ArrowUpDown, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import EditUserPassword from "../../Actions/EditUserPassword";
import DeleteUser from "../../Actions/DeleteUser";
import { useState } from "react";

const Actions = ({ row }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [dltSelectedId, setDltSelectedId] = useState(null);
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        size="icon"
        className="p-1.5 border border-green-400 rounded-md gap-2 flex items-center justify-center"
        onClick={() => {
          setSelectedId(row.original._id);
        }}
      >
        <span className="sm:text-sm md:block hidden">Edit Password</span>
        <Pencil className="h-4 w-4" />
      </div>
      <div
        size="icon"
        className="p-1.5 border border-red-400 rounded-md gap-2 flex items-center justify-center"
        onClick={() => {
          setDltSelectedId(row.original._id);
        }}
      >
        <Trash className="h-4 w-4" color="red" />
      </div>
      {dltSelectedId && (
        <DeleteUser id={dltSelectedId} close={() => setDltSelectedId(null)} />
      )}
      {selectedId && (
        <EditUserPassword
          userId={selectedId}
          close={() => setSelectedId(null)}
        />
      )}
    </div>
  );
};

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <strong className="text-black">Name</strong>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc"),
              console.log("Sorting email", column.getIsSorted());
          }}
        >
          <strong className="text-black">Email</strong>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: <strong className="text-black flex justify-center">Actions</strong>,
    id: "actions",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
