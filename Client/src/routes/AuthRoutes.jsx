import React from "react";
import { userData } from "../helpers";
import { Navigate, Outlet } from "react-router";
const AuthRoutes = () => {
  const { jwt } = userData();
  return !jwt ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
