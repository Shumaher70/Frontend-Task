import {
  ProfilePage,
  AboutUsPage,
  SignInPage,
  ErrorPage,
} from "@/app/pages/constants";
import { JSX } from "react";

interface IRoutes {
  path: string;
  element: JSX.Element;
}

export const routes: IRoutes[] = [
  { path: "/", element: <AboutUsPage /> },
  { path: "/*", element: <ErrorPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/login", element: <SignInPage /> },
];
