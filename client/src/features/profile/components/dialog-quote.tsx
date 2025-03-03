import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { QuoteStatus } from "./quote-status";
import { Button } from "@/components/ui/button";

import { useGetQuote, useQuoteStore } from "../../constants";

export const DialogQuote = () => {
  const [open, setOpen] = useState(false);
  const { setQuote } = useQuoteStore();
  const { fetchQuote, data, loadingAuthor, loadingQuote, resetState } =
    useGetQuote("1");

  useEffect(() => {
    if (data) {
      setQuote(data);
      setOpen(false);
    }
  }, [data, setQuote]);

  const handleClose = () => {
    setOpen(false);
    resetState();
  };
  const handleOpen = () => {
    setOpen(true);
    fetchQuote();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto" onClick={handleOpen}>
          Update
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription />
        <DialogHeader>
          <DialogTitle>Requesting the quote</DialogTitle>
        </DialogHeader>
        <div>
          <QuoteStatus
            label="Step 1: Requesting author"
            isLoading={loadingAuthor}
          />
          <QuoteStatus
            label="Step 2: Requesting quote"
            isLoading={loadingQuote}
          />
        </div>
        <div>
          <Button onClick={handleClose}>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
