import { ReactNode } from "react";

interface ILayoutApp {
  children: ReactNode;
}

export const LayoutApp = ({ children }: ILayoutApp) => {
  return <div className="bg-neutral-100 pt-[50px]">{children}</div>;
};
