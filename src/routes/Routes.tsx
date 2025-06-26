import { useAuth } from "../services/auth";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
        !isAuthenticated
          ? <LoginPage />
          : <Navigate to="/dashboard" replace />
        }
      />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <DashboardPage />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
