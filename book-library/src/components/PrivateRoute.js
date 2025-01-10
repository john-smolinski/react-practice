import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  // simulate authentication with hard coded value
  const isAuthenticate = true;

  // dispaly component OR navigate to another location e.g. login
  return isAuthenticate ? Component : <Navigate to="/" />;
};
