import { ProfilePage, AboutUsPage, SignInPage } from "@/app/pages/constants";
import { JSX } from "react";

interface IRoutes {
  path: string;
  element: JSX.Element;
}

export const routes: IRoutes[] = [
  { path: "/", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/login", element: <SignInPage /> },
];
