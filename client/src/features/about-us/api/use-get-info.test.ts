import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { useGetInfo } from "./use-get-info";
import { renderHook, act } from "@testing-library/react-hooks";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("useGetInfo", () => {
  it("should return data when the request is successful", async () => {
    server.use(
      http.get("http://localhost:5000/api/info", () => {
        return HttpResponse.json({
          success: true,
          data: {
            info: "Some info",
          },
        });
      }),
    );

    const { result } = renderHook(() => useGetInfo());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBe("Some info");
  });

  it("should return an error if the request fails", async () => {
    server.use(
      http.get("http://localhost:5000/api/info", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    const { result } = renderHook(() => useGetInfo());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Failed to fetch info");
    expect(result.current.data).toBeNull();
  });

  it("should return an error on network issues", async () => {
    server.use(
      http.get("http://localhost:5000/api/info", () => {
        throw new Error("Network error");
      }),
    );

    const { result } = renderHook(() => useGetInfo());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Failed to fetch info");
    expect(result.current.data).toBeNull();
  });
});
