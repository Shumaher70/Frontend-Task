import { vi } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { renderHook, act } from "@testing-library/react-hooks";

import { useLogout } from "./use-logout";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const mockNavigate = vi.fn();
vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));

const mockLogout = vi.fn();
vi.mock("../../constants", () => ({
  useAuthStore: vi.fn(() => ({ logout: mockLogout })),
}));

describe("useLogin", () => {
  it("should handle successful logout", async () => {
    server.use(
      http.get("http://localhost:5000/api/logout", () => {
        return HttpResponse.json({
          success: true,
          data: {},
        });
      }),
    );

    const { result } = renderHook(() => useLogout());

    await act(async () => {
      result.current.logout();
    });

    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
