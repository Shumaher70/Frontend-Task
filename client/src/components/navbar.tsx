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
    <nav className="fixed w-full bg-white p-2 shadow">
      <div className="mx-auto flex max-w-7xl justify-end gap-2">
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
      </div>
    </nav>
  );
};
