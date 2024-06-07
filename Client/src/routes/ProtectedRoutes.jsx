import React from "react";
import { Navigate, Outlet } from "react-router";
import { userData } from "../helpers";

const ProtectedRoutes = () => {
  const { jwt } = userData();
  return jwt ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoutes;
