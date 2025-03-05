import { vi } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { renderHook, act } from "@testing-library/react";

import { useLogin } from "./use-login";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const mockNavigate = vi.fn();
vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));

const mockLogin = vi.fn();
vi.mock("../../constants", () => ({
  useAuthStore: vi.fn(() => ({ login: mockLogin })),
}));

describe("useLogin", () => {
  it("should handle successful login", async () => {
    server.use(
      http.post("http://localhost:5000/api/login", () => {
        return HttpResponse.json({
          success: true,
          data: { token: "fake-token" },
        });
      }),
    );

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      result.current.mutate({
        email: "yandex@gmail.com",
        password: "123456",
      });
    });

    expect(mockLogin).toHaveBeenCalledWith("fake-token");
    expect(mockNavigate).toHaveBeenCalledWith("/profile");
  });

  it("should handle error login", async () => {
    server.use(
      http.post("http://localhost:5000/api/login", () => {
        return HttpResponse.json({
          success: false,
          data: { token: "Invalid credentials." },
        });
      }),
    );

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      result.current.mutate({
        email: "yandex@gmail.com",
        password: "123456",
      });
    });

    expect(result.current.error).toBe(
      "Failed to login. Please check your credentials.",
    );

    expect(mockLogin).not.toHaveBeenCalledWith();
    expect(mockNavigate).not.toHaveBeenCalledWith();
  });
});
