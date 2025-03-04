import { NavLink } from "react-router";

import { Button } from "./ui/button";

import { useAuthStore, useLogout } from "@/features/constants";

export const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed flex w-full justify-end gap-2 bg-white p-2 shadow">
      <Button asChild variant="outline">
        <NavLink to="/">About us</NavLink>
      </Button>
      {isAuthenticated && (
        <Button asChild variant="outline">
          <NavLink to="/profile">Profile</NavLink>
        </Button>
      )}
      {!isAuthenticated && (
        <Button asChild variant="outline">
          <NavLink to="/login">Sign in</NavLink>
        </Button>
      )}
      {isAuthenticated && <Button onClick={handleLogout}>Sign out</Button>}
    </nav>
  );
};
