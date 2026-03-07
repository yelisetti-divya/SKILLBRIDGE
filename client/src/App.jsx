import { AuthProvider } from './context/AuthContext.jsx';
import AppRoutes from './routes';
import ToastContainer from './components/common/ToastContainer';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <ToastContainer />
    </AuthProvider>
  );
}