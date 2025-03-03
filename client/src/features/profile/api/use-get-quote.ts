import { useRef, useState } from "react";

export const useGetQuote = (token: string) => {
  const [loadingAuthor, setLoadingAuthor] = useState(false);
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{ author: string; quote: string } | null>(
    null,
  );
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchQuote = async () => {
    setError(null);
    setLoadingAuthor(false);
    setLoadingQuote(false);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const authorResponse = await fetch(
        `http://localhost:5000/api/author?token=${token}`,
        { signal: controller.signal },
      );

      if (!authorResponse.ok) {
        throw new Error("Failed to fetch author");
      }
      const author = await authorResponse.json();

      if (!author.success) {
        throw new Error("Failed to fetch author");
      }
      setLoadingAuthor(true);

      const quoteResponse = await fetch(
        `http://localhost:5000/api/quote?token=${token}&authorId=${author.data.authorId}`,
        { signal: controller.signal },
      );

      if (!quoteResponse.ok) {
        throw new Error("Failed to fetch quote");
      }
      const quote = await quoteResponse.json();
      if (!quote.success) {
        throw new Error("Failed to fetch quote");
      }
      setLoadingQuote(true);

      setData({
        author: author.data.name,
        quote: quote.data.quote,
      });
    } catch (err) {
      setError(`Error: ${err}`);
    }
  };

  const resetState = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setLoadingAuthor(false);
    setLoadingQuote(false);
    setError(null);
  };

  return { fetchQuote, resetState, data, loadingAuthor, loadingQuote, error };
};
