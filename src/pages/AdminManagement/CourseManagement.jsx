import { useEffect, useState } from "react";
import { useFetchAllCoursesQuery } from "@/redux/slices/adminSlice";
import AddCourse from "@/components/Course/AddCourse";
import { DataTable } from "@/components/Admin/Table/DataTable";
import { columns } from "@/components/Admin/Table/table-columns/CourseManagementColumns";
import LoadingScreen from "@/components/common/LoadingScreen";

const CourseManagement = () => {
  const {
    data: courses,
    isLoading,
    refetch,
    isFetching,
  } = useFetchAllCoursesQuery(undefined, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading || isFetching) return <LoadingScreen />;

  return (
    <div className="p-6  min-h-screen">
      <div className="flex items-center justify-between mb-4 -mt-6">
        <h1 className="text-3xl font-bold mb-6 lg:mt-16">Course Management</h1>
        <AddCourse />
      </div>

      <DataTable columns={columns} data={courses || []} />
    </div>
  );
};

export default CourseManagement;
