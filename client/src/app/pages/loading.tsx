import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Loader className="text-muted-foreground size-6 animate-spin" />
    </div>
  );
};

export default LoadingPage;
