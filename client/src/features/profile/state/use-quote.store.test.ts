import { useQuoteStore } from "./use-quote-store";
import { renderHook, act } from "@testing-library/react";

describe("useQuoteStore", () => {
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useQuoteStore());

    expect(result.current.quote).toBeNull();
  });

  it("should update quote state", () => {
    const { result } = renderHook(() => useQuoteStore());

    const newQuote = {
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    };

    act(() => {
      result.current.setQuote(newQuote);
    });

    expect(result.current.quote).toEqual(newQuote);
  });
});
