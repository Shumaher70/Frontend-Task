import { NavLink } from "react-router";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="flex justify-end gap-2 p-2 shadow">
      <Button asChild variant="outline">
        <NavLink to="/">About us</NavLink>
      </Button>
      <Button asChild variant="outline">
        <NavLink to="/profile">Profile</NavLink>
      </Button>
      <Button asChild variant="outline">
        <NavLink to="/login">Sign in</NavLink>
      </Button>
      <Button>Sign out</Button>
    </nav>
  );
};
