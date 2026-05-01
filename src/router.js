import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Borwse";
import Gpt from "./components/Gpt";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/browse",
    element: (
      <ProtectedRoute>
        <Browse />
      </ProtectedRoute>
    ),
  },
  {
    path: "/gpt",
    element: (
      <ProtectedRoute>
        <Gpt />
      </ProtectedRoute>
    ),
  },
]);
