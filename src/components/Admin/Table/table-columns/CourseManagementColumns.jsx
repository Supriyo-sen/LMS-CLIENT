import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import DeleteCourse from "../../Actions/DeleteCourse";
import EditCourse from "../../Actions/EditCourse";

const Actions = ({ row }) => {
  return (
    <div className="flex items-center space-x-2">
      <EditCourse id={row.original._id} />
      <DeleteCourse id={row.original._id} />
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
          <strong className="text-black">Title</strong>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "teacherId?.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <strong className="text-black">Instructor</strong>
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center ml-4 text-nowrap text-ellipsis">
        <div>{row.original.teacherId?.name}</div>
      </div>
    ),
  },
  {
    accessorKey: "courseState",
    header: <strong className="text-black">Status</strong>,
  },
  {
    header: <strong className="text-black">Actions</strong>,
    id: "_id",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
];
