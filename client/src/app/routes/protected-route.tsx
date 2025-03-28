import { JSX, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/features/constants";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  useEffect(() => {
    const storedData = localStorage.getItem("auth-storage");
    if (!storedData) {
      useAuthStore.getState().logout();
    }
  }, []);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
