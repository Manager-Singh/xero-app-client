// src/components/ProtectedLayout.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If token exists, render nested routes
  return <Outlet />;
};

export default ProtectedLayout;
