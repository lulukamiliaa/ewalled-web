import { Navigate } from "react-router-dom";
import authStore from "../store/AuthStore";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = authStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
