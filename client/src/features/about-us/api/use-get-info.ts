import { useState, useEffect } from "react";

import { IApiResponse } from "../types";

export const useGetInfo = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontend-task-nevk.onrender.com/api/info",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: IApiResponse = await response.json();

        const { data } = result;
        const { info } = data;

        setData(info);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Failed to fetch info");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
