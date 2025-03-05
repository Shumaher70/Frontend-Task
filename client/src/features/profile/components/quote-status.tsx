import { CheckIcon, Loader } from "lucide-react";

import { IQuoteStatus } from "../types";

export const QuoteStatus = ({ label, isLoading }: IQuoteStatus) => {
  const icon = isLoading ? (
    <CheckIcon className="size-6 text-green-400" />
  ) : (
    <Loader className="text-muted-foreground size-5 animate-spin" />
  );

  return (
    <div className="flex items-center gap-x-1">
      <p>{label}</p>
      {icon}
    </div>
  );
};
