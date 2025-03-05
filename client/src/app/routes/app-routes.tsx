import { useRoutes } from "react-router";
import { routes } from "./routes";

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return element;
};
