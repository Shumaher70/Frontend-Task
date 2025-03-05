import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "./use-auth-store";

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({ token: null, isAuthenticated: false });
  });

  it("should have initial state", () => {
    const state = useAuthStore.getState();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it("should login correctly", () => {
    useAuthStore.getState().login("mocked_token");

    const state = useAuthStore.getState();
    expect(state.token).toBe("mocked_token");
    expect(state.isAuthenticated).toBe(true);
  });

  it("should logout correctly", () => {
    useAuthStore.getState().login("mocked_token");
    useAuthStore.getState().logout();

    const state = useAuthStore.getState();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });
});
