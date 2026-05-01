import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function ProtectedRoute({ children }) {
  const { user, isHydrated } = useAuthStore((state) => state);

  if (!isHydrated) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
