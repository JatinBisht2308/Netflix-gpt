// PublicRoute.js
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function PublicRoute({ children }) {
  const { user, isHydrated } = useAuthStore((state) => state);

  if (!isHydrated) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return children;
}