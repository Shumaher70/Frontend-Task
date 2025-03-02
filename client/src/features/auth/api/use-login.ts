import { toast } from "sonner";
import { useState } from "react";

import { TLoginRequestType } from "../types";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async ({ email, password }: TLoginRequestType) => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error("Failed to login");
      }

      toast.success("Logged in successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
};
