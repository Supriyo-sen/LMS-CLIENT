import { Navigate, Outlet } from "react-router-dom";
import { useGetUserProfileQuery } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import LoadingScreen from "../common/LoadingScreen";

const PublicRoute = () => {
  const { data, isLoading } = useGetUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const refetchGetUser = useGetUserProfileQuery();

  useEffect(() => {
    refetchGetUser.refetch();
  }, []);

  if (isLoading) return <LoadingScreen />;

  return data?.user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
