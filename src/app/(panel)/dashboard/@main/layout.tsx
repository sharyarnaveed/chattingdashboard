import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayoutProps({ children }: MainLayoutProps) {
  return <div>{children}</div>;
}
