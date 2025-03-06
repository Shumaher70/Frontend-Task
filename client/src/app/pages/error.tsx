import { NavLink } from "react-router";
import { AlertTriangle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface IErrorPage {
  reload?: boolean;
}

const ErrorPage = ({ reload }: IErrorPage) => {
  const handleReload = () => {
    window.location.reload();
  };

  const reloadPage = reload ? (
    <span className="cursor-pointer" onClick={handleReload}>
      <RefreshCw className="size-4" /> Reload page
    </span>
  ) : (
    <NavLink to="/">Back to home</NavLink>
  );

  return (
    <div className="flex h-[calc(100vh-50px)] flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="text-muted-foreground size-6" />
      <p className="text-muted-foreground text-sm">Something went wrong</p>
      <Button asChild variant="secondary" size="sm">
        {reloadPage}
      </Button>
    </div>
  );
};

export default ErrorPage;
