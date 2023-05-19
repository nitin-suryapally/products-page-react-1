import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const ProtechtedRoute = ({ children, user }) => {
  console.log(children);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtechtedRoute;
