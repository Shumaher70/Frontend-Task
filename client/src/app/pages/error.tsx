import { NavLink } from "react-router";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="text-muted-foreground size-6" />
      <p className="text-muted-foreground text-sm">Something went wrong</p>
      <Button asChild variant="secondary" size="sm">
        <NavLink to="/">Back to home</NavLink>
      </Button>
    </div>
  );
};

export default ErrorPage;
