import { ReactNode } from "react";

interface ILayoutApp {
  children: ReactNode;
}

export const LayoutApp = ({ children }: ILayoutApp) => {
  return <div className="pt-[50px]">{children}</div>;
};
