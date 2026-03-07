import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Login from './components/auth/Login';
import SignupVolunteer from './components/auth/SignupVolunteer';
import SignupNGO from './components/auth/SignupNGO';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import EmailVerified from './components/auth/EmailVerified';
import VerifyEmail from './components/auth/VerifyEmail';
import VolunteerDashboard from './components/dashboards/Volunteer/VolunteerDashboard';
import NGODashboard from './components/dashboards/NGO/NGODashboard';

function Private({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/volunteer" element={<SignupVolunteer />} />
        <Route path="/signup/ngo" element={<SignupNGO />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/email-verified" element={<EmailVerified />} />
        <Route
          path="/dashboard/volunteer"
          element={
            <Private role="volunteer">
              <VolunteerDashboard />
            </Private>
          }
        />
        <Route
          path="/dashboard/ngo"
          element={
            <Private role="ngo">
              <NGODashboard />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}