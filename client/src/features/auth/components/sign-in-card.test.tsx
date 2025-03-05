import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

import { SignInCard } from "../../constants";
import { useLogin } from "../api/use-login";

vi.mock("../api/use-login", () => ({
  useLogin: vi.fn(() => ({
    mutate: vi.fn(),
    loading: false,
    error: null,
  })),
}));

describe("SignInCard", () => {
  it("should render the login form correctly", () => {
    render(<SignInCard />);

    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should submit the form successfully when valid data is provided", async () => {
    const mockMutate = vi.fn();
    (useLogin as ReturnType<typeof vi.fn>).mockReturnValue({
      mutate: mockMutate,
      loading: false,
      error: null,
    });

    render(<SignInCard />);

    const emailInput = screen.getByPlaceholderText("Enter email address");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
