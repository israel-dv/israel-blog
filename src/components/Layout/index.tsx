import React from "react";
import Header from "../Header";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-blue-950">
      <title>{pageTitle}</title>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
