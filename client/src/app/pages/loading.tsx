import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex h-[calc(100vh-50px)] flex-col items-center justify-center">
      <Loader className="text-muted-foreground size-6 animate-spin" />
    </div>
  );
};

export default LoadingPage;
