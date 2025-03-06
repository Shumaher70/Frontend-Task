import { vi } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { renderHook, act, waitFor } from "@testing-library/react";

import { useGetQuote } from "./use-get-quote";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("useGetQuote", () => {
  it("should fetch author and quote successfully", async () => {
    server.use(
      http.get("http://localhost:5000/api/author", () => {
        return HttpResponse.json({
          success: true,
          data: { authorId: 1, name: "Mark Twain" },
        });
      }),
      http.get("http://localhost:5000/api/quote", () => {
        return HttpResponse.json({
          success: true,
          data: { quote: "The secret of getting ahead is getting started." },
        });
      }),
    );
    const { result } = renderHook(() => useGetQuote("test-token"));
    act(() => {
      result.current.fetchQuote();
    });
    ////////////////////////////////////////////

    await waitFor(() => {
      expect(result.current.loadingAuthor).toBe(true);
      expect(result.current.loadingQuote).toBe(true);
      expect(result.current.error).toBeNull();
      expect(result.current.data).toEqual({
        author: "Mark Twain",
        quote: "The secret of getting ahead is getting started.",
      });
    });
  });

  it("should handle errors when fetching author", async () => {
    server.use(
      http.get("http://localhost:5000/api/author", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    const { result } = renderHook(() => useGetQuote("test-token"));
    act(() => {
      result.current.fetchQuote();
    });
    /////////////////////////////////////

    await waitFor(() => {
      expect(result.current.loadingAuthor).toBe(false);
      expect(result.current.loadingQuote).toBe(false);
      expect(result.current.error).toContain("Error");
      expect(result.current.data).toBeNull();
    });
  });

  it("should abort previous requests on new fetchQuote call", async () => {
    const abortSpy = vi.spyOn(AbortController.prototype, "abort");
    server.use(
      http.get("http://localhost:5000/api/author", () => {
        return HttpResponse.json({
          success: true,
          data: { authorId: 1, name: "Mark Twain" },
        });
      }),
    );
    const { result } = renderHook(() => useGetQuote("test-token"));
    act(() => {
      result.current.fetchQuote();
      result.current.fetchQuote();
    });
    expect(abortSpy).toHaveBeenCalled();
  });

  it("should reset state", () => {
    const { result } = renderHook(() => useGetQuote("test-token"));

    act(() => {
      result.current.resetState();
    });
    expect(result.current.loadingAuthor).toBe(false);
    expect(result.current.loadingQuote).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();
  });
});
