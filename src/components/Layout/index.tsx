import React from "react";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  children,
}: LayoutProps) => {
  return (
    <div className="w-screen h-screen px-80 bg-blue-1000">
      <title>{pageTitle}</title>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
