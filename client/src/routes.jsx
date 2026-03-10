import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NGODashboard from "./components/dashboards/NGODashboard";
import VolunteerDashboard from "./components/dashboards/VolunteerDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* OPEN REGISTER PAGE FIRST */}
        <Route path="/" element={<Navigate to="/register" />} />

        {/* AUTH ROUTES */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ROLE-BASED DASHBOARDS */}
        <Route
          path="/ngo-dashboard"
          element={
            <ProtectedRoute>
              <NGODashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer-dashboard"
          element={
            <ProtectedRoute>
              <VolunteerDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}