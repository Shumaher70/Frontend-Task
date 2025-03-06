import { Separator } from "@radix-ui/react-separator";

import { LayoutProfile } from "../constants";

import { DialogQuote, useQuoteStore } from "@/features/constants";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import profileImage from "@/assets/profile.png";
import { Skeleton } from "@/components/ui/skeleton";

const ProfilePage = () => {
  const { quote } = useQuoteStore();

  return (
    <LayoutProfile>
      <div className="flex h-full w-full flex-col rounded-2xl bg-gradient-to-r from-neutral-50 to-neutral-300 shadow-2xl sm:h-2/3 sm:flex-row">
        <div className="flex h-0 w-full flex-1 justify-center rounded-2xl border shadow-2xl sm:h-full">
          <div className="flex h-full w-full items-center justify-center rounded-full p-7">
            <Avatar className="h-full max-h-[300px] w-full max-w-[300px] border shadow-2xl">
              <AvatarImage
                src={profileImage}
                alt="avatar"
                className="rounded-full object-contain"
              />
              <AvatarFallback className="h-full w-full">
                <Skeleton className="h-full w-full" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-y-3 p-3 sm:gap-y-7 sm:p-7">
            <h1 className="mx-auto text-2xl font-medium sm:mx-0 sm:text-3xl lg:text-5xl">
              Welcome, Alexey!
            </h1>
            <div>
              <DialogQuote />
            </div>
            <div className="rounded-lg bg-neutral-100 p-3">
              {quote ? (
                <>
                  <div>
                    <span>Author: </span>
                    <span className="font-medium italic">{quote?.author}</span>
                  </div>
                  <Separator className="my-2 h-[1px] bg-neutral-300" />
                  <p>{quote?.quote}</p>
                </>
              ) : (
                <p>Click update and get your first quote</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
};
export default ProfilePage;
