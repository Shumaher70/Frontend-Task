import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuthStore } from "../../constants";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { logout: logoutS } = useAuthStore();

  const navigate = useNavigate();

  const logout = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        "https://frontend-task-nevk.onrender.com/api/logout",
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error("Failed to login");
      }

      logoutS();
      navigate("/login");

      toast.success("Successfully logged out!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to logout.");
      toast.error("Failed to logout.");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};
