import { JSX } from "react";

import {
  ErrorPage,
  SignInPage,
  AboutUsPage,
  ProfilePage,
} from "@/app/pages/constants";
import ProtectedRoute from "./protected-route";

interface IRoutes {
  path: string;
  element: JSX.Element;
}

export const routes: IRoutes[] = [
  { path: "/", element: <AboutUsPage /> },
  { path: "/*", element: <ErrorPage /> },
  { path: "/login", element: <SignInPage /> },
  { path: "/profile", element: <ProtectedRoute element={<ProfilePage />} /> },
];
