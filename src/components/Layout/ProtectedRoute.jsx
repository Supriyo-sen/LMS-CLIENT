import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserProfileQuery } from "@/redux/slices/userSlice";
import { useEffect } from "react";

const ProtectedRoute = ({ allowedRoles }) => {
  const { data, isLoading, isError } = useGetUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const refetchGetUser = useGetUserProfileQuery();

  useEffect(() => {
    refetchGetUser.refetch();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data?.user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(data.user.role)) {
    return <Navigate to={`/dashboard/${data.user.role}`} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
